import axios from 'axios'
import React, {useState} from 'react';



const Signup  = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSignup = (firstName, lastName, username, password) => {
        axios.post('http://localhost:9000/createUser', { firstName, lastName, username, password})
        .catch((err) => alert('Error in Signing Up'))
    
    
    }
    
    return (
        <form>
        <label>First Name: </label>
        <input type = "text"
        value = {firstName}
        onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <br></br>
        <label>Last Name: </label>
        <input type = "text"
        value = {lastName}
        onChange={(e) => setLastName(e.target.value)}
        ></input>
        <br></br>
        <label>User ID: </label>
        <input type = "text"
        value = {username}
        onChange={(e) => setUsername(e.target.value)}></input>
        <br></br>
        <label>Password: </label>
        <input type = "text"
        value = {password}
        onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <button type="button" 
        onClick={() => handleSignup(firstName, lastName, username, password)}>
        Sign Up
        </button>
        <br></br>
        <a href="/login">
        login
        </a>
        </form>
    );
};

export default Signup;