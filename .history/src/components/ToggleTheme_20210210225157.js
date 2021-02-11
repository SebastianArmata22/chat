import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import  DarkModeToggle from "react-dark-mode-toggle";

const ToogleTheme=()=>{
    const { isDarkMode, toogleTheme}=useContext(ThemeContext)
    return(
        <DarkModeToggle onChange={toogleTheme} checked={isDarkMode} size={80}/>

    )
}
export default ToogleTheme