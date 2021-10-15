# C64 Javascript emulator

A JavaScript emulator for the Commodore 64 computer.

This emulator is based on the amazing work of Andre Weissflog

https://github.com/floooh/chips-test

Copyright (c) 2017 Andre Weissflog

Open the emulator directly in your browser: [c64-emu](https://nippur72.github.io/c64-emu/)


QUERYSTRING OPTIONS
===================
- `wstcp=address:port` websocket address and port of the websocket tcp tunnel service
- `joy=3` emulates joystick
- `load=program.prg` loads and exectutes a program
- `b=<....>` loads the specified string as a base64 binary encoded file (created with the function `makeBase64())`

LOADING AND SAVING FILES
========================

- prg files (`.prg`) are common C64 program files that are loaded in memory.
The first two bytes contain the loading address.

Dragging & dropping a ".prg" file on the emulator's window causes the file to be loaded.

Once a file is loaded, it's also stored on the browser cache so that you don't have
to drag&drop it again; you can use the `load()` function from the JavaScript console.

These are the commands you can type from the JavaScript console (F12 key):

- `load("file.prg" [,start])` loads a file at the specified address
- `save("file.prg" [,start, end])` saves a file 
- `download("file.prg")` gets the file as a browser download
- `remove("file.prg")` remove file from browser's cache
- `dir()` lists files on browser's cache
- `paste(text)` paste a string of text (e.g. containing a BASIC program)
- `makeBase64("file.prg")` encodes the file for use with the `b=` query string parameter (see)

MISC
========
- `c64.config(n)` configures memory (n from 0 to 5)
- `c64.reset()` resets the c64 (also via CTRL+ALT+BREAK keys)
- `c64.peek(address)`
- `c64.poke(address, data)`




