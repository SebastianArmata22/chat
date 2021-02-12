import React from 'react'
import  {auth, providergoogle, providergithub} from '../firebase/firebase'

const SignIn=()=>{
    const signInWithGoogle=()=>{
        auth.signInWithPopup(providergoogle)
    }
    const signInWithGitHub=()=>{
        auth.signInWithPopup(providergithub)
    }
    return(
        <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <button onClick={signInWithGitHub}>Sign in with GitHub</button>
        </div>
        
    )
}
export default SignIn