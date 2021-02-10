import React from 'react'
import {auth} from '../firebase/firebase'

const Message = (message)=>{
    console.log(auth.currentUser.getIdToken)
    return(
        <div className={message.uid===auth.currentUser.providerId ? 'messages-item sent':'messages-item received'}>
            <img src={message.value.photoURL} alt='profile Image'></img>
            <p>{message.value.text}</p>
        </div>
    )
}
export default Message