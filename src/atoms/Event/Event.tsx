import React from 'react';
import { ETypeOfEvent } from '../../shared/Types/Types';
import './event.css';
import { Button } from '@mui/material';

interface EventProps{
    title: ETypeOfEvent,
    start: number,
    end: number,
    widthOfTable: number,
}


export const Event: React.FC<EventProps> = (props: EventProps) => {
    const {title,start,end, widthOfTable} = props;
    
    const howManyDays = (start:number,end:number) => {
        if(end-start === 0) return 1;
        return end-start + 1;
    }

    const checkStyles = (title: ETypeOfEvent) => {
        switch(title){
            case ETypeOfEvent.DISTANT : return {
                backgroundColor: 'rgba(200, 248, 255, 1)'
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
                backgroundColor: 'rgb(255, 101, 101)'
            };
            case ETypeOfEvent.VACATION : return {
                backgroundColor: 'greenyellow'
            };
            default: return undefined;
        }
    }
    const stylesOfThisEvent = checkStyles(title);

    return (
            <Button 
             style={{ 
                // flex: `0 1 ${37*howManyDays(start,end)}px`,
                width: `${widthOfTable*howManyDays(start,end)}px`,
                minWidth: `33px`,
                height: '100%',
                backgroundColor: stylesOfThisEvent?.backgroundColor, 
                color: stylesOfThisEvent?.color,
                padding: '0',
                display: 'flex'
            }}
             >
                    {howManyDays(start,end)>1 ? title: 13} 
            </Button>
    )
}