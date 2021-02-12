import React from 'react'
import  {auth, providergoogle, providergithub} from '../firebase/firebase'

const SignIn=()=>{
    const signInWithGoogle=()=>{
        auth.signInWithPopup(providergoogle)
    }
    const signInWithGitHub=()=>{
auth
  .signInWithPopup(providergithub)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode)

    var errorMessage = error.message;
    console.log(errorMessage)

    // The email of the user's account used.
    var email = error.email;
    console.log(email)

    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
    const logout=()=>{
        auth.signOut()
    }
    return(
        <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <button onClick={signInWithGitHub}>Sign in with GitHub</button>
            <button onClick={logout}>logout</button>

        </div>
        
    )
}
export default SignIn