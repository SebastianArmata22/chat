import React from 'react'
import {auth} from '../firebase/firebase'

const Message = (message, isDarkMode)=>{
    const className=()=>{
        let name= message.value.uid===auth.currentUser.uid ? 'messages-item sent ':'messages-item received '
        name+=isDarkMode? 'dark-text': 'light-text'
        return name
    }
    return(
        <div className={className}>
            <img src={message.value.photoURL} alt='profile Image'></img>
            <p>{message.value.text}</p>
        </div>
    )
}
export default Message