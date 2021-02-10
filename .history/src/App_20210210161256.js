import './App.css';
import {auth} from './firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from "./components/ChatRoom";
import SignIn from './components/SignIn'
import ThemeContextProvider from './context/ThemeContext';
import { useContext } from 'react';
import {ThemeContext} from './context/ThemeContext'

function App() {
  const [userIsLogged]=useAuthState(auth)
  const themeContext= useContext(ThemeContext)
  console.log(themeContext)
  const {theme, toogleTheme} = themeContext
  return (
    <ThemeContextProvider>
      <div className="App">
        <div>
          <p>Chat Room</p>
          <button onClick={toogleTheme}>{theme}</button>
        </div>
        <div>
          {userIsLogged ? <ChatRoom/> : <SignIn/>}
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
