import React, { useState } from 'react'
import { database, auth } from "../firebase/firebase";
import firebase from '../firebase/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message'
import SignOut from './SignOut'
import MessageForm from './MessageForm'

const Chat=()=>{
    const messagesCollection = database.collection('messages');
    const queryToBase = messagesCollection.orderBy('createdAt').limitToLast(25);
    const [messages] = useCollectionData (queryToBase, {idField: 'id'});
    return(
        <div>
            <SignOut/>
            <div>{messages && messages.map(message=><Message key={message.id} value={message}/>)}</div>
            <div>
                <MessageForm messagesCollection={messagesCollection}/>
            </div>

        </div>
    )
}
export default Chat