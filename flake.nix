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
              xorg.libX11
              xorg.libXcomposite
              xorg.libXdamage
              xorg.libXext
              xorg.libXfixes
              xorg.libXrandr
              xorg.libxcb
              xorg.libXcursor
              xorg.libXi
              xorg.libXrender
              xorg.libXtst
              xorg.libXScrnSaver
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
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs =
            with pkgs;
            [
              # Node.js and npm
              nodejs_22
              bun
              # Just command runner
              just
              # Git for version control
              git
              # Additional development tools
              python3
            ]
            ++ libraries;

          # Environment variables for nix-ld
          NIX_LD_LIBRARY_PATH = nix-ld-libraries;
          NIX_LD = pkgs.lib.fileContents "${pkgs.stdenv.cc}/nix-support/dynamic-linker";

          shellHook = ''
            echo "quartz-themes development environment loaded"
            echo "Node.js version: $(node --version)"
            echo "npm version: $(npm --version)"
            echo ""
            echo "Run 'npm install' to install dependencies"
            echo "Run 'npm run web:run' to extract themes"
            echo "Run 'just' to see available commands"
          '';
        };
      }
    );
}
