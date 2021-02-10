import React from 'react'
import {auth} from '../firebase/firebase'

const Message = (message)=>{
    const isSent=()=>{
       return message.value.uid===auth.currentUser.uid ? true : false
    }
    return(
        <div className={message.value.uid===auth.currentUser.uid ? 'messages-item sent':'messages-item received'}>
            <img src={message.value.photoURL} alt='profile Image'></img>
            <p>{message.value.text}</p>
        </div>
    )
}
export default Message