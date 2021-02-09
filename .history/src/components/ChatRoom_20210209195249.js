import React, { useState } from 'react'
import { firestore } from "../firebase/firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
const Chat=()=>{
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt', 'asc').limitToLast(25);
    const [messages] = useCollectionData (query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');
    return(
        <div>{messages.map(message=><Message key={message.id} value={message}/>)}</div>
    )
}
export default Chat