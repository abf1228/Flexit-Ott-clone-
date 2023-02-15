import React, { useState } from "react"
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen"


function LoginScreen() {

   const [signIn , setSignIn] = useState(false);
  return (
   <div className="Loginscreen">
    <div className="loginscreen_background">
         <img className="loginscreen_logo"
             src="https://play-lh.googleusercontent.com/Bt64EmN7DDGOfz2yfMTepiXdP8k3dsmveyS8usNd9mj4Bb4hhKpbDvCPaWdkwHh2eFBy" alt="" >
          </img>
         
          <button onClick={() => setSignIn(true)}
             className="loginscreen_button" >Sign In</button>

         <div className="loginscreen_gradiant" />
         </div>
         <div className="loginscreen_body">
            {signIn ? (<SignupScreen/>
            ) : ( 
                  <>
            
                     <h1> Unlimited films, Tv programmes and more.</h1>  
                     <h2> Watch anywhere. Cancel at any time.</h2>
                     <h3> Ready to watch? Enter your email to create or restart your membership.</h3>
                     <div className="loginscreen_input">
                   <form>
                      <input type="email" placeholder="Email Address" />
                      <button 
                      onClick={() => setSignIn(true)}
                      className="loginscreen_getStarted"> GET STARTED
                      </button>
                  </form>
           </div>
              </>)
            }
           
         </div>
</div>
    
  )   
  
}

export default LoginScreen