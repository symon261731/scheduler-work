import { ETypeOfEvent } from "../shared/Types/Types";
import { Event } from "../atoms/Event/Event";


interface OneuserRowProps {
    name: string,
    workingHours: string,
    specialize: string,
    dates: number[],
    userTasks: {day:number, start:number, end:number, event: ETypeOfEvent}[],
}

export const OneUserRow = (props: OneuserRowProps) => {
    const {name,workingHours, specialize, dates, userTasks} = props;
    const findEvent = (taskThisDay: number, date: number) => {
    if(taskThisDay === date){
      return true
    };
    return false;
   }

    return (

        <tr>
            <td>
                <p title={name}>{name.length >12 ? `${name.slice(0,10)}...` : name}</p>
                <p>{workingHours}</p>
                <p>{specialize}</p>
            </td>
            <td>
                <p>П 123</p>
                <p className="work-plan">Ф 123</p>
                <p className="work-plan">Н 123</p>
            </td>
            {dates.map((date: number)=>(
                <td className="date">
                    <div className="test">
                    {userTasks.map((oneTaskObject) => {
                        if(findEvent(date, oneTaskObject.day)){
                          return(<Event widthOfTable={12} start={oneTaskObject.start} end={oneTaskObject.end} title={oneTaskObject.event}/>)
                        }})}
                    
                </div>
                </td>
            ))} 
        </tr>
    )
}