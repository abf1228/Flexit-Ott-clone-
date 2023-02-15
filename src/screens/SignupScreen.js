import React,{useRef} from 'react';
import { auth } from '../firebase';
import "./SignupScreen.css";

function Signupscreen() {
    const EmailRef = useRef(null);
    const PasswordRef = useRef(null);

const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
        EmailRef.current.value,
        PasswordRef.current.value
    ).then((authUser) => {
        console.log(authUser);
    } )
    .catch((error) => {
        alert(error.message);
    

    });
};

const signIn = (e) => {
    e.preventDefault();
}



  return (
    <div className='signup_screen'>
        <form>
            <h1> Sign In </h1>
            <input ref={EmailRef} placeholder='Email' type='email' />
            <input  ref={PasswordRef} placeholder='password' type='password' />
            <button type='submit'onClick={signIn} >Sign In</button>
            <h4>
                <span className='signupscreen_sapn'>New to Flexit?</span><span className='signupscreen_link' onClick={'register'}> Sign up now.</span>  </h4>
        </form>
        
        </div>
  )
}

export default Signupscreen