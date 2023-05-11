import { Button } from "@mui/material"
import React, { memo } from "react"

interface HeaderProps {

}

export const Header: React.FC = memo((props: HeaderProps) => {

    return (
      <>
        <div className='intro'>
          <h1 className='intro__welcome'>Управление расписанием</h1>
          <div className='intro__buttons buttons-group'>
            <Button variant="contained" className='buttons-group__one-button'>Добавить запись</Button>
            <Button variant="contained" className='buttons-group__one-button'>Редактировать профиль</Button>
          </div>
        </div>
      </>
    )
});