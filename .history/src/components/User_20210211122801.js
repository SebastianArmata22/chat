import React from 'react'
import SignOut from './SignOut'
import {auth} from '../firebase/firebase'
import ToogleTheme from './ToggleTheme'
import '../style/componentStyle.scss'


const User= ()=>{
    const user=auth.currentUser
    return(
        <>
            <div className='user-category'>
                <img src={user.photoURL}></img>
                <p>Hello {user.displayName}</p>
            </div>
            <div className='user-category'>
                <ToogleTheme/>
                <SignOut/>
            </div>
        </>

    )
}
export default User