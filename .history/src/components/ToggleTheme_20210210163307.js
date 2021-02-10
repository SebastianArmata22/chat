import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ToogleTheme=()=>{
    const {toogleTheme}=useContext(ThemeContext)
    return(
        <button onClick={toogleTheme}>Toggle theme</button>

    )
}
export default ToogleTheme