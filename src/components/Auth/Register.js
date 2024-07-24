import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postRegister } from '../../services/apiService';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import _ from 'lodash'
import './Login.scss';

const Register = (props) => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [isShowed, setIsShowed] = useState(false)
    const [isShowedConfirm, setIsShowedConfirm] = useState(false)

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }

    const handleRegister = async () => {
        //validate  
        const isValidEmail = validateEmail(email)

        if(_.isEmpty(username)) {
            toast.error("Invalid username!")
            return
        }

        if(!isValidEmail) {
            toast.error("Invalid email!")
            return
        }
        if(_.isEmpty(confirmPassword) || confirmPassword !== password) {
            toast.error("Invalid confirmPassword!")
            return
        }

        //submit api
        let data = await postRegister(email, username, password)
        console.log(">>> Check register: ", data)
        if (data && +data.EC === 0) {
            toast.success(data.EM)
            navigate('/login')
        } else {
            toast.error(data.EM)
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span>Already have an account?</span>
                <button
                    className='btn btn-signup'
                    onClick={() => { navigate('/login') }}
                >Sign in</button>
            </div>

            <div className='title col-3 mx-auto'>
                ReactJS
                <hr className='underline-title' />
            </div>
            <div className='welcome col-3 mx-auto'>
                Ready to start your journey?
            </div>
            <div className='content-form col-3 mx-auto'>
                <div className='form-group'>
                    <div className='form-group'>
                        <label>Username (*)</label>
                        <input
                            type='text'
                            className='form-control'
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <label>Email (*)</label>
                    <input
                        type='email'
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password (*)</label>
                    <input
                        type={isShowed ? "text" : "password"}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {isShowed ?
                        <FaEyeSlash 
                            onClick={() => setIsShowed(!isShowed)}
                        />
                        :
                        <FaEye 
                            onClick={() => setIsShowed(!isShowed)}
                        />
                    }
                </div>
                <div className='form-group'>
                    <label>Confirm password (*) </label>
                    <input
                        type={isShowedConfirm ? "text" : "password"}
                        className='form-control'
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                    {isShowedConfirm ?
                        <FaEyeSlash 
                            onClick={() => setIsShowedConfirm(!isShowedConfirm)}
                        />
                        :
                        <FaEye 
                            onClick={() => setIsShowedConfirm(!isShowedConfirm)}
                        />
                    }
                </div>
                <div className='btn-container'>
                    <button
                        className='btn submit'
                        onClick={() => handleRegister()}
                    >Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Register;