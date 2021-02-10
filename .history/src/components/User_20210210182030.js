import React from 'react'
import SignOut from './SignOut'
import {auth} from '../firebase/firebase'
const User= ()=>{
    const user=auth.currentUser
    return(
        <>
            <img src={user.photoURL}></img>
            <p>Hello {user.displayName}</p>
            <SignOut/>
        </>

    )
}
export default User