import './App.css';
import {auth} from './firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from "./components/ChatRoom";
import SignIn from './components/SignIn'
import ThemeContextProvider from './context/ThemeContext';
import toogleTheme from './components/ToggleTheme';

function App() {
  const [userIsLogged]=useAuthState(auth)
  return (
    <ThemeContextProvider>
      <div className="App">
        <div>
          <p>Chat Room</p>
          <toogleTheme/>
        </div>
        <div>
          {userIsLogged ? <ChatRoom/> : <SignIn/>}
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
