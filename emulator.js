"use strict";

// TODO start bbs only when required

/******************/

let stopped = false; // allows to stop/resume the emulation

let frames = 0;
let averageFrameTime = 0;

let cycle = 0;
let total_cycles = 0;

let throttle = false;

let end_of_frame_hook = undefined;
let options = {
   load: undefined,
   restore: false
};

let last_keyboardpoll = 0;

let keyboard_buffer_empty = true;

function poll_keyboard() {
   // poll keyboard
   while(keyboard_buffer.length > 0) {
      let key_event = keyboard_buffer[0];
      keyboard_buffer = keyboard_buffer.slice(1);
      keyboard_buffer_empty = keyboard_buffer.length;

      if(key_event.type === "press") {
         let keys = key_event.hardware_keys;
         //keys.forEach((k) => console.log(k));
         keys.forEach((k) => c64.key_down(k));
      }
      else if(key_event.type === "release") {
         let keys = key_event.hardware_keys;
         //keys.forEach((k) => console.log(k));
         keys.forEach((k) => c64.key_up(k));
         if(keyboard_buffer_empty && !control_pressed && !alt_pressed && !shift_pressed) {
            for(let t=0;t<256;t++) c64.key_up(t);            
         }
      }
   }
}

let last_timestamp = 0;

function oneFrame(timestamp) {
   let stamp = timestamp == undefined ? last_timestamp : timestamp;
   let usec = (stamp - last_timestamp)*1000;
   last_timestamp = stamp;

   if(usec > 32000) usec = 32000;

   if(stamp - last_keyboardpoll > 15) {
      poll_keyboard();
      last_keyboardpoll = stamp;
   }

   c64.exec_us(usec);

   averageFrameTime = averageFrameTime * 0.992 + usec * 0.008;

   if(!stopped) requestAnimationFrame(oneFrame);
}


function main() {

   c64.config(0);

   c64.ex(5000);     // wait for memory pattern writing
   mem_write(204,1); // flags system not booted yet

   parseQueryStringCommands();

   // rom autoload
   if(autoload !== undefined) {
      autoload.forEach((e,i)=>rom_load(i,e));
   }

   // autostart terminal if loaded from bbs.sblendorio.ue
   let href = window.location.href;
   let is_retrocampus = href.match(/^http:\/\/(bbs\.sblendorio\.eu|bbs\.retrocampus\.com)/g);
   let is_retroacademy = href.match(/^http:\/\/(bbs\.retroacademy\.it)/g);

   if(is_retrocampus  && options.wstcp === undefined) wstcp_address = "wss://bbs.sblendorio.eu:8080";
   if(is_retroacademy && options.wstcp === undefined) wstcp_address = "wss://bbs.sblendorio.eu:8081";
   if((is_retroacademy || is_retrocampus) && options.load === undefined) fetchProgram("nippur72/terminal.prg");

   // starts drawing frames
   //goAudio();
   oneFrame();

   bbs();
}
