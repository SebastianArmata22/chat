import React, {createContext, useState} from 'react'
export const ThemeContext=createContext()


const ThemeContextProvider=(props)=>{
    const [isDarkMode, setIsDarkMode]=useState(false)
    const toogleTheme=()=>(
        setIsDarkMode(prev=>(!prev))
    )
    return(
        <ThemeContext.Provider value={{isDarkMode, toogleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider
