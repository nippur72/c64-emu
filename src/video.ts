import { get_wasm_instance } from "./emscripten_wrapper";

// good values for CRT PAL
const SCREEN_W = 392;
const SCREEN_H = 272;
const POS_X = 3*8;
const POS_Y = 3*8;
const PIXEL_WIDTH = 2;

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
   canvas.width  = SCREEN_W * PIXEL_WIDTH - (POS_X*PIXEL_WIDTH);
   canvas.height = SCREEN_H * PIXEL_WIDTH - (POS_Y*PIXEL_WIDTH);
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


export function vdp_screen_update(ptr: number) {
   /*
   // 1 pixel wide version
   let size1 = WW*HH*4;
   const heap = get_wasm_instance().HEAPU8.subarray(ptr,ptr+size1);
   const data = new Uint8ClampedArray(heap);       
   const img = new ImageData(data, WW, HH);
   vic_ii_context!.putImageData(img, 0, 0);   
   return;
   */
     
   // 2 pixel wide version
   let size1 = WW*HH*4*PIXEL_WIDTH*PIXEL_WIDTH;
   const heap = get_wasm_instance().HEAPU8.subarray(ptr,ptr+size1);
   const data = new Uint8ClampedArray(heap);       
   const img = new ImageData(data, WW*PIXEL_WIDTH, HH*PIXEL_WIDTH);
   vic_ii_context!.putImageData(img, -POS_X, -POS_Y);   
}

/*

// old drawing method

let vic_ii_imageData = vic_ii_context!.createImageData(WW*2, HH*2);
let bmp = new Uint32Array(vic_ii_imageData.data.buffer);

export function vdp_screen_update_old(ptr: number) {   
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
   
   // old drawing method
   //vic_ii_imageData.data.set(imagedata_buf8);
   //vic_ii_context.putImageData(vic_ii_imageData, -POS_X, -POS_Y);
   
   // new method
   vic_ii_context!.putImageData(vic_ii_imageData, -POS_X, -POS_Y);

   //frames++;
   //if(end_of_frame_hook !== undefined) end_of_frame_hook();
}
*/

