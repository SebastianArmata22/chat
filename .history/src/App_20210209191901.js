import './App.css';
import {auth} from './firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user]=useAuthState(auth)
  return (
    <div className="App">

    </div>
  );
}

export default App;
