## Summary

While developing games with Godot, I use GDScript, since it's the most recommended language, and it integrates really well in the game development workflow.

I was mostly using C# with Godot in the past, but performance problems on the Web target made me reconsider the language to use.

As I am also a professional Python developer (and a decent Rust developer), I want a great tooling experience around the language, which, for me, is:

1. An opinionated automatic code formatter (like `black` for Python, or `rustfmt` for Rust)
2. A sensible and extensible code linting tool (like `flake8` for Python, or `clippy` for Rust)

Other features that could be great in this project are:

3. Add the possibility to manage / download engine versions (already possible with my [gdpm](/projects/gdpm) utility)
4. Add scaffolding utilities to bootstrap a project using a template (or a built-in project with sensible defaults)
5. Manage dependencies / addons (also somewhat possible with `gdpm`)
6. Compatibility with the all new Godot Engine 4.x

(I think I will merge `gdpm` in the `gdtx` project, but that's something for future me.)

One last thing, I want to do everything in Rust.

### Extra

I will use this project to improve my skills on the static analysis field, but also lexing / parsing / formatting a programming language: GDScript.
