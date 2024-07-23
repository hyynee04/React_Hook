import { useState } from 'react';
import './Login.scss';
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';
import { toast } from 'react-toastify';

const Login = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleLogin = async() => {
        //validate


        //submit api
        let data = await postLogin(email, password)
        if(data && +data.EC === 0) {
            toast.success(data.EM)
            navigate('/')
        } else {
            toast.error(data.EM)
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have an account yet?</span>
                <button className='btn btn-signup'>Sign up</button>
            </div>
            <div className='title col-3 mx-auto'>
                ReactJS
                <hr className='underline-title'/>
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
                <div className='back'>
                     <span onClick={() => {navigate('/')}}>&#60;&#60; Go back</span>
                </div>
            </div>
        </div>
    )
}

export default Login;