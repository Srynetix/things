---
tags: [emulation, rust]
---
[:back: Back to **Projects**](../)
# CHIP-8 Emulator

<ProjectCard
    language="Rust"
    date="2018"
    status="paused"
    url="https://github.com/Srynetix/chip8"
    :screenshots="[$withBase('/images/chip-8.gif')]"
/>

## Summary

A simple emulator for the [CHIP-8 virtual console](https://en.wikipedia.org/wiki/CHIP-8), written in [Rust](https://www.rust-lang.org).  
That's my first serious project in Rust, where I try to experiment graphics features.

The rendering and windowing is made using the [macroquad](https://github.com/not-fl3/macroquad) game library.

## Origin

Since I discovered emulators when I was younger, I wanted to do one, to learn how it was made.  
Before emulating a known console like the Gameboy or the NES, I had to find a lower target, and searching "how to write an emulator" on _your favorite search engine_, I heard of **CHIP-8** as a de-facto first emulator target.

Technically, I wanted to use a "low-level" language, and I wanted to try Rust.  
So there you go, a CHIP-8 emulator made in Rust.

During the development, I wanted to use more graphics features, and write a step-by-step debugger, so I made a graphical debugger for the CHIP-8 embedded in the emulator.

## Features

- Supports most CHIP-8 (with early SUPERCHIP-8 support)
- Command-line driven emulator (chip8-cli), with a CLI debugger
- GUI emulator (chip8-gui), with an embedded graphical debugger (TUI-like experience)
- Cartridge assembler/disassembler
    - Make your own CHIP-8 game!
- Save-state system
