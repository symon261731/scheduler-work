import { CSSProperties, memo, useMemo, useState} from "react";
import { TableCell, TableRow, Checkbox, Button } from "@mui/material";
import {  ETypeOfEvent, dayEvent } from "../../shared/Types/Types";
import { Event } from "../../atoms/Event/Event";
import { PlanFactNormalTableCell } from "../../atoms/PlanFactNormalTableCell/PlanFactNormalTableCell";
import './MuiOneUserRow.css';
import { WorkerInfo } from "../../atoms/WorkerInfo/WorkerInfo";

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
    date: CSSProperties,
    taskLayer: CSSProperties,
    cellOfLayer: CSSProperties,
}

const styles: stylesForComponents= {
    date: {
        border:'1px solid grey',
        padding: '50px 16px',
        position: 'relative',
    },
    taskLayer: {
        position: 'absolute',
        left: '16.0%', 
        top: '10%',
        height: `${100-20}%`,
        display: 'flex',
        gap: '1px',
    },
    cellOfLayer: {},
   }


export const MuiOneUserRow = memo((props: MuiOneuserRowProps) => {
    const {width, name, workingHours, currentMonth, specialize, dates, userTasks} = props;
    const findEvent = (taskThisDay: number, date: number) => {
        if(taskThisDay === date){
            return true
        };
        return false;
    }
    styles.cellOfLayer = {
        display: 'flex',
        flexDirection: 'column',
        width: `${width}px`,
        flex: '1 1 auto',
    }

    const sortingUserTasks = useMemo(()=>{
        return userTasks.sort((a,b) => (b.end -b.start)-(a.end-a.start));
    },[userTasks])

    const checkNotOnlyTask = (oneTaskObject: dayEvent) => {
        if(sortingUserTasks.length === 1){
            return false;
        }
        let check = sortingUserTasks
        .filter(el=> el!== oneTaskObject)
        .map(element=>{ 
            if(element.difference?.some(elem => oneTaskObject.difference?.includes(elem))){
                console.log('because difference =>', oneTaskObject.difference,
                            'and element difference=>', element.difference)
                return true;
            } else {
                return false;
            } 
        })
        
        if(check.some(elem=> elem===true)){
            return true;
        }

        return false;
    }
    
    return (
        <TableRow style={{position: 'relative'}}>
            <WorkerInfo 
            name={name} 
            workingHours={workingHours} 
            specialize={specialize}
            />
            <PlanFactNormalTableCell/>
            {dates.map((date: number)=>{
                return(
                <TableCell
                 style={styles.date} 
                 className="date">
                    <button className="cell-button"/>
                    {/* <div className="test" style={{height:'80%'}}>
                    {userTasks.map((oneTaskObject, index) => {
                        if(findEvent(date, oneTaskObject.day) && oneTaskObject.month === currentMonth){
                          return(<Event
                            key={index} 
                            widthOfTable={width} 
                            start={oneTaskObject.start} 
                            end={oneTaskObject.end} 
                            title={oneTaskObject.event}/>)
                        }})}
                    </div> */}
                </TableCell>
                )
            })
            }
            { userTasks.length > 0 && 
                    <div style={styles.taskLayer}>
                        {dates.map((oneDate)=> (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: `${width}px`,
                                flex: '1 1 auto',
                                gap: '2px',
                                position: 'relative',
                                left: '0.9px',
                            }}> 
                                {sortingUserTasks
                                    .map((oneTaskObject,indexOfTask) => {
                                        if(findEvent(oneDate, oneTaskObject.day) && oneTaskObject.month === currentMonth){
                                            
                                            return(
                                                <Event
                                                 widthOfTable={width}
                                                 start={oneTaskObject.start} 
                                                 end={oneTaskObject.end} 
                                                 title={oneTaskObject.event}
                                                 notOnlyEvent={checkNotOnlyTask(oneTaskObject)}
                                                 />   

                                            )
                                        }
                                        else if (oneTaskObject.difference?.find(el => el === oneDate) !== undefined && oneTaskObject.month === currentMonth){ 
                                            return (<Event title={ETypeOfEvent.EMPTY} widthOfTable={width} start={oneDate} end={oneDate}/>)
                                        }
                                })
                                }
                              
                            </div>
                        ))}
                    </div>
            }
        </TableRow>
    )
});