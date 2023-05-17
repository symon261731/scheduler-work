import { ETypeOfEvent, dayEvent } from "../Types/Types"


export const mockDataUser: oneUser< dayEvent[] >[] = [
    {
     name:'Викторов Никита',
     workingHours: "40",
     specialize: 'тех поддержка',
     days: [
        {
            day: 5,
            start:5,
            end:8,
            month:4,
            event: ETypeOfEvent.OFFICE,
            difference: [5,6,7,8]
        },
        {
            day: 9,
            start:9,
            end:15,
            month:4, 
            event: ETypeOfEvent.VACATION,
            difference: [9,10,11,12,13,14,15],
        },
        {
            day: 10,
            start:10,
            end:12,
            month:4,
            event: ETypeOfEvent.GROOMING,
            difference: [10,11,12],
        },
        {
            day: 26,
            start:26,
            end:26,
            month:4,
            event: ETypeOfEvent.VACATION,
            difference: [26],
        }
     ]
    },
    {
        name:'Симагин Владимир',
        workingHours: "40",
        specialize: 'риски',
        days: [
            {
                day: 9,
                start:9,
                end:12,
                month:4, 
                event: ETypeOfEvent.DISTANT, 
                difference: [9,10,11,12]
            },
            // { day:9,
            //   start:9,
            //   end:9,
            //   month:4,
            //   event: ETypeOfEvent.VACATION,
            //   difference: [9],
            // },
            { 
                day:10, 
                start: 10, 
                end: 11, 
                month: 4, 
                event: ETypeOfEvent.GROOMING, 
                difference: [10,11]
            },
            {
                day: 15,
                start: 15,
                end: 24,
                month: 4,
                event: ETypeOfEvent.OFFICE,
                difference: [15,16,17,18,19,20,21,22,23,24],
            }
         ]
    },
    {
        name:'Менделеев Игорь',
        workingHours: "40", 
        specialize: 'маркетинг',
        days: [
            {
                day: 15,
                start:15,
                end:20, 
                month: 4, 
                event: ETypeOfEvent.DISTANT, 
                difference: [15,16,17,18,19,20]
            },
            {
                day: 15,
                start:15,
                end:15, 
                month: 4, 
                event: ETypeOfEvent.GROOMING, 
                difference: [15]
            },
            {
                day: 23,
                start:23,
                end:26, 
                month:4, 
                event: ETypeOfEvent.OFFICE, 
                difference:[23,24,25,26]
            },
            {
                day: 15, 
                start: 15, 
                end: 18, 
                month: 4, 
                event: ETypeOfEvent.GROOMING, 
                difference:[15,16,17,18]
            },
         ]
    },
    {
     name:'Чернышев Денис',
     workingHours: "40",
     specialize: 'айти',
     days: [
            {
                day: 1,
                start:1,
                end:30, 
                month: 4, 
                event: ETypeOfEvent.SICK,
                difference: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            },
            // { day: 3,start:3,end:5, month:4, event: ETypeOfEvent.GROOMING, difference:[3,4,5]}
     ],
    },

]

interface oneUser<T>{ 
    name: string,
    workingHours: string,
    specialize: string,
    days: T
}