import React from 'react'
import  {auth, providergoogle, providergithub} from '../firebase/firebase'

const SignIn=()=>{
    const signInWithGoogle=()=>{
        auth.signInWithPopup(providergoogle)
    }
    const signInWithGitHub=()=>{
        auth.signInWithPopup(providergithub)
        console.log(auth)
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