import {React, useState} from "react";
import axios from 'axios'


const Login  = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

const handleLogin = (event, username, password) => {
    axios.get('http://localhost:9000/getUser', { params: { username, password}})
        .then((res) => {
            if (res.data) {
                alert('Login Successful')
            }
            else {
                alert('Wrong Credentials')
            }
        })
        .catch((err) => alert('Error in Login'))
}


    return (
        <form>
        <label>User ID: </label>
        <input type = "text"
        value = {username}
        onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br></br>
        <label>Password: </label>
        <input type = "text"
        value = {password}
        onChange={(e) => setPassword(e.target.value)}></input>
        <br></br>
        <button type="button"
        onClick={(event) => handleLogin(event, username, password)}
        >Login</button>
        <br></br>
        <a href="/signup">
        signup
        </a>
        </form>
    );
};

export default Login;