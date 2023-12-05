import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import toast from 'react-hot-toast';
// import axios from 'axios';

const Login = () => {

    const router = useNavigate();

    const [userData, setUserData] = useState({email: "", password: ""});

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleForm = async (event) => {
        event.preventDefault();
        if(userData.email && userData.password) {
           if(userData.password.length >= 8) {
            try {
                // const response = await axios.post("http://localhost:8000/api/v2/auth/register", { userData });
                // if(response.data.success) {
                //     toast.success("Account created successfully")
                //     setUserData({ email: "", password: ""})
                //     router('/login')
                
                const response = { data: {success: true}};
                if(response.data.success) {
                    alert("login success")
                    setUserData({ email: '', password: ''});
                    router('/')
                }
                // } else {
                //     throw new Error("Something went wrong...")
                //   }
            } catch (error) {
                toast.error(error?.message)
                console.log(error, "error here")
            }
           } else {
            toast.error("password should be 8 digits")
           }
        } else {
            toast.error("please fill all the values")
        }
    }

  return (
    <>
    <div className='login'>
        <div className='login1'>
            <div className='login2'>
            <h2>Sign in</h2>
            <p>to continue to YouTube</p>

            <form onSubmit={handleForm}>
            <input className='login5' placeholder='Email or phone' name='email' type='email' onChange={handleChange}/> <br/>
            <input className='login6' placeholder='Password' name='password' type='password' onChange={handleChange}/> <br/>
            <button className='login3' onClick={() => router('/register')}>Create account</button>
            <button className='login10' type='submit'>Login</button>
            </form>
            </div>
        </div>

        <div className='login7'>
            <div className='login8'>
                <p>English (United States)</p>
                <p><i class="fa-solid fa-caret-down"></i></p>
            </div>
            <div className='login9'>
                <p>Help</p>
                <p>Privacy</p>
                <p>Terms</p>
            </div>
        </div>
    </div>    
    </>
  )
}

export default Login
