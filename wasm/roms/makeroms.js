const fs = require('fs');

function hex(value) {
   return "0x" + (value<=0xF ? "0":"") + value.toString(16);
}

function makeRom(filename, outname, varname) {   
   const romfile = fs.readFileSync(filename);

   let s = `
#pragma once
// machine generated, do not edit!
unsigned char ${varname}[${romfile.length}] = {
   `;

   romfile.forEach((value, i)=> {   
      const comma = (i != romfile.length-1) ? ',':'';
      const cr = (i % 16 == 15) ? '\n   ' : '';
      s += `${hex(value)}${comma}${cr}`;   
   });

   s+="};";

   fs.writeFileSync(outname, s);
}

makeRom("6499_bank0.bin", "6499_bank0.h", "rom_6499_b0");
makeRom("6499_bank1.bin", "6499_bank1.h", "rom_6499_b1");


