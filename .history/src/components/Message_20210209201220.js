import React from 'react'

const Message = (message)=>{
    console.log(message)
    return(
        <div>{message.value.text}</div>
    )
}
export default Message