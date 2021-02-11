import React from 'react'
import {auth} from '../firebase/firebase'
import signoutImg from '../icons/logout-light.svg'

const LogOut= ()=>{
    const logout=()=>{
        auth.currentUser && auth.signOut()
    }
    return(
        <button onClick={logout}>{signoutImg}</button>
    )
}
export default LogOut