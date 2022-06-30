---
tags: [game-framework, c++]
---
<Back name="Projects" />
# hx3d framework

<ProjectCard
    language="C++"
    date="2015"
    status="abandoned"
    url="https://github.com/Srynetix/hx3d-framework"
    :screenshots="['/images/hx3d.png']"
/>

## Summary

hx3d was a easy to use and easy to learn open-source 2D/3D game framework, made in modern C++ (C++14 at the time).  
Inspiration was taken from the well-known [libGDX](https://libgdx.badlogicgames.com/) Java game framework, and many tutorials about game engine programming.

It was written with modularity in mind. Rendering is done using [SDL2](https://www.libsdl.org/), but it can be swapped with something else quite easily.  
Rendering was done using OpenGL 3+ / OpenGLES 2.0

Cross-platform support is done thanks to SDL2 (it was also compatible with Android and iOS!).

Last commit was made in September 2016, I decided to stop the project, and focus on already existing engines (notably [Godot Engine](https://godotengine.org/)), keeping the newfound experience from game engine building for my future games.

## Origin

At the time, I wanted to go full speed in "handmade" game development, even knowing the famous citation _"make games, not engine"_, and I started my crazy challenge of making my own game engine.

I really liked modern C++ (11/14+), and with my experience in OpenGL and SDL, I decided to create a somewhat modular system with standard features, taking inspiration from the libGDX game framework.

At the end, I had a "screen" system, touchscreen support, particle systems, animations, tweens, audio management with automatic BPM detection, a custom 2D physics engine, a custom Entity-Component-System (ECS), and even more things.
