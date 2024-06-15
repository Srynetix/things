_all:
    @just --list

# Format
fmt:
    npm run format

# Lint
lint:
    npm run lint
    npm run check
