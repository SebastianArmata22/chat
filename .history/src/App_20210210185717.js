import './style/componentStyle.scss';
import {auth} from './firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from "./components/ChatRoom";
import SignIn from './components/SignIn'
import ThemeContextProvider from './context/ThemeContext';
import ToogleTheme from './components/ToggleTheme';

function App() {
  const [userIsLogged]=useAuthState(auth)
  return (
    <ThemeContextProvider>
      <div className="app">
          <main>
            <div>
              {userIsLogged ? <ChatRoom/> : <SignIn/>}
            </div>
          </main>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
