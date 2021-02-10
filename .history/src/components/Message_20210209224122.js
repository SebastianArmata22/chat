import React from 'react'

const Message = (message)=>{
    console.log(message.value.text)
    return(
        <div>
            <img src={message.value.photoURL} alt='profile Image'></img>
            <p>{message.value.displayName}</p>
            <p>{message.value.text}</p>
        </div>
    )
}
export default Message