import { TableCell } from "@mui/material"
import { CSSProperties, memo } from "react"


export const PlanFactNormalTableCell = memo(() => {

    const commonStyles: CSSProperties = {
        padding: 0, 
        border: '1px solid black',
        textAlign: 'center',
    }   

    return (
        <TableCell style={commonStyles}>
            <p>П 123</p>
            <p className="work-plan">Ф 123</p>
            <p className="work-plan">Н 123</p>
        </TableCell>
    )
});