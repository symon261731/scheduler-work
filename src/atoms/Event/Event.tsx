import React, { memo } from 'react';
import { ETypeOfEvent } from '../../shared/Types/Types';
import './event.css';
import { Button } from '@mui/material';

interface EventProps{
    title: ETypeOfEvent,
    start: number,
    end: number,
    widthOfTable: number,
    notOnlyEvent?: boolean,
}


export const Event: React.FC<EventProps> = memo((props: EventProps) => {
    const {title,start,end, notOnlyEvent, widthOfTable} = props;
    
    const howManyDays = (start:number,end:number) => {
        if(end-start === 0) return 1;
        return end-start + 1;
    }

    const checkStyles = (title: ETypeOfEvent) => {
        switch(title){
            case ETypeOfEvent.DISTANT : return {
                backgroundColor: '#D5F5FF',
                color: '#29B6E9',
                fontWeight:'700'
            };
            case ETypeOfEvent.GROOMING : return {
                backgroundColor: 'rgb(115, 115, 255)',
                color: 'white'
            };
            case ETypeOfEvent.OFFICE : return {
                backgroundColor: 'rgba(175, 226, 255, 1)',
                color: '#EBF9F3'
            };
            case ETypeOfEvent.SICK : return {
                backgroundColor: '#FF9191',
                color: 'white',
                fontWeight: '600',
            };
            case ETypeOfEvent.VACATION : return {
                backgroundColor: '#66FFCD',
                color: '#2B6954',
                fontWeight: '700'
            };
            case ETypeOfEvent.EMPTY: return {
                backgroundColor: 'transparent',
                color: 'transparent',
            }
            default: return undefined;
        }
    }
    const stylesOfThisEvent = checkStyles(title);

    return (
            <Button 
             style={{ 
                width: howManyDays(start,end) < 17 ? `${widthOfTable*howManyDays(start,end)- 2}px` : `${(widthOfTable*howManyDays(start,end)) + widthOfTable - 10}px` ,
                minWidth: `${widthOfTable - 2}px`, // по большой части для единичного ивента
                fontWeight: stylesOfThisEvent?.fontWeight,
                height: notOnlyEvent || title === ETypeOfEvent.EMPTY ? '50%' : '100%',
                maxHeight: notOnlyEvent || title === ETypeOfEvent.EMPTY ? '100%' : 'none',
                backgroundColor: stylesOfThisEvent?.backgroundColor, 
                color: stylesOfThisEvent?.color,
                padding: '0',
                position:'relative',
                zIndex:  title === ETypeOfEvent.EMPTY ? '-10' : '100',
            }}
             >
                    {howManyDays(start,end)>1 ? title: '1'} 
            </Button>
    )
});