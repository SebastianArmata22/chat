import React, { useState } from 'react'
import {auth} from '../firebase/firebase'
import firebase from '../firebase/firebase'
import '../style/componentStyle.scss'

const MessageForm=({messagesCollection, isDarkMode})=>{
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
        <div className='form-container'>
        <form onSubmit={sendMessage}>
            <input className={isDarkMode ? 'dark': 'light'} value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Your message..." />
            <button className={isDarkMode ? 'dark': 'light'} type="submit" disabled={!formValue}>Send</button>
        </form>
        </div>
    )
}
export default MessageForm