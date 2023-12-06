import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
import toast from 'react-hot-toast';
//import axios from 'axios';
import api from '../helpers/AxiosConfig';

const Register = () => {

    const router = useNavigate();

    const [userData, setUserData] = useState({name: "", email: "", password: ""});

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const sendDataToBackend = async (event) => {
        event.preventDefault();
        // alert("Data submitted to backend..")
        if (userData.name && userData.email && userData.password) {
          if (userData.password.length >= 8) {
            try {
              const response = await api.post("/auth/register", { userData });
              // const response = { data: { success: true } };
              if (response.data.success) {
                toast.success("Registeration successfull.")
                setUserData({ name: "", email: "", password: "" })
                router("/login")
              } else {
                throw new Error("Something went wrong..")
              }
            } catch (error) {
              toast.error(error?.message)
              console.log(error, "error here")
            }
          } else {
            alert("Password must be 8 digit.")
          }
        } else {
          alert("Please fill the all values..")
        }
      }

  return (
    <>
    <div className='register'>
        <div className='register1'>
            <div className='register2'>
            <h2>Create a Google Account</h2>
            <p>Enter your name</p>
            <form onSubmit={sendDataToBackend }>
            <input className='register3' placeholder='First name' name='name' type='text' onChange={handleChange}/> <br/>
            <input className='register5' placeholder='Email or phone' name='email' type='email' onChange={handleChange}/> <br/>
            <input className='register6' placeholder='Password' name='password' type='password' onChange={handleChange}/> <br/>
            <input className='register10' type='submit' value="Signin"/>
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
