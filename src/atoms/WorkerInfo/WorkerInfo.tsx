import { Checkbox, TableCell } from "@mui/material";
import React, { CSSProperties, FC, memo } from "react";


interface WorkerInfoProps{
    name: string,
    workingHours: string,
    specialize: string,
}

const styles: {tableCeil: CSSProperties, workerInfo: CSSProperties} = {
    tableCeil: {
        padding: 0,
        border: '1px solid grey',
    },
    workerInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
}

export const WorkerInfo: FC<WorkerInfoProps> = memo((props) => {
    const {name, workingHours, specialize } = props


    return (
        <TableCell style={styles.tableCeil}>
        <div style={{display: 'flex', alignItems:'center', gap:'5px'}}>
            <Checkbox/>
            <div className="worker-info" style={styles.workerInfo}>
                <p title={name}> {name.length >12 ? `${name.slice(0,10)}...` : name}</p>
                <p>{workingHours}</p>
                <p>{specialize}</p>
            </div>
        </div>
    </TableCell>
    )
});