{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };
  outputs = { self, nixpkgs, flake-utils }: let
    system = "x86_64-linux";
  in {
    devShells."${system}".default = let
      pkgs = import nixpkgs {
        inherit system;
      };
    in pkgs.mkShell {
      packages = with pkgs; [
        nodejs_22
        nodePackages.pnpm
      ];

      shellHook = ''
        echo "node `${pkgs.nodejs}/bin/node --version`"
      '';
    };
  };
}