## Summary

My 10th participation to the Ludum Dare game jam (edition #56) compo.  
The theme was _Tiny creatures_.

Before the jam, I reorganized my `sxgd` plugin project in a suite of plugins called `sxgd-libs` (which I will document soon), so I could use it for this jam.

It was a fun jam, spent something like 2 hours on the music track (and I like it :smile:). I made a customization panel for the lulz, and worked on the infamous "shader compilation" freezes which occured in all my last Godot 4 games.

I tried to fix this specific problem by creating a "MaterialPreloader" which force the render of each registered materials on the boot screen. And guess what? It works flawlessly! (at least for now, and for my use cases)

Finished in the rush, the Web version was not working properly, the CI would not start (because of a hard deprecation in the GitHub side) and I half-assed the jam page. So the next day, having recovered some sleep, I updated the jam page, fixed the CI, and made the Web version working.

What was broken? The music visualizer wasn't working on Web. Because of a default change in Godot 4.3 around music playback on Web (Sample vs Stream), which disables completely the effects rack (with the SpectrumAnalyzer included). It was explicitly written in a blog post so my fault for not reading correctly :sweat_smile:.

So a little project setting change, and tada :tada:, everything is working smoothly.

Tools used:

- Godot Engine 4.3 with [sxgd-libs](https://github.com/Srynetix/sxgd-libs)
- Pixel Studio
- FL Studio

## Description

Great theme, not enough time to finish properly... but that will do.

I will let you discover the game by yourself :wink:

**Controls**:
- Arrow keys to move, jump and aim
- ENTER to retry a level
- Z to absorb (W for AZERTY)
- X to eject
