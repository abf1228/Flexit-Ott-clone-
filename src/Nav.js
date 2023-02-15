import React, { useState, useEffect} from 'react'
import "./Nav.css";

function Nav() {
  
    const [show, handelShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handelShow(true);
        } else{
            handelShow(false)
        }
    }

 useEffect(() =>{
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);

 }, [] );


  return (
    <div className={`nav ${ show && "nav_black"}`}> 
    <div className='nav_contents'>       
    <img
     className='nav_logo'
    src='https://play-lh.googleusercontent.com/Bt64EmN7DDGOfz2yfMTepiXdP8k3dsmveyS8usNd9mj4Bb4hhKpbDvCPaWdkwHh2eFBy'
    alt=''
    />
    <img
     className='nav_avatar'
    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
    alt=''
    />
    </div>
    </div>


  
    
   
  )
}

export default Nav;