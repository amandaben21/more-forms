import '../App.css'; // we're importing the App.css file from the parent directory using the relative path '../App.css'
import React, { useState } from 'react';

const Form = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm_Password] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();

        const newUser = { username, email, password, confirm_password};
        console.log("Welcome", newUser);
    	setUsername("");
    	setEmail("");
    	setPassword("");
        setConfirm_Password("");
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>Username: </label> 
                    <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) } />

                    {/* our error message */}
                    {username.length <2 ? <p className='Error'>Username must be at least 2 characters</p> : null}

                </div>
                
                {/* Here the messages will appear right when you render the page, and will disappear in real time when you meet the minmum.
                    So if you put 1 character, the error message for username will still show until you put 2 characters */}
                
                <div>
                    <label>Email Address: </label> 
                    <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                    {email.length <5 ? <p className='Error'>Email must be at least 5 characters</p> : null}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                    {password.length <8 ? <p className='Error'>Password must be at least 8 characters</p> : null}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirm_password} onChange={ (e) => setConfirm_Password(e.target.value) } />
                    {/* if confirm_password is not equal to password, then it will say Passwords must match. But if they equal each other do nothing */}
                    {confirm_password !== password ? <p className='Error'>Passwords must match</p> : null} 
                </div>
                <input type="submit" value="Create User" />
            </form>

            {/* Displaying our ( state ) live typying */}
            <h1>Display</h1>
            <h3>Username: {username}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: {password}</h3>
            <h3>Confirm Password: {confirm_password}</h3>
        </div>
    );
        
};
    
export default Form;