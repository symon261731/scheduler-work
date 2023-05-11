import { FC, memo } from "react";
import { mockDataUser } from "../../shared/mock/mockData";
import './InputGroup.css';
import { ButtonPrevNext } from "../../atoms/ButtonPrevNext/ButtonPrevNext";

interface InputGroupProps{
    nextMonth: () => void;
    prevMonth: () => void;
    currentMonth: number,
    currentYear: number,
    lastDayOfMonth: number,
}

export const InputGroup: FC<InputGroupProps> = memo((props: InputGroupProps) => {
    const {nextMonth, prevMonth, currentMonth, currentYear, lastDayOfMonth} = props;
    
    return (
        <div className="inputGroup">
            <div className="inputGroup__input-select-side">
                <input
                 type="text" 
                 placeholder="поиск" 
                 className="inputGroup__input"/>
                <select className="inputGroup__select">
                    {mockDataUser.map(el=> (
                        <option value={el.specialize}>{el.specialize}</option>
                    ))}
                </select>
                <select className="inputGroup__select">
                     <option value="status" selected>В офисе</option>
                </select>
                <select className="inputGroup__select">
                    <option value="test" selected>Месяц</option>
                </select>
                <div className="inputGroup__dates">
                    {`01.0${currentMonth+1}.${currentYear}-${lastDayOfMonth}.0${currentMonth+1}.${currentYear}`}
                </div>
            </div>
            <ButtonPrevNext className='inputGroup__button-group'
             next={()=>{nextMonth()}}
             prev={()=>{prevMonth()}}
             />
        </div>
    ) 
});