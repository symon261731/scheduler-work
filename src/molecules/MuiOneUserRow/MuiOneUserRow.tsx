import { CSSProperties, memo} from "react";
import { TableCell, TableRow, Checkbox } from "@mui/material";
import {  dayEvent } from "../../shared/Types/Types";
import { Event } from "../../atoms/Event/Event";
import { PlanFactNormalTableCell } from "../../atoms/PlanFactNormalTableCell";
import './MuiOneUserRow.css';
// import { howManyDays } from "../../shared/utils/howManyDays";

interface MuiOneuserRowProps {
    name: string,
    currentMonth: number,
    workingHours: string,
    specialize: string,
    dates: number[],
    userTasks: dayEvent[],
    width: number,
}

interface stylesForComponents{
    tableCeil:CSSProperties,
    workerInfo: CSSProperties,
    date: CSSProperties,
    taskLayer: CSSProperties,
}

const styles: stylesForComponents= {
    tableCeil: {
        padding: 0,
        border: '1px solid black',
    },
    workerInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    date: {
        border:'1px solid black',
        padding: '50px 16px',
        position: 'relative',
    },
    taskLayer: {
        position: 'absolute',
        left: '27.5vh', 
        top: '10%',
        maxWidth: `${100-16}%`,
        height: `${100-20}%`,
        display: 'flex',
        width: '0%',
        gap: '38px',
    }
   }


export const MuiOneUserRow = memo((props: MuiOneuserRowProps) => {
    const {width,name,workingHours, currentMonth, specialize, dates, userTasks} = props;
    const findEvent = (taskThisDay: number, date: number) => {
        if(taskThisDay === date){
            return true
        };
        return false;
    }
    
    return (
        <TableRow style={{position: 'relative'}}>
            <TableCell style={styles.tableCeil}>
                <div style={{display: 'flex', alignItems:'center', gap:'5px'}}>
                    <Checkbox/>
                    <div className="worker-info" style={styles.workerInfo}>
                        <p title={name}>{name.length >12 ? `${name.slice(0,10)}...` : name}</p>
                        <p>{workingHours}</p>
                        <p>{specialize}</p>
                    </div>
                </div>
            </TableCell>
            <PlanFactNormalTableCell/>
            {dates.map((date: number)=>{
                return(
                <TableCell
                 style={styles.date} 
                 className="date">
                    <div className="test" style={{height:'80%'}}>
                    {userTasks.map((oneTaskObject, index) => {
                        if(findEvent(date, oneTaskObject.day) && oneTaskObject.month === currentMonth){
                          return(<Event
                            key={index} 
                            widthOfTable={width} 
                            start={oneTaskObject.start} 
                            end={oneTaskObject.end} 
                            title={oneTaskObject.event}/>)
                        }})}
                    </div>
                </TableCell>
                )
            })
            }
            {/* { userTasks.length > 0 && 
                    <div style={styles.taskLayer}>
                        {dates.map((oneDate)=> (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                {userTasks.map((oneTaskObject) => {
                                    if(findEvent(oneDate, oneTaskObject.day) && oneTaskObject.month === currentMonth){
                                    return(
                                    <Event start={oneTaskObject.start} end={oneTaskObject.end} title={oneTaskObject.event}/>
                                    )
                                    }})}
                                    
                            </div>
                        ))}
                    </div>
            } */}
        </TableRow>
    )
});