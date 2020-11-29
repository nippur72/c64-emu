MODEM_IN EQU $D7F0
MODEM_ACK EQU $D7F1
MODEM_OUT EQU $D7F2
MODEM_READY EQU $D7F3

   PROCESSOR 6502














































































































































































































































    
































































    



































































































        








            
















        
























GETIN   = $FFE4     
CLRSCN  = $E544     
PRNSTR  = $AB1E     
GOHOME  = $E566     
PRNINT  = $BDCD     



CURSOR_PTR  = 209
JIFFY_CLOCK = 162
CRSRCOL     = 646
MEMORY_CONFIG = 1



COLOR_BLACK   = 0
COLOR_WHITE   = 1
COLOR_RED     = 2
COLOR_CYAN    = 3
COLOR_MAGENTA = 4
COLOR_GREEN   = 5
COLOR_BLUE    = 6
COLOR_YELLOW  = 7




SCREEN_COLS = 40
SCREEN_ROWS = 25
VIDEO_RAM = 1024
COLOR_RAM =  55296
COLOR_PAGE_OFFSET =  ((COLOR_RAM - VIDEO_RAM) / 256)
BASIC_RAM = 2049
RASTER =  $D012
ROMCHAR =  $D000
BORDER =  53280
BACKGROUND =  53281


    



    












       











































GETIN =  $FFE4
CHROUT =  $FFD2

    ORG BASIC_RAM








BASIC_ROW_0: BYTE [BASIC_ROW_1%256],[BASIC_ROW_1/256],[10%256],[10/256],153,32,34,5,147,34,59,0
BASIC_ROW_1: BYTE [BASIC_ROW_2%256],[BASIC_ROW_2/256],[20%256],[20/256],151,32,53,51,50,56,48,44,48,0
BASIC_ROW_2: BYTE [BASIC_ROW_3%256],[BASIC_ROW_3/256],[30%256],[30/256],151,32,53,51,50,56,49,44,48,0
BASIC_ROW_3: BYTE [BASIC_ROW_4%256],[BASIC_ROW_4/256],[40%256],[40/256],158,32,[[[TERMINAL%100000]-[TERMINAL%10000]]/10000+$30],[[[TERMINAL%10000]-[TERMINAL%1000]]/1000+$30],[[[TERMINAL%1000]-[TERMINAL%100]]/100+$30],[[[TERMINAL%100]-[TERMINAL%10]]/10+$30],[[[TERMINAL%10]-[TERMINAL%1]]/1+$30],0
BASIC_ROW_4: BYTE 0,0

TERMINAL:
    LDA MODEM_READY
IF_575_START:
	CMP #0
	BEQ IF_575_ELSE
        JSR CURSOR_OFF
DO_577_START:
            LDX #0
            STX $D4
            STX $D8
            LDA MODEM_IN
            JSR CHROUT
            LDA #0
            STA MODEM_ACK
            LDA #1
            STA MODEM_ACK
            LDA MODEM_READY
	BNE DO_577_START
DO_577_END:

        JSR CURSOR_ON
IF_575_ELSE:
IF_575_END:

    JSR GETIN
IF_595_START:
	CMP #0
	BEQ IF_595_ELSE
 STA MODEM_OUT 
IF_595_ELSE:
IF_595_END:
 

    JMP TERMINAL




CURSOR_ON:
    LDY #$00
   STY $CC
    RTS

CURSOR_OFF:
   LDY $CC
IF_612_START:
	BNE IF_612_ELSE
        LDY #$01
        STY $CD
DO_610_START:
            LDY $CF
	BNE DO_610_START
DO_610_END:

IF_612_ELSE:
IF_612_END:
   LDY #$FF
   STY $CC
    RTS









  
                        

         
            
            
          
          
                     
             
                
       
                
         
               
  

