import React from 'react'

const Message = ({message})=>{
    console.log(message.value.text)
    return(
        <div>
            <img src={message.photoURL} alt='profile Image'></img>
            <p>{message.displayName}</p>
            <p>{message.text}</p>
        </div>
    )
}
export default Message