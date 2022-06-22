---
tags: [godot, gdscript, game-jam]
---
[:back: Back to **Projects**](../)
# Time Lab - Ludum Dare 50

<ProjectCard
    language="Godot/GDScript"
    date="2022"
    status="active"
    url="https://github.com/Srynetix/time-lab"
    :screenshots="[$withBase('/images/time-lab.png'), $withBase('/images/time-lab-preview.gif')]"
/>

## Summary

My 4th participation to the famous [Ludum Dare game jam (edition #50)](https://ldjam.com/events/ludum-dare/50/) compo.  
The theme was *delay the inevitable*.  
This time I did the event with friends from work, each one on their game, so it was fun helping them on their projects!  
I was rated [**62th** overall](https://ldjam.com/events/ludum-dare/50/time-lab).  

Tools used:
- Godot Engine 3.4.4,
- sfxia,
- aseprite 1.3-beta14,
- FL Studio

After the event, I decided to continue this game, developing my Godot collection named `sxgd`, and I went full **GDScript** (the game was originally developed in **C#**).

When porting the game for the web, it was unplayable due to the lag (I think it's due to the C# marshalling).  
So when the GDScript version was ready, I tried the game on the browser and *magic*, no problem. :sparkles:

### Description

The concept is once again simple: you are trapped in a laboratory, filled with puzzles, where time is your enemy.
Instructions are included in the game, and once again, it is quite challenging.

There is a secret end, think fast :wink:!

Features:

- A level collection system for an open-ended range of levels!
- Original level collection for the Ludum Dare 50 (12 levels),
- A level selector to browse collections,
- An in-game level editor to create your own challenges, that you can export/import and share to the world (with binary files or Base64!)
