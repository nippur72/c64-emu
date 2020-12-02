#include <stdint.h>
#include <stdbool.h>

#include <emscripten/emscripten.h>

typedef uint8_t byte;
typedef uint16_t word;

#define CHIPS_ASSERT(c) 1
#include <assert.h>

#define CHIPS_IMPL

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
#include "systems/c64.h"

c64_desc_t desc;
c64_t sys;

#define PIXBUFSIZE (641024) /*(392*272*4)*/
unsigned char pixel_buffer[PIXBUFSIZE];

#define AUDIOBUFSIZE (1024)

void audio_cb(const float* samples, int num_samples, void* user_data) {
   byte unused = (byte) EM_ASM_INT({ audio_buf_ready($0, $1); }, samples, num_samples );
}

void end_frame_cb(void* user_data) {
   byte unused = (byte) EM_ASM_INT({ vdp_screen_update($0); }, pixel_buffer );
}

EMSCRIPTEN_KEEPALIVE
void sys_init() {

   desc.user_data = NULL;                            /* optional user-data for callback functions */
   desc.c1530_enabled = false;                       /* enable the C1530 datassette emulation */

   // video
   desc.pixel_buffer = pixel_buffer;                 /* pointer to a linear RGBA8 pixel buffer */
   desc.pixel_buffer_size = PIXBUFSIZE;              /* size of the pixel buffer in bytes */

   // audio
   desc.audio_cb = audio_cb;                         /* called when audio_num_samples are ready */
   desc.audio_num_samples = AUDIOBUFSIZE;
   desc.audio_sample_rate = 48000;

   // ROM images
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
   desc.c1530_enabled = false;
   desc.c1541_enabled = false;

   c64_init(&sys, &desc);
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
   c64_quickload(&sys, bytes, num_bytes);
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
bool sys_insert_tape(const uint8_t* ptr, int num_bytes) {
   return c64_insert_tape(&sys, ptr, num_bytes);
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

/*
EMSCRIPTEN_KEEPALIVE
void sys_dump_vic() {
   for(int t=0;t<16;t++) {
      byte unused = (byte) EM_ASM_INT({ console.log($0, $1); }, t, sys.vic.regs[t] );
   }
}
*/
