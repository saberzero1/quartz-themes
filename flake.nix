{
  description = "Development environment for quartz-themes with npm scripts support";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config = {
            allowUnfree = true;
          };
        };

        darwinLibraries = (if pkgs.stdenv.isDarwin then with pkgs; [ ] else [ ]);

        linuxLibraries = (
          if pkgs.stdenv.isLinux then
            with pkgs;
            [
              libdrm
              alsa-lib
              # Additional libraries for Chromium/Electron
              udev
              # X11 libraries for headless browser automation
              libx11
              libxcomposite
              libxdamage
              libxext
              libxfixes
              libxrandr
              libxcb
              libxcursor
              libxi
              libxrender
              libxtst
              libxscrnsaver
              # GTK for Electron/Chromium-based applications
              gtk3
              gtk4
              # Additional libraries for Chromium/Electron
              libGL
              # Graphics buffer management (required for Chromium)
              libgbm
              # Font configuration
              fontconfig
              freetype
              # UUID generation (important for unique user-data-dir)
              libuuid
              # System utilities
              systemd
              # Wayland support
              wayland
              # Additional Electron dependencies
              libnotify
              libappindicator-gtk3
              libdbusmenu
            ]
          else
            [ ]
        );

        # Libraries needed for dynamically linked binaries (e.g., chromedriver from webdriverio)
        libraries =
          with pkgs;
          [
            # Core libraries for dynamically linked executables
            stdenv.cc.cc.lib
            zlib
            glib
            nss
            nspr
            atk
            cups
            dbus
            dbus.lib
            expat
            libxkbcommon
            pango
            cairo
            mesa
            at-spi2-atk
            at-spi2-core
            # Networking
            curl
            wget
          ]
          ++ (if pkgs.stdenv.isDarwin then darwinLibraries else linuxLibraries);

        # Use nix-ld to provide dynamic linker for downloaded binaries
        nix-ld-libraries = pkgs.lib.makeLibraryPath libraries;

        # `e2e-headless <command>` runs a command on a private Xvfb display, so
        # the Obsidian windows the fidelity harness launches never open on the
        # desktop or take its focus. CI does the same. (Same wrapper as
        # quartz-syncer / motions.)
        #
        #   * A window manager is required: Chromium starves
        #     requestAnimationFrame for unmapped windows.
        #   * Electron prefers Wayland when it finds a compositor socket, which
        #     would put the window back on the desktop, so the Wayland
        #     variables are cleared.
        #   * A server killed without cleanup leaves `/tmp/.X<n>-lock` with no
        #     process behind it, and the next Xvfb refuses that display, so a
        #     stale lock is removed and the teardown runs from a trap.
        #   * `-dpi 96`: at Xvfb's default resolution Chromium reports a device
        #     pixel ratio of 1.046875, which skews measured sizes.
        e2eHeadless =
          if pkgs.stdenv.isLinux then
            [
              (pkgs.writeShellScriptBin "e2e-headless" ''
                set -euo pipefail

                DISPLAY_NUM=""
                for n in $(${pkgs.coreutils}/bin/seq 90 99); do
                  if [ -e "/tmp/.X''${n}-lock" ] &&
                    ! ${pkgs.procps}/bin/pgrep -f "Xvfb :''${n}( |$)" >/dev/null 2>&1; then
                    rm -f "/tmp/.X''${n}-lock" "/tmp/.X11-unix/X''${n}" 2>/dev/null || true
                  fi
                  if [ ! -e "/tmp/.X''${n}-lock" ]; then DISPLAY_NUM="''${n}"; break; fi
                done
                if [ -z "''${DISPLAY_NUM}" ]; then
                  echo "e2e-headless: displays :90-:99 are all taken" >&2
                  exit 1
                fi

                XVFB_PID=""
                WM_PID=""
                cleanup() {
                  [ -n "''${WM_PID}" ] && kill -9 "''${WM_PID}" 2>/dev/null || true
                  [ -n "''${XVFB_PID}" ] && kill -9 "''${XVFB_PID}" 2>/dev/null || true
                  rm -f "/tmp/.X''${DISPLAY_NUM}-lock" \
                    "/tmp/.X11-unix/X''${DISPLAY_NUM}" 2>/dev/null || true
                }
                trap cleanup EXIT INT TERM

                export DISPLAY=":''${DISPLAY_NUM}"
                unset WAYLAND_DISPLAY
                # A host LD_LIBRARY_PATH (e.g. a newer system alsa-lib) would
                # override nix-ld's NIX_LD_LIBRARY_PATH and mismatch this
                # shell's glibc; downloaded Obsidian builds only need nix-ld.
                unset LD_LIBRARY_PATH
                export XDG_SESSION_TYPE=x11
                export ELECTRON_OZONE_PLATFORM_HINT=x11

                ${pkgs.xvfb}/bin/Xvfb "''${DISPLAY}" \
                  -screen 0 1600x1200x24 -dpi 96 +extension GLX -noreset >/dev/null 2>&1 &
                XVFB_PID=$!
                for _ in $(${pkgs.coreutils}/bin/seq 1 80); do
                  ${pkgs.xdpyinfo}/bin/xdpyinfo -display "''${DISPLAY}" \
                    >/dev/null 2>&1 && break
                  sleep 0.25
                done

                ${pkgs.herbstluftwm}/bin/herbstluftwm >/dev/null 2>&1 &
                WM_PID=$!
                sleep 2

                echo "e2e-headless: running on ''${DISPLAY}" >&2
                if [ "$#" -eq 0 ]; then
                  just fidelity
                else
                  "$@"
                fi
              '')
            ]
          else
            [ ];
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs =
            with pkgs;
            [
              # Node.js and npm
              nodejs_24
              bun
              # Just command runner
              just
              # Git for version control
              git
              git-filter-repo
              # Additional development tools
              python3
              # Headless Chromium for the converter preview/fidelity harness
              chromium
            ]
            ++ libraries
            ++ e2eHeadless;

          # Environment variables for nix-ld
          NIX_LD_LIBRARY_PATH = nix-ld-libraries;
          NIX_LD = pkgs.lib.fileContents "${pkgs.stdenv.cc}/nix-support/dynamic-linker";

          shellHook = ''
            echo "quartz-themes development environment loaded"
            echo "Node.js version: $(node --version)"
            echo "npm version: $(npm --version)"
            echo ""
            echo "Run 'npm install' to install dependencies"
            echo "Run 'just convert-themes' to run the static converter over all themes"
            echo "Run 'e2e-headless [command]' to run Obsidian on a private display"
            echo "Run 'just' to see available commands"
          '';
        };
      }
    );
}
