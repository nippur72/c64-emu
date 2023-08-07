"use strict";

// TODO start bbs only when required
// TODO riunificare Terminale/PETSCII bbs con 6499
// TODO push CIA TOD to flooh/chips
// TODO update to new c64 in flooh/chips

// normal BBS starts with ?load=nippur72/terminal.prg
// prestel BBS starts with ?cbm6499=true

/******************/

import { c64 } from "./emscripten_wrapper";
import { parseQueryStringCommands } from "./options";
import { calculateGeometry } from "./video";
import { poll_keyboard } from "./keyboard";
import { bbs, set_wstcp_address } from "./bbs";
import { fetchProgram } from "./fetchProgram";

let stopped = false; // allows to stop/resume the emulation

let last_keyboardpoll = 0;

let last_timestamp = 0;

export function oneFrame(timestamp: number | undefined) {
   let stamp = timestamp == undefined ? last_timestamp : timestamp;
   let usec = (stamp - last_timestamp)*1000;
   last_timestamp = stamp;

   if(usec > 32000) usec = 32000;

   if(stamp - last_keyboardpoll > 15) {
      poll_keyboard();
      last_keyboardpoll = stamp;
   }

   c64.exec_us(usec);

   if(!stopped) requestAnimationFrame(oneFrame);
}

export async function main() {

   c64.config(0);

   c64.ex(5000);     // wait for memory pattern writing
   c64.mem_write(204,1); // flags system not booted yet

   let options = await parseQueryStringCommands();

   // autostart terminal if loaded from bbs.sblendorio.ue or bbs.retrocampus.com
   let href = window.location.href;
   let is_retrocampus = href.match(/^http:\/\/(bbs\.sblendorio\.eu|bbs\.retrocampus\.com)/g);   

   if(is_retrocampus) {
      if(options.wstcp === undefined) set_wstcp_address("wss://bbs.sblendorio.eu:8080");
      if(options.load === undefined) fetchProgram("nippur72/terminal.prg");
   }

   calculateGeometry();

   c64.go();   
}
