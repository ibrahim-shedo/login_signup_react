import Reac, { useState } from 'react';
import './LoginSingUP.css'
import user_icon from '../assets/Assets/person.png'
import email_icon from  '../assets/Assets/email.png'
import password_icon from '../assets/Assets/password.png'


const LoginSingup = () => {

    const[action,setAction] = useState("login");
    return(
     <div className='container'>
        <div className="header">
           <div className="text">{action}</div>
           <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' />
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email"  placeholder='Email'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>

        {action==="sing up"?<div></div>: <div className="forgot_password">Lost Password?<span>Click here!</span></div>}
       
        <div className="submit_container">
            <div className={action==="login"?"submit gray":"submit"} onClick={()=>{setAction("sing up")}}>sing up</div>
            <div className={action==="sing up"?"submit gray":"submit"} onClick={()=>{setAction("login")}}>login</div>
        </div>
     </div>

    )
}
export default LoginSingup