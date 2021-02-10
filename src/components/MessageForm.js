import React, { useState } from 'react'
import {auth} from '../firebase/firebase'
import firebase from '../firebase/firebase'

const MessageForm=({messagesCollection})=>{
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
        <form onSubmit={sendMessage}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Your message..." />
            <button type="submit" disabled={!formValue}>Send</button>
        </form>
    )
}
export default MessageForm