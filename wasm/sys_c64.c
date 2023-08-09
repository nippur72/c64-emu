#include <stdint.h>
#include <stdbool.h>

#include <emscripten/emscripten.h>

typedef uint8_t byte;
typedef uint16_t word;

#define CHIPS_ASSERT(c) 1
#include <assert.h>

#define CHIPS_IMPL

#define NEWVER 1

#include "chips/chips_common.h"
#include "chips/m6502.h"
#include "chips/m6522.h"
#include "chips/m6526.h"
#ifdef NEWVER
  #include "chips/m6569.h"
#else
  #include "chips/m6569_old.h"
#endif
#include "chips/m6581.h"
#include "chips/kbd.h"
#include "chips/mem.h"
#include "chips/clk.h"
#ifdef NEWVER
   #include "systems/c1530.h"
   #include "systems/c1541.h"
#else
   #include "systems/c1530_old.h"
   #include "systems/c1541_old.h"
#endif
#include "roms/c64-roms.h"
#include "roms/c1541-roms.h"
#include "roms/6499_bank0.h"
#include "roms/6499_bank1.h"
#ifdef NEWVER
   #include "systems/c64.h"
#else
   #include "systems/c64_old.h"
#endif

c64_desc_t desc;
c64_t sys;

#define PIXBUFSIZE (641024) /*(392*272*4)*/
unsigned char pixel_buffer[PIXBUFSIZE];

uint8_t c64palette[16][3] = {
    { 0x00,0x00,0x00 },
    { 0xFF,0xFF,0xFF },
    { 0x68,0x37,0x2B },
    { 0x70,0xA4,0xB2 },
    { 0x6F,0x3D,0x86 },
    { 0x58,0x8D,0x43 },
    { 0x35,0x28,0x79 },
    { 0xB8,0xC7,0x6F },
    { 0x6F,0x4F,0x25 },
    { 0x43,0x39,0x00 },
    { 0x9A,0x67,0x59 },
    { 0x44,0x44,0x44 },
    { 0x6C,0x6C,0x6C },
    { 0x9A,0xD2,0x84 },
    { 0x6C,0x5E,0xB5 },
    { 0x95,0x95,0x95 }
};

#define AUDIOBUFSIZE (1024)

void audio_cb(const float* samples, int num_samples, void* user_data) {
   byte unused = (byte) EM_ASM_INT({ audio_buf_ready($0, $1); }, samples, num_samples );
}

void end_frame_cb(void* user_data) {
#ifdef NEWVER
   uint8_t *src = sys.vic.crt.fb;
   uint8_t *dst = pixel_buffer;
   uint8_t c64_pixel;

   for(int r=0;r<272;r++) {
      for(int c=0;c<392;c++) { 
         uint8_t *c64color = c64palette[*src];
         *dst++ = c64color[0];
         *dst++ = c64color[1];
         *dst++ = c64color[2]; 
         *dst++ = 255;         
         src++;    
      }   
      src += (63*8)- 392;
   }
#endif

   byte unused = (byte) EM_ASM_INT({ vdp_screen_update($0); }, pixel_buffer );
}

EMSCRIPTEN_KEEPALIVE
void sys_init() {

#ifndef NEWVER
   desc.user_data = NULL;                            /* optional user-data for callback functions */
#endif
   desc.c1530_enabled = false;                       /* enable the C1530 datassette emulation */

   // video
#ifdef NEWVER
#else   
   desc.pixel_buffer = pixel_buffer;                 /* pointer to a linear RGBA8 pixel buffer */
   desc.pixel_buffer_size = PIXBUFSIZE;              /* size of the pixel buffer in bytes */
   desc.end_frame_cb = end_frame_cb;
#endif

   // audio
#ifdef NEWVER
   chips_audio_callback_t cb;
   cb.func = audio_cb;
   cb.user_data = &sys;
   desc.audio.num_samples = AUDIOBUFSIZE;
   desc.audio.sample_rate = 48000;
   desc.audio.callback = cb;
#else   
   desc.audio_cb = audio_cb;                         /* called when audio_num_samples are ready */
   desc.audio_num_samples = AUDIOBUFSIZE;
   desc.audio_sample_rate = 48000;
#endif

   // ROM images
#ifdef NEWVER
   desc.roms.chars = (chips_range_t) { dump_c64_char_bin, sizeof(dump_c64_char_bin) }; 
   desc.roms.kernal = (chips_range_t) { dump_c64_kernalv3_bin, sizeof(dump_c64_kernalv3_bin) }; 
   desc.roms.basic = (chips_range_t) { dump_c64_basic_bin, sizeof(dump_c64_basic_bin) }; 
#else      
   desc.rom_char = dump_c64_char_bin;
   desc.rom_basic = dump_c64_basic_bin;
   desc.rom_kernal = dump_c64_kernalv3_bin;
   desc.rom_char_size = sizeof(dump_c64_char_bin);
   desc.rom_basic_size = sizeof(dump_c64_basic_bin);
   desc.rom_kernal_size = sizeof(dump_c64_kernalv3_bin);

   desc.c1541_rom_c000_dfff = dump_1541_c000_325302_01_bin;
   desc.c1541_rom_e000_ffff = dump_1541_e000_901229_06aa_bin;
   desc.c1541_rom_c000_dfff_size = sizeof(dump_1541_c000_325302_01_bin);
   desc.c1541_rom_e000_ffff_size = sizeof(dump_1541_e000_901229_06aa_bin);
#endif

   desc.c1530_enabled = false;
   desc.c1541_enabled = false;

   c64_init(&sys, &desc);
#ifdef NEWVER
   sys.vic.rs.end_frame_cb = end_frame_cb;   
#endif
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
#ifdef NEWVER
   c64_quickload(&sys, (chips_range_t) { bytes, num_bytes });
#else
   c64_quickload(&sys, bytes, num_bytes);
#endif
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
#ifdef NEWVER
   return c64_insert_tape(&sys, (chips_range_t) { ptr, num_bytes });
#else
   return c64_insert_tape(&sys, ptr, num_bytes);
#endif   
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
