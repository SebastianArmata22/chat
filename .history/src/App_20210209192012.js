import './App.css';
import {auth} from './firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user]=useAuthState(auth)
  return (
    <div className="App">
      {user ? <Chat/> : <SignIn/>}

    </div>
  );
}

export default App;
