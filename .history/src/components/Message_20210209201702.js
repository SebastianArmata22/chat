import React from 'react'

const Message = (message)=>{
    console.log(message)
    return(
        <div>
            <img src={message.value.photoURL} alt='prfile Image'></img>
            <p>{message.value.text}</p>
        </div>
    )
}
export default Message