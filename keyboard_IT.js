/*
     7   6   5   4   3   2   1   0
    --------------------------------
  7| F7  F5  F3  F1  CDN CRT RET DEL    CRT=Cursor-Right, CDN=Cursor-Down
   |
  6| HOM UA  =   RSH /   ;   *   BP     BP=British Pound, RSH=Should be Right-SHIFT,
   |                                    UA=Up Arrow
  5| -   @   :   .   ,   L   P   +
   |
  4| 0   O   K   M   N   J   I   9
   |
  3| 8   U   H   B   V   G   Y   7
   |
  2| 6   T   F   C   X   D   R   5
   |
  1| 4   E   S   Z   LSH A   W   3      LSH=Should be Left-SHIFT
   |
  0| 2   Q   CBM SPC STP CTL LA  1      LA=Left Arrow, CTL=Should be CTRL, STP=RUN/STOP
   |                                    CBM=Commodore key

   */

function pckey_to_hardware_keys_ITA(code, key, shift, control, cbm, altgraph) {
   //console.log(code, key, e);
   //console.log(e.getModifierState("ScrollLock"));

   let hardware_keys = [];

   if(key === "1")         hardware_keys.push( "1".charCodeAt(0) );
   if(key === "2")         hardware_keys.push( "2".charCodeAt(0) );
   if(key === "3")         hardware_keys.push( "3".charCodeAt(0) );
   if(key === "4")         hardware_keys.push( "4".charCodeAt(0) );
   if(key === "5")         hardware_keys.push( "5".charCodeAt(0) );
   if(key === "6")         hardware_keys.push( "6".charCodeAt(0) );
   if(key === "7")         hardware_keys.push( "7".charCodeAt(0) );
   if(key === "8")         hardware_keys.push( "8".charCodeAt(0) );
   if(key === "9")         hardware_keys.push( "9".charCodeAt(0) );
   if(key === "0")         hardware_keys.push( "0".charCodeAt(0) );
   if(key === "!")         hardware_keys.push( "!".charCodeAt(0) );
   if(key === '"')         hardware_keys.push( '"'.charCodeAt(0) );
   if(key === "£")         hardware_keys.push( "~".charCodeAt(0) );
   if(key === "$")         hardware_keys.push( "$".charCodeAt(0) );
   if(key === "%")         hardware_keys.push( "%".charCodeAt(0) );
   if(key === "&")         hardware_keys.push( "&".charCodeAt(0) );
   if(key === "/")         hardware_keys.push( "/".charCodeAt(0) );
   if(key === "(")         hardware_keys.push( "(".charCodeAt(0) );
   if(key === ")")         hardware_keys.push( ")".charCodeAt(0) );
   if(key === "=")         hardware_keys.push( "=".charCodeAt(0) );
   if(key === "'")         hardware_keys.push( "'".charCodeAt(0) );
   if(key === "?")         hardware_keys.push( "?".charCodeAt(0) );
   if(key === "^")         hardware_keys.push( "^".charCodeAt(0) );
   if(key === "[")         hardware_keys.push( "[".charCodeAt(0) );
   if(key === "]")         hardware_keys.push( "]".charCodeAt(0) );
   if(key === "°")         hardware_keys.push( "[".charCodeAt(0) );
   if(key === "§")         hardware_keys.push( "]".charCodeAt(0) );
   if(key === "+")         hardware_keys.push( "+".charCodeAt(0) );
   if(key === "*")         hardware_keys.push( "*".charCodeAt(0) );
   if(key === "ç")         hardware_keys.push( "@".charCodeAt(0) );
   if(key === "@")         hardware_keys.push( "@".charCodeAt(0) );
   if(key === "#")         hardware_keys.push( "#".charCodeAt(0) );
   if(key === "<")         hardware_keys.push( "<".charCodeAt(0) );
   if(key === ">")         hardware_keys.push( ">".charCodeAt(0) );
   if(key === ",")         hardware_keys.push( ",".charCodeAt(0) );
   if(key === ";")         hardware_keys.push( ";".charCodeAt(0) );
   if(key === ".")         hardware_keys.push( ".".charCodeAt(0) );
   if(key === ":")         hardware_keys.push( ":".charCodeAt(0) );
   if(key === "-")         hardware_keys.push( "-".charCodeAt(0) );
   if(key === "q")         hardware_keys.push( "q".toUpperCase().charCodeAt(0) );
   if(key === "w")         hardware_keys.push( "w".toUpperCase().charCodeAt(0) );
   if(key === "e")         hardware_keys.push( "e".toUpperCase().charCodeAt(0) );
   if(key === "r")         hardware_keys.push( "r".toUpperCase().charCodeAt(0) );
   if(key === "t")         hardware_keys.push( "t".toUpperCase().charCodeAt(0) );
   if(key === "y")         hardware_keys.push( "y".toUpperCase().charCodeAt(0) );
   if(key === "u")         hardware_keys.push( "u".toUpperCase().charCodeAt(0) );
   if(key === "i")         hardware_keys.push( "i".toUpperCase().charCodeAt(0) );
   if(key === "o")         hardware_keys.push( "o".toUpperCase().charCodeAt(0) );
   if(key === "p")         hardware_keys.push( "p".toUpperCase().charCodeAt(0) );
   if(key === "a")         hardware_keys.push( "a".toUpperCase().charCodeAt(0) );
   if(key === "s")         hardware_keys.push( "s".toUpperCase().charCodeAt(0) );
   if(key === "d")         hardware_keys.push( "d".toUpperCase().charCodeAt(0) );
   if(key === "f")         hardware_keys.push( "f".toUpperCase().charCodeAt(0) );
   if(key === "g")         hardware_keys.push( "g".toUpperCase().charCodeAt(0) );
   if(key === "h")         hardware_keys.push( "h".toUpperCase().charCodeAt(0) );
   if(key === "j")         hardware_keys.push( "j".toUpperCase().charCodeAt(0) );
   if(key === "k")         hardware_keys.push( "k".toUpperCase().charCodeAt(0) );
   if(key === "l")         hardware_keys.push( "l".toUpperCase().charCodeAt(0) );
   if(key === "z")         hardware_keys.push( "z".toUpperCase().charCodeAt(0) );
   if(key === "x")         hardware_keys.push( "x".toUpperCase().charCodeAt(0) );
   if(key === "c")         hardware_keys.push( "c".toUpperCase().charCodeAt(0) );
   if(key === "v")         hardware_keys.push( "v".toUpperCase().charCodeAt(0) );
   if(key === "b")         hardware_keys.push( "b".toUpperCase().charCodeAt(0) );
   if(key === "n")         hardware_keys.push( "n".toUpperCase().charCodeAt(0) );
   if(key === "m")         hardware_keys.push( "m".toUpperCase().charCodeAt(0) );
   if(key === "Q")         hardware_keys.push( "Q".toLowerCase().charCodeAt(0) );
   if(key === "W")         hardware_keys.push( "W".toLowerCase().charCodeAt(0) );
   if(key === "E")         hardware_keys.push( "E".toLowerCase().charCodeAt(0) );
   if(key === "R")         hardware_keys.push( "R".toLowerCase().charCodeAt(0) );
   if(key === "T")         hardware_keys.push( "T".toLowerCase().charCodeAt(0) );
   if(key === "Y")         hardware_keys.push( "Y".toLowerCase().charCodeAt(0) );
   if(key === "U")         hardware_keys.push( "U".toLowerCase().charCodeAt(0) );
   if(key === "I")         hardware_keys.push( "I".toLowerCase().charCodeAt(0) );
   if(key === "O")         hardware_keys.push( "O".toLowerCase().charCodeAt(0) );
   if(key === "P")         hardware_keys.push( "P".toLowerCase().charCodeAt(0) );
   if(key === "A")         hardware_keys.push( "A".toLowerCase().charCodeAt(0) );
   if(key === "S")         hardware_keys.push( "S".toLowerCase().charCodeAt(0) );
   if(key === "D")         hardware_keys.push( "D".toLowerCase().charCodeAt(0) );
   if(key === "F")         hardware_keys.push( "F".toLowerCase().charCodeAt(0) );
   if(key === "G")         hardware_keys.push( "G".toLowerCase().charCodeAt(0) );
   if(key === "H")         hardware_keys.push( "H".toLowerCase().charCodeAt(0) );
   if(key === "J")         hardware_keys.push( "J".toLowerCase().charCodeAt(0) );
   if(key === "K")         hardware_keys.push( "K".toLowerCase().charCodeAt(0) );
   if(key === "L")         hardware_keys.push( "L".toLowerCase().charCodeAt(0) );
   if(key === "Z")         hardware_keys.push( "Z".toLowerCase().charCodeAt(0) );
   if(key === "X")         hardware_keys.push( "X".toLowerCase().charCodeAt(0) );
   if(key === "C")         hardware_keys.push( "C".toLowerCase().charCodeAt(0) );
   if(key === "V")         hardware_keys.push( "V".toLowerCase().charCodeAt(0) );
   if(key === "B")         hardware_keys.push( "B".toLowerCase().charCodeAt(0) );
   if(key === "N")         hardware_keys.push( "N".toLowerCase().charCodeAt(0) );
   if(key === "M")         hardware_keys.push( "M".toLowerCase().charCodeAt(0) );

   if(key === "_")         { hardware_keys.push( 64); hardware_keys.push( 0x0F );  }  // simulate underscore

   // FKEYS
   if(code === "F1")           hardware_keys.push( 0xF1 );
   if(code === "F2")           hardware_keys.push( 0xF2 );
   if(code === "F3")           hardware_keys.push( 0xF3 );
   if(code === "F4")           hardware_keys.push( 0xF4 );
   if(code === "F5")           hardware_keys.push( 0xF5 );
   if(code === "F6")           hardware_keys.push( 0xF6 );
   if(code === "F7")           hardware_keys.push( 0xF7 );
   if(code === "F8")           hardware_keys.push( 0xF8 );

   if(code === "Space")        hardware_keys.push( 0x20  );
   if(code === "ArrowLeft")    hardware_keys.push( 0x08  );
   if(code === "ArrowRight")   hardware_keys.push( 0x09  );
   if(code === "ArrowDown")    hardware_keys.push( 0x0a  );
   if(code === "ArrowUp")      hardware_keys.push( 0x0b  );

   if(code === "Delete")       hardware_keys.push( 0x01  );
   if(code === "Insert")       hardware_keys.push( 0x07  );

   if(code === "Backspace" &&  shift) hardware_keys.push( 0x07  );
   if(code === "Backspace" && !shift) hardware_keys.push( 0x01  );

   if(code === "Enter")        hardware_keys.push( 0x0D  );
   if(code === "Escape")       hardware_keys.push( 0x03  );  // run stop
   if(code === "Backquote")    hardware_keys.push( 0x04  );  // left arrow

   if(code === "Home")          hardware_keys.push( 0x05  );
   if(code === "Home" && shift) hardware_keys.push( 0x06  );

   if(control && !altgraph) hardware_keys.push( 0x0E );  // emulate CTRL
   if(cbm)     hardware_keys.push( 0x0F );  // emulate CBM

   /*
   if(code === "ControlLeft")  hardware_keys.push( 0x0E );
   if(code === "ControlRight") hardware_keys.push( 0x0E );
   if(code === "Tab")          hardware_keys.push( 0x0E );  // emulate CTRL
   if(code === "AltLeft")      hardware_keys.push( 0x0F );  // emulate CBM
   if(code === "PageUp")       hardware_keys.push( 0xFF );  // emulate RESTORE
   */

   return hardware_keys;
}
