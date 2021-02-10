import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ToogleTheme=()=>{
    const {theme, toogleTheme}=useContext(ThemeContext)
    console.log(theme, toogleTheme)
    return(
        <button onClick={toogleTheme}>{theme}</button>

    )
}
export default ToogleTheme