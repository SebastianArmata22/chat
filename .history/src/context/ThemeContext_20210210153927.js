import React, {createContext, useState} from 'react'
import {lightTheme, darkTheme} from '../variable/theme'
export const ThemeContext=createContext()


const ThemeContextProvider=(props)=>{
    const [theme, setTheme]=useState(lightTheme)
    const toogleTheme=()=>{
        setTheme(prevTheme=>{
            prevTheme===lightTheme ? darkTheme : lightTheme
        })
    }
    return(
        <ThemeContext.Provider value={{theme, toogleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider
