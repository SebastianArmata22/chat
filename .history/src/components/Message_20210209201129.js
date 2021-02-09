import React from 'react'

const Message = (message)=>{
    console.log(message.text)
    return(
        <div>{message.text}</div>
    )
}
export default Message