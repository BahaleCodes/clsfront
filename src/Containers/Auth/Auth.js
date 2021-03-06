import React, { useState, useEffect}from 'react';
import { API } from '../../apiServices'; 
import { useCookies } from 'react-cookie';
import './Auth.css';

function Auth() {
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [isLoginView, setIsLoginView] = useState(true);

    const [token, setToken] = useCookies(['theToken']);

    useEffect( () => {
        console.log(token);
        if (token['theToken']) window.location.href = '/home'
    },[token])

    const loginClicked = () => {
        API.loginUser({username, password})
          .then( resp => setToken('theToken', resp.token))
          .catch( error => console.log(error))
      }
      const registerClicked = () => {
        API.registerUser({username, password})
        .then( () => loginClicked())
        .catch( error => console.log(error))
      }
      const isDisabled = username.length === 0 || password.length === 0;
    
      return (
        <div className="Auth">
          <header>
            {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
          </header>
          <div className="login-container">
            <label htmlFor="username">Username</label><br/>
            <input id="username" type="text" placeholder="Username" value={username}
                  onChange={ evt=> setUsername(evt.target.value)}
            /><br/>
            <label htmlFor="password">Password</label><br/>
            <input id="password" type="password" placeholder="Password" value={password}
                onChange={ evt=> setPassword(evt.target.value)} /><br/>
                { isLoginView ?
                  <button onClick={loginClicked} disabled={isDisabled}>Login</button> : 
                  <button onClick={registerClicked} disabled={isDisabled}>Register</button>
                }
            
            { isLoginView ?
              <p onClick={()=> setIsLoginView(false)}>You don't have an account? Register here!</p> : 
              <p onClick={()=> setIsLoginView(true)}>You already have an account? Login here</p>
            }
          </div>
        </div>
      )
    }

export default Auth;