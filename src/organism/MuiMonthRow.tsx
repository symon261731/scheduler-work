import React, { FC, useState } from "react";
import { 
    Table, 
    TableBody,
    TableContainer,
} from "@mui/material";
import { mockDataUser } from "../shared/mock/mockData";
import { MuiOneUserRow } from "../molecules/MuiOneUserRow/MuiOneUserRow";
import { MuiTableHead } from "../molecules/MuiTableHead/MuiTableHead";

interface MuiMonthRowProps{
    month: number,
    year:number,
    tab: number[],
}

export const MuiMonthRow: FC<MuiMonthRowProps> = (props) => {
    const {month, year, tab} = props;
    const [width, setWidth] = useState(0);

    return (
        <>
        <TableContainer>
             <Table>
                <MuiTableHead widthState={width} setWidth={(currentWidth:number)=>{setWidth(currentWidth)}} month={month} year={year} dates={tab}/>
                <TableBody>
                    {mockDataUser.map((oneUser,index)=>(
                        <MuiOneUserRow
                        width={width}
                        key={index}
                        currentMonth={month}
                        name={oneUser.name}
                        workingHours={oneUser.workingHours}
                        specialize={oneUser.specialize}
                        dates={tab}
                        userTasks={oneUser.days}
                        />
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}