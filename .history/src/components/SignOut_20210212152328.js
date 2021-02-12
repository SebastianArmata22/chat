import React from 'react'
import {auth} from '../firebase/firebase'
import signoutImg from '../icons/logout-light.svg'
import '../style/componentStyle.scss'

const LogOut= ()=>{
    const logout=()=>{
        auth.currentUser && auth.signOut()
    }
    return(
        <button className='logout-btn' onClick={logout}>
            <img src={signoutImg}/>
        </button>
    )
}
export default LogOut