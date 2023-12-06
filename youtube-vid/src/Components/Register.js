import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
import toast from 'react-hot-toast';
import axios from 'axios';

const Register = () => {

    const router = useNavigate();

    const [userData, setUserData] = useState({name: "", email: "", password: ""});

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleForm = async (event) => {
        event.preventDefault();
        if(userData.name && userData.email && userData.password) {
           if(userData.password.length >= 8) {
            try {
                const response = await axios.post("http://localhost:8000/api/v2/auth/register", { userData });
                if(response.data.success) {
                    toast.success("Account created successfully")
                    setUserData({name: "", email: "", password: ""})
                    router('/login')
                } else {
                    throw new Error("Something went wrong...")
                  }
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
    <div className='register'>
        <div className='register1'>
            <div className='register2'>
            <h2>Create a Google Account</h2>
            <p>Enter your name</p>
            <form onSubmit={handleForm}>
            <input className='register3' placeholder='First name' name='name' type='text' onChange={handleChange}/> <br/>
            <input className='register5' placeholder='Email or phone' name='email' type='email' onChange={handleChange}/> <br/>
            <input className='register6' placeholder='Password' name='password' type='password' onChange={handleChange}/> <br/>
            <button className='register10' type='submit'>Sign in</button>
            </form>
            </div>
        </div>

        <div className='register7'>
            <div className='register8'>
                <p>English (United States)</p>
                <p><i class="fa-solid fa-caret-down"></i></p>
            </div>
            <div className='register9'>
                <p>Help</p>
                <p>Privacy</p>
                <p>Terms</p>
            </div>
        </div>
    </div>    
    </>
  )
}

export default Register
