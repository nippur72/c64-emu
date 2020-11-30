"use strict";

// TODO basic chain after load
// TODO uppercase/lowercase (shift lock)
// TODO fix for alt/cbm/shift what keyboard?
// TODO shift problem  SHIFT + 9
// TODO 1541 emulation

/******************/

const frameRate = 50;        // ~50 Hz
const frameDuration = 1000/frameRate;     // duration of 1 frame in msec

let stopped = false; // allows to stop/resume the emulation

let frames = 0;
let nextFrameTime = 0;
let averageFrameTime = 0;
let minFrameTime = Number.MAX_VALUE;

let cycle = 0;
let total_cycles = 0;

let throttle = false;

let options = {
   load: undefined,
   restore: false
};

// scanline version
function renderLines() {
   c64.exec();
}

function renderAllLines() {

   // poll keyboard
   if(keyboard_buffer.length > 0) {
      let key_event = keyboard_buffer[0];
      keyboard_buffer = keyboard_buffer.slice(1);

      if(key_event.type === "press") {
         let keys = key_event.hardware_keys;
         //keys.forEach((k) => console.log(k));
         keys.forEach((k) => c64.key_down(k));
      }
      else if(key_event.type === "release") {
         let keys = key_event.hardware_keys;
         //keys.forEach((k) => console.log(k));
         keys.forEach((k) => c64.key_up(k));
      }
   }

   renderLines();
}


let nextFrame;
let end_of_frame_hook = undefined;

function oneFrame() {
   const startTime = new Date().getTime();      

   if(nextFrame === undefined) nextFrame = startTime;

   nextFrame = nextFrame + (1000/frameRate); 

   renderAllLines();
   frames++;   

   if(end_of_frame_hook !== undefined) end_of_frame_hook();

   const now = new Date().getTime();
   const elapsed = now - startTime;
   averageFrameTime = averageFrameTime * 0.992 + elapsed * 0.008;
   if(elapsed < minFrameTime) minFrameTime = elapsed;

   let time_out = nextFrame - now;
   if(time_out < 0 || throttle) {
      time_out = 0;
      nextFrame = undefined;      
   }
   if(!stopped) setTimeout(()=>oneFrame(), time_out);   
}


function main() {

   c64.config(0);

   parseQueryStringCommands();

   // rom autoload
   if(autoload !== undefined) {
      autoload.forEach((e,i)=>rom_load(i,e));
   }

   // autostart terminal if loaded from bbs.sblendorio.ue
   let href = window.location.href;
   //href = "http://bbs.sblendorio.eu";
   if(href.match(/^http:\/\/bbs\.sblendorio\.eu/g)) {
      fetchProgram("nippur72/terminal.prg");
   }

   // starts drawing frames
   goAudio();
   oneFrame();

   bbs();
}

function cpu_actual_speed() {
   return (total_cycles / (new Date().valueOf() - cpu_started_msec)) * 1000;
}
