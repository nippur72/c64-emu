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









BASIC_ROW_0: BYTE [BASIC_ROW_1%256],[BASIC_ROW_1/256],[10%256],[10/256],151,32,53,51,50,56,48,44,48,58,151,32,53,51,50,56,49,44,48,0
BASIC_ROW_1: BYTE [BASIC_ROW_2%256],[BASIC_ROW_2/256],[20%256],[20/256],151,32,53,52,50,57,54,44,49,53,0
BASIC_ROW_2: BYTE [BASIC_ROW_3%256],[BASIC_ROW_3/256],[30%256],[30/256],153,32,199,40,49,52,41,170,34,5,147,34,59,0
BASIC_ROW_3: BYTE [BASIC_ROW_4%256],[BASIC_ROW_4/256],[40%256],[40/256],158,32,[[[TERMINAL%100000]-[TERMINAL%10000]]/10000+$30],[[[TERMINAL%10000]-[TERMINAL%1000]]/1000+$30],[[[TERMINAL%1000]-[TERMINAL%100]]/100+$30],[[[TERMINAL%100]-[TERMINAL%10]]/10+$30],[[[TERMINAL%10]-[TERMINAL%1]]/1+$30],0
BASIC_ROW_4: BYTE 0,0

TERMINAL:
    
    LDA MODEM_DATA_REQ
IF_577_START:
	CMP #0
	BEQ IF_577_ELSE
        JSR CURSOR_OFF
DO_579_START:
            
            LDX #0
            STX $D4
            STX $D8

            
            LDA MODEM_DATA_IN

            
            PHA
IF_590_START:
	CMP #7
	BNE IF_590_ELSE
 JSR TERM_BELL 
IF_590_ELSE:
IF_590_END:
 
            PLA

            
            JSR CHROUT

            
            LDA #0
            STA MODEM_ACK
            LDA #1
            STA MODEM_ACK

            
            LDA MODEM_DATA_REQ
	BNE DO_579_START
DO_579_END:

        JSR CURSOR_ON
IF_577_ELSE:
IF_577_END:

    
    JSR GETIN
IF_615_START:
	CMP #0
	BEQ IF_615_ELSE
 STA MODEM_DATA_OUT 
IF_615_ELSE:
IF_615_END:
 

    
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
IF_637_START:
	BNE IF_637_ELSE
        LDY #$01
        STY $CD
DO_632_START:
            LDY $CF
	BNE DO_632_START
DO_632_END:

IF_637_ELSE:
IF_637_END:
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

