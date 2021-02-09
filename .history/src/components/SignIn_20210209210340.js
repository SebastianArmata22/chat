import React from 'react'
import  {auth, providergoogle} from '../firebase/firebase'

const SignIn=()=>{
    const signInWithGoogle=()=>{
        auth.signInWithPopup(providergoogle)
    }
    return(
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}
export default SignIn