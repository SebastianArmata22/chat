import React from 'react'
import {auth} from '../firebase/firebase'

const Message = (message)=>{
    return(
        <div className={message.value.uid===auth.currentUser.uid ? 'messages-item sent':'messages-item received'}>
            <img src={message.value.photoURL} alt='img'></img>
            <p>{message.value.text.split(" ")[0]}</p>
        </div>
    )
}
export default Message