MODEM_DATA_OUT EQU $D7F2    
MODEM_DATA_IN EQU $D7F0    
MODEM_DATA_REQ EQU $D7F3    
MODEM_ACK EQU $D7F1    ; PORTA PER L'HANDSHAKE
MODEM_CONNST EQU $D7F4    

   PROCESSOR 6502


GETIN =  $FFE4
CHROUT =  $FFD2








    ORG 2049


BASIC_ROW_0: BYTE [BASIC_ROW_1%256],[BASIC_ROW_1/256],[2020%256],[2020/256],158,[[[MAIN%100000]-[MAIN%10000]]/10000+$30],[[[MAIN%10000]-[MAIN%1000]]/1000+$30],[[[MAIN%1000]-[MAIN%100]]/100+$30],[[[MAIN%100]-[MAIN%10]]/10+$30],[[[MAIN%10]-[MAIN%1]]/1+$30],0
BASIC_ROW_1: BYTE 0,0

MAIN:
    LDA #0   
    STA 53280 
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
IF_35_START:
	CMP #0
	BEQ IF_35_ELSE
        JSR CURSOR_OFF
DO_37_START:
            
            LDX #0
            STX $D4
            STX $D8

            
            LDA MODEM_DATA_IN

            
IF_47_START:
	CMP #7
	BNE IF_47_ELSE
 JSR TERM_BELL 
IF_47_ELSE:
IF_47_END:
 

            
            JSR CHROUT

            
            
            LDA #0
            STA MODEM_ACK
            LDA #1
            STA MODEM_ACK

            
            LDA MODEM_DATA_REQ
	BNE DO_37_START
DO_37_END:

        JSR CURSOR_ON
IF_35_ELSE:
IF_35_END:

    
    JSR GETIN
IF_72_START:
	CMP #0
	BEQ IF_72_ELSE
 STA MODEM_DATA_OUT 
IF_72_ELSE:
IF_72_END:
 

    
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
IF_94_START:
	BNE IF_94_ELSE
        LDY #$01
        STY $CD
DO_89_START:
            LDY $CF
	BNE DO_89_START
DO_89_END:

IF_94_ELSE:
IF_94_END:
    LDY #$FF
    STY $CC
    RTS

TERM_BELL:
    LDY #15  
    STY $D418
    LDY #20  
    STY $D401
    LDY #0   
    STY $D405
    LDY #249 
    STY $D406
    LDY #17  
    STY $D404
    LDY #16  
    STY $D404
    RTS

