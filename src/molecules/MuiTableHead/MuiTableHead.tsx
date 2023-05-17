import { Checkbox, TableCell, TableHead } from "@mui/material";
import { CSSProperties, useCallback, useEffect, useRef } from "react";
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
        padding: '0 0 0 0',
        // paddingBottom: '60px', 
        border: '1px solid grey',
        textAlign: 'center',
    }

    // const width = useRef<any>(null);
    // setWidth(width?.current?.clientWidth);
    
    const divRef = useRef<any>(null);
    console.log(divRef.current?.getBoundingClientRect());
    setWidth(divRef?.current?.getBoundingClientRect().width)
    const resizeEvent = useCallback(() => {
        window.addEventListener('resize',()=> {
            if( divRef?.current?.getBoundingClientRect().width !== widthState){
                setWidth(divRef.current?.getBoundingClientRect().width)
            //     console.log(width)
            //     setWidth(width.current.clientWidth);
            }
        })

    },[]);

    useEffect(()=>{
        window.addEventListener('resize', resizeEvent)
        return (()=>window.removeEventListener('resize',resizeEvent));
    },[resizeEvent])
    
    return (
        <TableHead>
            <TableCell style={commonStyles}>
                <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                    <Checkbox/>
                    <p>Выбрать всех</p> 
                </div>
            </TableCell>
            <TableCell align="left" style={{padding: 0, paddingLeft: '2px', border: '1px solid grey'}}>
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
                    <TableCell style={{
                        padding: '10px 0 30px 0',
                        border: '1px solid grey',
                        textAlign: 'center',
                        backgroundColor: `${checkWeekend ? '#e9e9e9' : 'transparent'}`,
                        color: `${checkWeekend ? 'rgb(208, 54, 54)' : 'black'}`,
                        }}>
                        <div ref={divRef} style={{width: '100%', height:'100%'}}>

                        <p className="date">{date}</p>
                        <p className="day-of-week">{getDayOfWeek(new Date(year,month, date))}</p>
                        </div>
                    </TableCell>
                )
            })}
        </TableHead>
    );
}