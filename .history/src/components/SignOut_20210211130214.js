import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import {auth} from '../firebase/firebase'
import logoutDark from '../icons/logout-dark.svg'
import logoutLight from '../icons/logout-light.svg'
const LogOut= ()=>{
    const {isDarkMode}=useContext(ThemeContext)
    const logout=()=>{
        auth.currentUser && auth.signOut()
    }
    return(
        <img src={isDarkMode ? logoutDark : logoutLight} alt='Log out' onClick={logout}></img>
    )
}
export default LogOut