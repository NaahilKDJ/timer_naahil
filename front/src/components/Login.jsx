import React from 'react';

const Login = () => {
    return (
        <div>
            <div>
                <label htmlFor="mail"> E-mail</label>
                <input type="text" name='mail'/>
            </div>
            
            <div>
                <label htmlFor="password"> Password </label>
                <input type="password" name='password'/>
            </div>

            <button id='btnLogin'> LogIn </button>
        </div>
    );
}

export default Login;
