import React from 'react'
import  {auth, providergoogle, providergithub, providerfacebook} from '../firebase/firebase'
import GoogleButton from 'react-google-button'

const SignIn=()=>{
    const signInWithGoogle=()=>{
        auth.signInWithPopup(providergoogle)
    }
    const signInWithGitHub=()=>{
        auth.signInWithPopup(providergithub)
    }
    const signInWithFacebook=()=>{
        auth.signInWithPopup(providerfacebook)
    }
    return(
        <div>
            <GoogleButton onClick={() => { signInWithGoogle() }}
/>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <button onClick={signInWithGitHub}>Sign in with GitHub</button>
            <button onClick={signInWithFacebook}>Sign in with Facebook</button>


        </div>
    )
}
export default SignIn