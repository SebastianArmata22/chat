import './App.css';
import {auth} from './firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from "./components/ChatRoom";
import SignIn from './components/SignIn'

function App() {
  const [user]=useAuthState(auth)
  return (
    <div className="App">
      {user ? <ChatRoom/> : <SignIn/>}
    </div>
  );
}

export default App;
