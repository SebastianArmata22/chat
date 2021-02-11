import React, { useState } from 'react'
import {auth} from '../firebase/firebase'
import firebase from '../firebase/firebase'
import '../style/componentStyle.scss'
import send from '../icons/send.svg'

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
        <div className={isDarkMode ? 'form-container dark': 'form-container light'}>
        <form onSubmit={sendMessage}>
            <input className={isDarkMode ? 'dark-input': 'light-input'} value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Your message..." />
            <div>
                <img src={send} alt='send' height='20px'></img>
            </div>
        </form>
        </div>
    )
}
export default MessageForm