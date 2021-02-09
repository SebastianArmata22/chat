import React from 'react'
import {auth} from '../firebase/firebase'
const LogOut= ()=>{
    const logout=()=>{
        auth.currentUser && auth.signOut()
    }
    return(
        <button onClick={logout}>Log out</button>
    )
}
export default LogOut