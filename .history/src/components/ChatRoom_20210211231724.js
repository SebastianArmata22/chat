import React, { useContext, useEffect } from 'react'
import {database} from "../firebase/firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message'
import MessageForm from './MessageForm'
import User from './User';
import '../style/componentStyle.scss'
import { ThemeContext } from '../context/ThemeContext'

const ChatRoom=()=>{
    const messagesCollection = database.collection('messages');
    const queryToBase = messagesCollection.orderBy('createdAt').limitToLast(25);
    const [messages] = useCollectionData (queryToBase, {idField: 'id'});
    const {isDarkMode}=useContext(ThemeContext)
    const myRef = React.createRef();
    useEffect(()=>{
        const chatArea=myRef.current
        chatArea.scrollBy(0, chatArea.scrollHeight)
    }
        
    )
    return(
        <div className='chat-room-container'>
            <div className={isDarkMode? 'user-container dark': 'user-container light'}>
                <User/>
            </div>
            <div className={isDarkMode? 'messages-container dark': 'messages-container light'}>
                {messages && messages.map(message=><Message key={message.id} value={message} isDarkMode={isDarkMode}/>)}
            </div>
            <MessageForm messagesCollection={messagesCollection} isDarkMode={isDarkMode}/>


        </div>
    )
}
export default ChatRoom