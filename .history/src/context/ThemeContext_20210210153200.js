import React, {createContext, useState} from 'react'
import {lightTheme, darkTheme} from '../variable/theme'
export const ThemeContext=createContext()
const [theme, setTheme]=useState(lightTheme)

const ThemeContextProvider=(props)=>{
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider
