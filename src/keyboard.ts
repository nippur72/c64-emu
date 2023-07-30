import { audioContextResume } from "./audio";
import { c64 } from "./emscripten_wrapper";
import { pckey_to_hardware_keys_ITA} from "./keyboard_IT";

let last_scroll_lock: boolean | undefined = undefined;

let control_pressed = false;
let alt_pressed = false;
let shift_pressed = false;

function keyDown(e: KeyboardEvent) {

   if(e.code === "ControlLeft") control_pressed = true;
   if(e.code === "AltLeft") alt_pressed = true;                  
   if(e.code === "ShiftLeft") shift_pressed = true;                  
   if(e.code === "ControlRight") control_pressed = true;
   if(e.code === "AltRight") alt_pressed = true;                  
   if(e.code === "ShiftRight") shift_pressed = true;                  

   /*
   console.log("keyDown");
   console.log(e);
   */

   // from Chrome 71 audio is suspended by default and must resume within an user-generated event
   audioContextResume();

   if(last_scroll_lock === undefined) last_scroll_lock = e.getModifierState("ScrollLock");

   if(e.getModifierState("ScrollLock")!=last_scroll_lock) {
      let scroll_lock_key_pressed = e.getModifierState("ScrollLock");
      last_scroll_lock = scroll_lock_key_pressed;
      let emu_joystick = scroll_lock_key_pressed ? 3 : 0;
      c64.emu_joy(emu_joystick);
      console.log(`Joystick emulation ${emu_joystick==3?"enabled":"disabled"}`);
   }

   // disable auto repeat, as it is handled on the firmware
   if(e.repeat) {
      e.preventDefault(); 
      return;
   }   

   // *** special (non characters) keys ***

   // RESET key is CTRL+ALT+BREAK
   if(e.code === "Pause" && e.altKey && e.ctrlKey) {
      c64.reset();
      e.preventDefault(); 
      return;
   }

   // if keyboard ITA
   {
      const hardware_keys = pckey_to_hardware_keys_ITA(e.code, e.key, e.shiftKey, e.ctrlKey, e.altKey, e.getModifierState("AltGraph") );
      if(hardware_keys.length === 0) return;
      keyboard_buffer.push({ type: "press", hardware_keys });
      //key_pressed.push(hardware_keys);
      key_press_map[e.code] = hardware_keys;
      //console.log(`map after press: ${Object.keys(key_press_map).join(",")}`);
      e.preventDefault();
   }
}

function keyUp(e: KeyboardEvent) {

   if(e.code === "ControlLeft") control_pressed = false;
   if(e.code === "AltLeft") alt_pressed = false;                  
   if(e.code === "ShiftLeft") shift_pressed = false;                  
   if(e.code === "ControlRight") control_pressed = false;
   if(e.code === "AltRight") alt_pressed = false;                  
   if(e.code === "ShiftRight") shift_pressed = false; 
   //console.log(e.code);

   /*
   console.log("keyUp");
   console.log(e);
   */

   // fix a bug in Chrome: pressing "ALT-GR @" results in keydown of "ò" instead of "@"
   //if(e.key === 'ò' && e.keyCode === 192 && e.which === 192) {
   //   e.key = '@';
   //}

   const hardware_keys = pckey_to_hardware_keys_ITA(e.code, e.key, e.shiftKey, e.ctrlKey, e.altKey, e.getModifierState("AltGraph"));
   if(hardware_keys.length === 0) return;

   keyboard_buffer.push({ type: "release", hardware_keys });

   // fix shift problem
   //key_pressed.forEach(k=>keyboard_buffer.push({ type: "release", hardware_keys: k }));
   //key_pressed = [];

   let code = e.code;
   //console.log(`map before release: ${Object.keys(key_press_map).join(",")}`);

   // fix shift problem
   if(key_press_map[code] !== undefined) {
      let k = key_press_map[code];
      keyboard_buffer.push({ type: "release", hardware_keys: k });
      delete key_press_map[code];
   }

   e.preventDefault();
}

// connect DOM events
const element = document; 
element.onkeydown = keyDown;
element.onkeyup = keyUp;
element.onkeypress = function(e) {
        if(e.key == "à") accentate("a");
   else if(e.key == "è") accentate("e");
   else if(e.key == "é") accentate("e");
   else if(e.key == "ì") accentate("i");
   else if(e.key == "ò") accentate("o");
   else if(e.key == "ù") accentate("u");
}

/*
function accentate(key) {      
   keyDown(fakeEvent(key));   
   keyUp(fakeEvent(key));   
   keyDown(fakeEvent("'"));
   keyUp(fakeEvent("'"));   
}
*/

function accentate(key: string) {      
   setTimeout(()=>keyDown(fakeEvent(key)), 0);
   setTimeout(()=>keyUp  (fakeEvent(key)),20); 
   setTimeout(()=>keyDown(fakeEvent("'")),40);
   setTimeout(()=>keyUp  (fakeEvent("'")),60);
}

window.onfocus = function() {
   reset_keyboard(); // release all keys to prevent ALT always pressed after ALT+TAB
}

function fakeEvent(key: string) {
   return {
      key: key,
      code: "",
      shiftKey: false,
      ctrlKey: false,
      altKey: false,
      getModifierState: ()=>false,
      preventDefault: ()=>false
   } as any as KeyboardEvent;
}

interface KeyBoard_C64Event {
   type: "press"|"release";
   hardware_keys: number[];
}

let keyboard_buffer: KeyBoard_C64Event[] = [];
//let key_pressed = [];
let key_press_map: {[key:string]: number[]} = {};


function reset_keyboard() {

   let keys = Object.keys(key_press_map);

   keys.forEach(k=>{
      //console.log(`clearing ${k}`);
      keyboard_buffer.push({ type: "release", hardware_keys: key_press_map[k] });
      delete key_press_map[k];
   });

   key_press_map = {};  
}

let keyboard_buffer_empty: boolean = true;

export function poll_keyboard() {
   // poll keyboard
   while(keyboard_buffer.length > 0) {
      let key_event = keyboard_buffer[0];
      keyboard_buffer = keyboard_buffer.slice(1);
      keyboard_buffer_empty = keyboard_buffer.length == 0;

      if(key_event.type === "press") {
         let keys = key_event.hardware_keys;
         //keys.forEach((k) => console.log(k));
         keys.forEach((k: number) => c64.key_down(k));
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
