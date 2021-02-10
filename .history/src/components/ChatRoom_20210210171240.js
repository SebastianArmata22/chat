import React from 'react'
import {database} from "../firebase/firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message'
import MessageForm from './MessageForm'
import User from './User';

const ChatRoom=()=>{
    const messagesCollection = database.collection('messages');
    const queryToBase = messagesCollection.orderBy('createdAt').limitToLast(25);
    const [messages] = useCollectionData (queryToBase, {idField: 'id'});
    return(
        <div className='chat-room-container'>
            <div>
                <User/>
            </div>
            <div>
                {messages && messages.map(message=><Message key={message.id} value={message}/>)}
            </div>
            <div>
                <MessageForm messagesCollection={messagesCollection}/>
            </div>

        </div>
    )
}
export default ChatRoom