import { useState } from 'react';
import './login.css'

function Login(){
    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const logar = ()=>{
        console.log(user)
        console.log(password)
    }
    return(
        <div className='container'>
            <div className='logo'>
                  <h1>New Word</h1><img src="/rex.png" alt="hashtag" />
            </div>
            <div className='container-login'>
                <div className='user-log'>
                <input type="text" id='input-user' placeholder='User' onChange={(event)=>setUser(event.target.value)} /><img src="/person.png" alt="" />
                </div>
                <div className='password-log'> 
                <input type="password" id='input-password' placeholder='Password'onChange={(event)=> setPassword(event.target.value)} /><img src="/senha.png" alt="" />
                </div>
                <div className='button-log'>
                <input type="button" id='input-button' value="Login" onClick={logar} />
                </div>
            </div>
        </div>

    );
}

export default Login