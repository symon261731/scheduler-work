import { useEffect, useState } from "react";
import { getDaysInMonth } from "../shared/utils/getDaysInMonth";
import { getDayOfWeek } from "../shared/utils/getDayOfWeek";
import { checkWeekend } from "../shared/utils/checkWeekend";
import { mockDataUser } from "../shared/mock/mockData";
import { OneUserRow } from "./OneUserRow";
import { Checkbox } from "@mui/material";

export const MonthRow = () => {
    const [month, setMonth] = useState(0)
    const [year, setYear] = useState(0)
    const [tab, setTab] = useState<number[] | []>([]);
   
    useEffect(()=>{
      let currentMonth = new Date().getMonth();
      setMonth(currentMonth);
      let currentYear = new Date().getFullYear();
      setYear(currentYear);
      let arr = [];
      for(let i=1; i<=getDaysInMonth( currentMonth,currentYear ); i+=1){
        arr.push(i);
      }
      setTab(arr);
   },[])


   const findEvent = (taskThisDay: number, date: number) => {
    if(taskThisDay === date){
      return true
    };
    return false;
   }

    return (
      <>
        <table className='datetable'>
            <thead>
              <tr className="dates-table-row">
                <th>
                  <div style={{display:'flex'}}>
                  <Checkbox/>
                  <p>Выбрать всех</p> 
                  </div>
                </th>
                <th>
                  <p>план</p>
                  <p>факт</p>
                  <p>норма</p>
                </th>  
                {tab.map((number: any) => {
                  return (
                  <th className={`${checkWeekend(year,month,number) ? 'weekend' : 'work' }`}>
                    <p className='date'>
                      {number}
                    </p>
                    <p className='week-day'>{getDayOfWeek(new Date(year,month, number))}</p>
                  </th>
                  )
                })}
              </tr>      
            </thead>
            <tbody>
            {mockDataUser.map((oneUser)=> (
                <OneUserRow
                  name={oneUser.name}
                  workingHours={oneUser.workingHours}
                  specialize={oneUser.specialize}
                  dates={tab}
                  userTasks={oneUser.days}
                />
              ))}
            </tbody>
          </table>
      </>

    )
}