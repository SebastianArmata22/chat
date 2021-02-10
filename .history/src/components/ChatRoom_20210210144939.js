import React from 'react'
import {auth, database} from "../firebase/firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message'
import SignOut from './SignOut'
import MessageForm from './MessageForm'

const ChatRoom=()=>{
    const messagesCollection = database.collection('messages');
    const queryToBase = messagesCollection.orderBy('createdAt').limitToLast(25);
    const [messages] = useCollectionData (queryToBase, {idField: 'id'});
    return(
        <div>
            <div>
                <p>Hello {auth.currentUser.displayName}</p>
                <SignOut/>
            </div>
            <div>
                {messages && messages.map(message=><Message key={message.id} message={message}/>)}
            </div>
            <div>
                <MessageForm messagesCollection={messagesCollection}/>
            </div>

        </div>
    )
}
export default ChatRoom