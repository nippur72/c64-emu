import { get_wasm_instance } from "./emscripten_wrapper";

// good values for CRT PAL
let SCREEN_W = 392;
let SCREEN_H = 272;
let POS_X = 3*8;
let POS_Y = 3*8;

/*
// values for debug
let SCREEN_W = 284;
let SCREEN_H = 312;
let POS_X = 0;
let POS_Y = 0;
*/

let saturation = 1.0;

export function calculateGeometry() {
   // canvas is the outer canvas where the aspect ratio is corrected
   let canvas = document.getElementById("canvas") as HTMLCanvasElement;
   canvas.width  = SCREEN_W * 2 -(POS_X*2);
   canvas.height = SCREEN_H * 2 -(POS_Y*2);
}

/**************************************************/

/*
let WW = 232;
let HH = 272;
*/

let WW = SCREEN_W;
let HH = SCREEN_H;

let vic_ii_canvas = document.getElementById("canvas") as HTMLCanvasElement;
let vic_ii_context = vic_ii_canvas.getContext('2d');

// new method
let vic_ii_imageData = vic_ii_context!.createImageData(WW*2, HH*2);
let bmp = new Uint32Array(vic_ii_imageData.data.buffer);

/*
// old drawing method
let vic_ii_imageData = vic_ii_context.getImageData(0, 0, WW*2, HH*2);
let imagedata_buffer = new ArrayBuffer(vic_ii_imageData.data.length);
let imagedata_buf8 = new Uint8ClampedArray(imagedata_buffer);
let bmp = new Uint32Array(imagedata_buffer);
*/

/*
// Get 2d drawing context
const ctx = document.getElementById('c').getContext('2d');
const pointer = instance.exports._render();
const data = new Uint8ClampedArray(memory.buffer, pointer, width * height * 4);
const img = new ImageData(data, width, height);
ctx.putImageData(img, 0, 0);
*/

export function vdp_screen_update(ptr: number) {
   let start = ptr / get_wasm_instance().HEAPU32.BYTES_PER_ELEMENT;
   let size = WW*HH;
   let buffer = get_wasm_instance().HEAPU32.subarray(start,start+size);   

   let ptr0 = 0;
   let ptr1 = 0;
   let ptr2 = WW*2;   

   for(let y=0;y<HH;y++) {
      for(let x=0;x<WW;x++) {
         let pixel = buffer[ptr0];
         bmp[ptr1++] = pixel;
         bmp[ptr1++] = pixel;
         bmp[ptr2++] = pixel;
         bmp[ptr2++] = pixel;
         ptr0++;
      }
      ptr1 += WW*2;
      ptr2 += WW*2;
   }

   /*
   // old drawing method
   vic_ii_imageData.data.set(imagedata_buf8);
   vic_ii_context.putImageData(vic_ii_imageData, -POS_X, -POS_Y);
   */

   // new method
   vic_ii_context!.putImageData(vic_ii_imageData, -POS_X, -POS_Y);

   //frames++;
   //if(end_of_frame_hook !== undefined) end_of_frame_hook();
}

