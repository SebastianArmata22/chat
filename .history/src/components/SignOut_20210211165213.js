import React from 'react'
import {auth} from '../firebase/firebase'
import signoutImg from '../icons/logout-dark.svg'

const LogOut= ()=>{
    const logout=()=>{
        auth.currentUser && auth.signOut()
    }
    return(
        <button onClick={logout}><img src={{signoutImg}}></img></button>
    )
}
export default LogOut