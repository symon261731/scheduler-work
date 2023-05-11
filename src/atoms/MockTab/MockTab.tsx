import { memo } from "react"

 
export const Mocktab = memo(() => {

    return(
        <div className='mocktab'>
        <button className="mocktab__button">Расписание</button>
        <button className="mocktab__button">Шаблоны</button>
        <button className="mocktab__button">Сотрудники</button>
      </div>
    )
});