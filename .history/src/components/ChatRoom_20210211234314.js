import React, { createRef, useContext, useEffect, useRef } from 'react'
import {database} from "../firebase/firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message'
import MessageForm from './MessageForm'
import User from './User';
import '../style/componentStyle.scss'
import { ThemeContext } from '../context/ThemeContext'
const useScroll = () => {
    const elRef = useRef(null);
    const executeScroll = () => elRef.current.scrollIntoView();
  
    return [executeScroll, elRef];
  }

const ChatRoom=()=>{
    const messagesCollection = database.collection('messages');
    const queryToBase = messagesCollection.orderBy('createdAt').limitToLast(25);
    const [messages] = useCollectionData (queryToBase, {idField: 'id'});
    const {isDarkMode}=useContext(ThemeContext)
    const [executeScroll, elRef] = useScroll()
    useEffect(executeScroll, []) 
    return(
        <div className='chat-room-container'>
            <div className={isDarkMode? 'user-container dark': 'user-container light'}>
                <User/>
            </div>
            <div className={isDarkMode? 'messages-container dark': 'messages-container light'}>
                {messages && messages.map(message=><Message key={message.id} value={message} isDarkMode={isDarkMode}/>)}
                <span ref={elRef}></span>
            </div>
            <MessageForm messagesCollection={messagesCollection} isDarkMode={isDarkMode}/>


        </div>
    )
}
export default ChatRoom