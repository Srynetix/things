---
tags: [nintendo-switch, c]
---
[:back: Back to **Projects**](../)
# Game of Life for Nintendo Switch (using libnx)

<ProjectCard
    language="C"
    date="2018"
    status="paused"
    url="https://github.com/Srynetix/libnx-gol"
    :screenshot="$withBase('/images/gol.png')"
/>

## Summary

That's the [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), but for the Nintendo Switch.  
It was made as a homebrew, using [libnx](https://github.com/switchbrew/libnx).  
It's also compatible with Linux.

## Origin

Well, after hacking my first Nintendo Switch, I wanted to see what was possible in the homebrew field on that thing.  
So with my rusty C, I decided to do one of the most basic things you can do in terms of graphics, the Game of Life.

## Features

- Generate cells using the touchscreen
- Color is dimming depending on its lifetime
- Simulation can be caused
- Linux compatibility using SDL2
