import React, { useState } from 'react'
import {auth} from '../firebase/firebase'
import firebase from '../firebase/firebase'
import '../style/componentStyle.scss'
import airplane from '../icons/airplane.svg'

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
        <div className='form-container'>
        <form onSubmit={sendMessage}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Your message..." />
            <button type="submit" disabled={!formValue}>
                <img src={airplane} alt='send' ></img>
            </button>
        </form>
        </div>
    )
}
export default MessageForm