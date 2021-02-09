import React from 'react'
import  {auth, provider} from '../firebase/firebase'

const SignIn=()=>{
    const signInWithGoogle=()=>{
        auth.signInWithPopup(provider)
    }
    return(
        <div><button onClick={signInWithGoogle}>Sign in with Google</button></div>
    )
}
export default SignIn