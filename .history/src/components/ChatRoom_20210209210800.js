import React, { useState } from 'react'
import { database, auth } from "../firebase/firebase";
import firebase from '../firebase/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message'
import SignOut from './SignOut'
const Chat=()=>{
    const messagesCollection = database.collection('messages');
    const query = messagesCollection.orderBy('createdAt').limitToLast(25);
    const [messages] = useCollectionData (query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');

    const sendMessage=async (e)=>{
        e.preventDefault()
        const { uid, photoURL, displayName } = auth.currentUser

        await messagesCollection.add({
          text: formValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          photoURL,
          displayName
        })
        setFormValue('')

    }
    return(
        <div>
            <SignOut/>
            <div>{messages && messages.map(message=><Message key={message.id} value={message}/>)}</div>
            <div>
                <form onSubmit={sendMessage}>
                    <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
                    <button type="submit" disabled={!formValue}>Send</button>
                </form>
            </div>

        </div>
    )
}
export default Chat