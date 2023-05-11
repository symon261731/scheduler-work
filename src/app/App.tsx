import React, { useEffect, useState } from 'react';
import './app.css';
import { Header } from '../organism/Header';
import { Mocktab } from '../atoms/MockTab/MockTab';
import { Navbar } from '../organism/Navbar';
import { MuiMonthRow } from '../organism/MuiMonthRow';
import { InputGroup } from '../organism/InputGroup/InputGroup';
import { getDaysInMonth } from 'date-fns';

function App () {
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [lastDayOfMonth,setLastDayOfMonth] = useState(0);
    const [tab, setTab] = useState<number[] | []>([]);
    

    useEffect(()=>{
      let currentMonth = new Date().getMonth();
      setMonth(currentMonth);
      let currentYear = new Date().getFullYear();
      setYear(currentYear);
    },[])


    useEffect(()=>{
      let arr = [];
      for(let i=1; i<=getDaysInMonth(new Date(year,month)); i+=1){
        arr.push(i);
      }
      setTab(arr);
      setLastDayOfMonth(arr[arr.length-1]);
   },[month,year])
  
  const setNextMonth = () => {
    setMonth(prev=> prev + 1);
  }

  const setPrevMonth = () => {
    setMonth(prev=> prev - 1);
  }

  return (
    <div className='app'>
      <div className='container'>
        <Navbar/>
        <div className='content'>
          <Header/>
          <Mocktab/>
          <InputGroup 
          currentMonth={month}
          currentYear={year}
          lastDayOfMonth={lastDayOfMonth}
          nextMonth={()=>setNextMonth()}
          prevMonth={()=>setPrevMonth()}
          />
          <MuiMonthRow tab={tab} year={year} month={month}/>
        </div>
      </div>
    </div>
  )
}

export default App