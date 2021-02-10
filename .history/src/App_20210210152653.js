import './App.css';
import {auth} from './firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from "./components/ChatRoom";
import SignIn from './components/SignIn'

function App() {
  const [userIsLogged]=useAuthState(auth)
  return (
    <div className="App">
      <div>
        <p>Chat Room</p>
        <button></button>
      </div>
      <div>
        {userIsLogged ? <ChatRoom/> : <SignIn/>}
      </div>
    </div>
  );
}

export default App;
