import React from 'react'
import '../style/componentStyle.scss'
import  {auth, providergoogle, providergithub, providerfacebook} from '../firebase/firebase'
import google from '../icons/google.png'
import fb from '../icons/fb.png'
import github from '../icons/github.png'
import conversation from '../icons/conversation.svg'
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
        <div className='login-container'>
            <div className='conversation-img'>
                <h1>Chat room</h1>
                <img src={conversation} alt='ff'></img>

            </div>
            <div className='login-btn-container'>
                <h1>Hello, log in to use chat </h1>
                <button className='login-btn google-btn' onClick={signInWithGoogle}><img src={google} alt='g'></img><p>Sign in with Google</p></button>
                <button className='login-btn github-btn' onClick={signInWithGitHub}><img src={github} alt='g'></img><p>Sign in with GitHub</p></button>
                <button className='login-btn facebook-btn' onClick={signInWithFacebook}><img src={fb} alt='g'></img><p>Sign in with Facebook</p></button>

            </div>
        </div>
    )
}
export default SignIn