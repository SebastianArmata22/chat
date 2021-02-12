import React from 'react'
import '../style/componentStyle.scss'
import  {auth, providergoogle, providergithub, providerfacebook} from '../firebase/firebase'
import google from '../icons/google.png'
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
        <div className='login-btn-container'>
            <button className='login-btn google-btn' onClick={signInWithGoogle}><img src={google} alt='g'></img>Sign in with Google</button>
            <button className='login-btn github-btn' onClick={signInWithGitHub}>Sign in with GitHub</button>
            <button className='login-btn facebook-btn' onClick={signInWithFacebook}>Sign in with Facebook</button>


        </div>
    )
}
export default SignIn