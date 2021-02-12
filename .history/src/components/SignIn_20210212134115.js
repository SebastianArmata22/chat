import React from 'react'
import '../style/componentStyle.scss'
import  {auth, providergoogle, providergithub, providerfacebook} from '../firebase/firebase'
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
            <button className='login-btn' onClick={signInWithGoogle}>Sign in with Google</button>
            <button onClick={signInWithGitHub}>Sign in with GitHub</button>
            <button onClick={signInWithFacebook}>Sign in with Facebook</button>


        </div>
    )
}
export default SignIn