import { useState } from 'react';
import './Login.scss';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        alert("Alert me!")
    }

    return (
        <div className="login-container">
            <div className='header'>
                Don't have an account yet?
            </div>
            <div className='title col-3 mx-auto'>
                ReactJS
            </div>
            <div className='welcome col-3 mx-auto'>
                Hello, Who's this?
            </div>
            <div className='content-form col-3 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input 
                        type='email' 
                        className='form-control' 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input 
                        type='password' 
                        className='form-control' 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span>Forgot your password?</span>
                <div className='btn-container'>
                    <button 
                        className='btn submit'
                        onClick={() => handleLogin()}
                    >Log in</button>
                </div>

            </div>
        </div>
    )
}

export default Login;