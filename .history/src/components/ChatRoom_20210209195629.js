import React, { useState } from 'react'
import { firestore } from "../firebase/firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message'
const Chat=()=>{
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt', 'asc').limitToLast(25);
    const [messages] = useCollectionData (query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');
    return(
        <div>
            <div>{messages && messages.map(message=><Message key={message.id} value={message}/>)}</div>
            <div>
                <form onSubmit={sendMessage}>
                    <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
                    <button type="submit" disabled={!formValue}>🕊️</button>
                </form>
            </div>

        </div>
    )
}
export default Chat