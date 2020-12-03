MODEM_DATA_OUT EQU $D7F2    
MODEM_DATA_IN EQU $D7F0    
MODEM_DATA_REQ EQU $D7F3    
MODEM_ACK EQU $D7F1    ; PORTA PER L'HANDSHAKE
MODEM_CONNST EQU $D7F4    

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









BASIC_ROW_0: BYTE [BASIC_ROW_1%256],[BASIC_ROW_1/256],[2020%256],[2020/256],158,32,[[[MAIN%100000]-[MAIN%10000]]/10000+$30],[[[MAIN%10000]-[MAIN%1000]]/1000+$30],[[[MAIN%1000]-[MAIN%100]]/100+$30],[[[MAIN%100]-[MAIN%10]]/10+$30],[[[MAIN%10]-[MAIN%1]]/1+$30],0
BASIC_ROW_1: BYTE 0,0

MAIN:
    LDA #0
    STA 53280

    LDA #0
    STA 53281

    LDA #15
    STA 54296

    LDA #14  
    JSR CHROUT    
    LDA #147 
    JSR CHROUT    
    LDA #5   
    JSR CHROUT    

TERMINAL:
    
    LDA MODEM_DATA_REQ
IF_591_START:
	CMP #0
	BEQ IF_591_ELSE
        JSR CURSOR_OFF
DO_593_START:
            
            LDX #0
            STX $D4
            STX $D8

            
            LDA MODEM_DATA_IN

            
            PHA
IF_604_START:
	CMP #7
	BNE IF_604_ELSE
 JSR TERM_BELL 
IF_604_ELSE:
IF_604_END:
 
            PLA

            
            JSR CHROUT

            
            LDA #0
            STA MODEM_ACK
            LDA #1
            STA MODEM_ACK

            
            LDA MODEM_DATA_REQ
	BNE DO_593_START
DO_593_END:

        JSR CURSOR_ON
IF_591_ELSE:
IF_591_END:

    
    JSR GETIN
IF_629_START:
	CMP #0
	BEQ IF_629_ELSE
 STA MODEM_DATA_OUT 
IF_629_ELSE:
IF_629_END:
 

    
    LDA MODEM_CONNST
    STA 53280
    STA 53281

    JMP TERMINAL




CURSOR_ON:
    LDY #$00
   STY $CC
    RTS

CURSOR_OFF:
   LDY $CC
IF_651_START:
	BNE IF_651_ELSE
        LDY #$01
        STY $CD
DO_646_START:
            LDY $CF
	BNE DO_646_START
DO_646_END:

IF_651_ELSE:
IF_651_END:
   LDY #$FF
   STY $CC
    RTS

TERM_BELL:
    LDA #15
    STA $D418

    LDA #20
    STA $D401

    LDA #0
    STA $D405

    LDA #249
    STA $D406

    LDA #17
    STA $D404

    LDA #16
    STA $D404

   RTS

