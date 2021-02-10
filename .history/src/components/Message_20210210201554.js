import React from 'react'

const Message = (message)=>{
    console.log(message)
    return(
        <div className='messages-item'>
            <img src={message.value.photoURL} alt='profile Image'></img>
            <p>{message.value.text}</p>
        </div>
    )
}
export default Message