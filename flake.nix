{
  description = "Development environment for quartz-themes with npm scripts support";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config = {
            allowUnfree = true;
          };
        };

        # Libraries needed for dynamically linked binaries (e.g., chromedriver from webdriverio)
        libraries = with pkgs; [
          # Core libraries for dynamically linked executables
          stdenv.cc.cc.lib
          zlib
          glib
          nss
          nspr
          atk
          cups
          dbus
          expat
          libdrm
          libxkbcommon
          pango
          cairo
          mesa
          alsa-lib
          at-spi2-atk
          at-spi2-core
          # X11 libraries for headless browser automation
          xorg.libX11
          xorg.libXcomposite
          xorg.libXdamage
          xorg.libXext
          xorg.libXfixes
          xorg.libXrandr
          xorg.libxcb
          # GTK for Electron/Chromium-based applications
          gtk3
          # Additional libraries for Chromium/Electron
          libGL
          udev
        ];

        # Use nix-ld to provide dynamic linker for downloaded binaries
        nix-ld-libraries = pkgs.lib.makeLibraryPath libraries;
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Node.js and npm
            nodejs_22
            # Just command runner
            just
            # Git for version control
            git
            # Additional development tools
            python3
          ] ++ libraries;

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
