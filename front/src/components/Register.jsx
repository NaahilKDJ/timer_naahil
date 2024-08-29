import React from 'react';

const Register = () => {
    return (
        <div>
            <input type="text" name="mail" id="mail"/>

            <input type="password" name="pwd" id="pwd"/>
            <input type="password" name="confirmPWD" id="confirmPWD" />

            <button id='register'> S'enregistrer </button>
        </div>
    );
}

export default Register;
