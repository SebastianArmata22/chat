import React from 'react'
import '../style/componentStyle.scss'
import  {auth, providergoogle, providergithub, providerfacebook} from '../firebase/firebase'
import google from '../icons/google.png'
import fb from '../icons/fb.png'
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
            <button className='login-btn google-btn' onClick={signInWithGoogle}><img src={google} alt='g'></img><p>Sign in with Google</p></button>
            <button className='login-btn github-btn' onClick={signInWithGitHub}><img src={google} alt='g'></img><p>Sign in with GitHub</p></button>
            <button className='login-btn facebook-btn' onClick={signInWithFacebook}><img src={fb} alt='g'></img><p>Sign in with Facebook</p></button>


        </div>
    )
}
export default SignIn