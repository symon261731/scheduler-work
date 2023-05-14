import { ETypeOfEvent, dayEvent } from "../Types/Types"


export const mockDataUser: oneUser< dayEvent[] >[] = [
    {
     name:'Викторов Никита',
     workingHours: "40",
     specialize: 'тех поддержка',
     days: [
        {day: 5,start:5,end:8,month:4, event: ETypeOfEvent.OFFICE},
        {day: 9,start:9,end:11,month:4, event: ETypeOfEvent.VACATION}
     ]
    },
    {
        name:'Симагин Владимир',
        workingHours: "40",
        specialize: 'риски',
        days: [
            {day: 9,start:9,end:12,month:4, event: ETypeOfEvent.DISTANT}
         ]
    },
    {
        name:'Менделеев Игорь',
        workingHours: "40", 
        specialize: 'маркетинг',
        days: [
            {day: 15,start:15,end:20, month: 4, event: ETypeOfEvent.DISTANT},
            {day: 15,start:15,end:15, month: 4, event: ETypeOfEvent.GROOMING},
            {day: 23,start:23,end:26, month:4, event: ETypeOfEvent.OFFICE},
            {day: 15, start: 15, end: 18, month: 4 , event: ETypeOfEvent.GROOMING},
         ]
    },
    {
     name:'Чернышев Денис',
     workingHours: "40",
     specialize: 'айти',
     days: [
            {day: 1,start:1,end:30, month: 4, event: ETypeOfEvent.SICK},
     ],
    },

]

interface oneUser<T>{ 
    name: string,
    workingHours: string,
    specialize: string,
    days: T
}