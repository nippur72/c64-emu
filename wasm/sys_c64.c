#include <stdint.h>
#include <stdbool.h>

#include <emscripten/emscripten.h>

typedef uint8_t byte;
typedef uint16_t word;

#define CHIPS_ASSERT(c) 1
#include <assert.h>

#define CHIPS_IMPL

#include "chips/chips_common.h"
#include "chips/m6502.h"
#include "chips/m6522.h"
#include "chips/m6526.h"
#include "chips/m6569.h"
#include "chips/m6581.h"
#include "chips/kbd.h"
#include "chips/mem.h"
#include "chips/clk.h"
#include "systems/c1530.h"
#include "systems/c1541.h"
#include "roms/c64-roms.h"
#include "roms/c1541-roms.h"
#include "roms/6499_bank0.h"
#include "roms/6499_bank1.h"
#include "systems/c64.h"

c64_desc_t desc;
c64_t sys;

#define AUDIOBUFSIZE (1024)

void audio_cb(const float* samples, int num_samples, void* user_data) {
   byte unused = (byte) EM_ASM_INT({ audio_buf_ready($0, $1); }, samples, num_samples );
}

uint32_t c64palette_RGBA[16] = {
    0xFF000000,
    0xFFFFFFFF,
    0xFF2B3768,
    0xFFB2A470,
    0xFF863D6F,
    0xFF438D58,
    0xFF792835,
    0xFF6FC7B8,
    0xFF254F6F,
    0xFF003943,
    0xFF59679A,
    0xFF444444,
    0xFF6C6C6C,
    0xFF84D29A,
    0xFFB55E6C,
    0xFF959595
};

#define PIXEL_WIDTH_2 1

#ifdef PIXEL_WIDTH_2
uint32_t pixel_buffer[392*272*4];
void end_frame_cb(void* user_data) {
   uint8_t *src = sys.vic.crt.fb;
   uint32_t *dst = pixel_buffer;
   uint32_t c64_pixel;

   for(int r=0;r<272;r++) {
      for(int c=0;c<392;c++) { 
         c64_pixel = c64palette_RGBA[*src];
         dst[0] = c64_pixel;
         dst[1] = c64_pixel;
         dst[392*2] = c64_pixel;
         dst[392*2+1] = c64_pixel;
         src++;    
         dst+=2;
      }   
      src += (63*8)- 392;
      dst += 392*2;
   }
   byte unused = (byte) EM_ASM_INT({ vdp_screen_update($0); }, pixel_buffer );
}
#else
uint32_t pixel_buffer[392*272];
void end_frame_cb(void* user_data) {
   uint8_t *src = sys.vic.crt.fb;
   uint32_t *dst = (uint32_t *)pixel_buffer;
   uint32_t c64_pixel;

   for(int r=0;r<272;r++) {
      for(int c=0;c<392;c++) { 
         c64_pixel = c64palette_RGBA[*src];
         *dst++ = c64_pixel;
         src++;    
      }   
      src += (63*8)- 392;
   }
   byte unused = (byte) EM_ASM_INT({ vdp_screen_update($0); }, pixel_buffer );
}
#endif


EMSCRIPTEN_KEEPALIVE
void sys_init() {

   desc.c1530_enabled = false;                       /* enable the C1530 datassette emulation */

   // audio
   chips_audio_callback_t cb;
   cb.func = audio_cb;
   cb.user_data = &sys;
   desc.audio.num_samples = AUDIOBUFSIZE;
   desc.audio.sample_rate = 48000;
   desc.audio.callback = cb;

   // ROM images
   desc.roms.chars = (chips_range_t) { dump_c64_char_bin, sizeof(dump_c64_char_bin) }; 
   desc.roms.kernal = (chips_range_t) { dump_c64_kernalv3_bin, sizeof(dump_c64_kernalv3_bin) }; 
   desc.roms.basic = (chips_range_t) { dump_c64_basic_bin, sizeof(dump_c64_basic_bin) }; 

   desc.c1530_enabled = false;
   desc.c1541_enabled = false;

   c64_init(&sys, &desc);
   sys.vic.rs.end_frame_cb = end_frame_cb;   
   c64_reset(&sys);
}

EMSCRIPTEN_KEEPALIVE
void sys_config(uint8_t dummy) {
   sys_init();
}

EMSCRIPTEN_KEEPALIVE
void sys_reset() {
   c64_reset(&sys);
}

EMSCRIPTEN_KEEPALIVE
void sys_exec() {
   c64_exec(&sys, 20000);
   byte unused = (byte) EM_ASM_INT({ vdp_screen_update($0); }, pixel_buffer );
}

EMSCRIPTEN_KEEPALIVE
void sys_exec_us(uint32_t msec) {
   c64_exec(&sys, msec);
}

EMSCRIPTEN_KEEPALIVE
void sys_ex(uint32_t msec) {
   c64_exec(&sys, msec);
}

EMSCRIPTEN_KEEPALIVE
void sys_vdp() {
   byte unused = (byte) EM_ASM_INT({ vdp_screen_update($0); }, pixel_buffer );
}

EMSCRIPTEN_KEEPALIVE
void sys_key_down(int key_code) {
   c64_key_down(&sys, key_code);
}

EMSCRIPTEN_KEEPALIVE
void sys_key_up(int key_code) {
   c64_key_up(&sys, key_code);
}

EMSCRIPTEN_KEEPALIVE
void sys_quick_load(uint8_t *bytes, int num_bytes) {
   c64_quickload(&sys, (chips_range_t) { bytes, num_bytes });
}

EMSCRIPTEN_KEEPALIVE
void sys_insert_rom_cartdrige(uint8_t *bytes, int num_bytes) {
   //c64_insert_rom_cartridge(&sys, bytes, num_bytes);
}

EMSCRIPTEN_KEEPALIVE
uint8_t sys_mem_cpu_rd(uint16_t address) {
   return mem_rd(&sys.mem_cpu, address);
}

EMSCRIPTEN_KEEPALIVE
void sys_mem_cpu_wr(uint16_t address, uint8_t data) {
   mem_wr(&sys.mem_cpu, address, data);
}

EMSCRIPTEN_KEEPALIVE
void sys_joystick(uint8_t joy_mask) {
   //c64_joystick(&sys, joy_mask);
}

EMSCRIPTEN_KEEPALIVE
void sys_set_joystick_type(c64_joystick_type_t type) {
   desc.joystick_type = type;
   c64_set_joystick_type(&sys, desc.joystick_type);
}

EMSCRIPTEN_KEEPALIVE
bool sys_insert_tape(uint8_t* ptr, int num_bytes) {
   return c64_insert_tape(&sys, (chips_range_t) { ptr, num_bytes });
}

EMSCRIPTEN_KEEPALIVE
void sys_remove_tape() {
   c64_remove_tape(&sys);
}

EMSCRIPTEN_KEEPALIVE
void sys_tape_play() {
   c64_tape_play(&sys);
}

EMSCRIPTEN_KEEPALIVE
void sys_tape_stop() {
   c64_tape_stop(&sys);
}

EMSCRIPTEN_KEEPALIVE
uint8_t sys_cas_port() {
   return sys.cas_port;
}

EMSCRIPTEN_KEEPALIVE
void sys_set_exrom(bool value) {
   sys._EXROM = value;
   sys._GAME = value;
}

EMSCRIPTEN_KEEPALIVE
void sys_set_cbm_6499_nbank(int value) {
   sys.cbm_6499_nbank = value;   
}

EMSCRIPTEN_KEEPALIVE
void sys_set_emulate_cbm_6499(bool value) {
   sys.emulate_6499 = value;
}
