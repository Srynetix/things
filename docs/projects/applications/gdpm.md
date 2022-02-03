---
tags: [godot, rust]
---
[:back: Back to **Projects**](../)
# gdpm - Godot Project Manager

<ProjectCard
    language="Rust"
    date="2019"
    status="paused"
    url="https://github.com/Srynetix/gdpm"
/>

## Summary

A command-line utility to handle [Godot Engine](https://godotengine.org/) versions and Godot Engine projects, made in Rust.  
It can also download engine versions.

## Origin

It was not really fun handling Godot Engine versions by hand (especially beta and RC releases), even less fun linking them to projects.  
I also wanted a system to handle dependencies, like cargo or npm.  
And I wanted to do a command-line utility in Rust, so... :smile:

## Features

- Read and write project information from command-line
- Manage Godot instances
    - Manually define them
    - Let the tool download the Godot version
- Manage dependencies
    - Sync from another project
    - Sync from external source (git supported)
    - Desync dependencies
    - Fork dependency in project (vendoring)
- Proxy commands to engine instance (like `gdpm export`)
