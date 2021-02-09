import React from 'react'
import { firestore } from "../firebase/firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
const Chat=()=>{
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt', 'asc').limitToLast(25);
    const [messages] = useCollectionData (query, {idField: 'id'});
    return(
        <div>chat</div>
    )
}
export default Chat