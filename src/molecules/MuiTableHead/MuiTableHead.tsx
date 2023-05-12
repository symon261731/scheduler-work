import { Checkbox, TableCell, TableHead } from "@mui/material";
import { CSSProperties, useEffect, useRef } from "react";
import { getDayOfWeek } from "../../shared/utils/getDayOfWeek";
import './MuiTableHead.css';

interface MuiTableHeadProps {
    dates: number[],
    year: number,
    month: number,
    setWidth: (currentWidth:number)=>void,
    widthState: number
}


export const MuiTableHead = (props: MuiTableHeadProps) => {
    const {dates, year, month, setWidth, widthState} = props;
    const commonStyles: CSSProperties = {
        padding:0, 
        border: '1px solid black',
        textAlign: 'center',
    }

    const width = useRef<any>(32);

    useEffect(()=>{
        window.addEventListener('resize',()=>{

            if( width.current.clientWidth !== widthState){
                setWidth(width.current.clientWidth);
                console.log(width.current.clientWidth)
            }
        })

    },[width])
    
    return (
        <TableHead>
            <TableCell style={commonStyles}>
                <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                    <Checkbox/>
                    <p>Выбрать всех</p> 
                </div>
            </TableCell>
            <TableCell align="left" style={{padding: 0, paddingLeft: '2px', border: '1px solid black'}}>
                <p>план</p>
                <p>факт</p>
                <p>норма</p>
            </TableCell> 
            {dates.map((date:any)=>{
                let checkWeekend: boolean | null = null
                if(getDayOfWeek(new Date(year,month, date)) === 'ВС' || getDayOfWeek(new Date(year,month, date)) === 'СБ'){
                    checkWeekend = true;
                }
                return(
                    <TableCell ref={width} style={{
                        padding:0, 
                        border: '1px solid black',
                        textAlign: 'center',
                        backgroundColor: `${checkWeekend ? '#e9e9e9' : 'transparent'}`,
                        color: `${checkWeekend ? 'rgb(208, 54, 54)' : 'black'}`,
                        }}>
                        <p className="date">{date}</p>
                        <p className="day-of-week">{getDayOfWeek(new Date(year,month, date))}</p>
                    </TableCell>
                )
            })}
        </TableHead>
    );
}