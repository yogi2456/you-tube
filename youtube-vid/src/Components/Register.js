import React from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'

function Register() {

  const router = useNavigate();
  return (
    <div>
      <div className='register'>
        <div className='register1'>
            <div className='register2'>
            <h2>Create a Google Account</h2>
            <p>Enter your name</p>
            <div className='register3'>
                <input placeholder='First name'/>
            </div>
            <div className='register4'>
                <input placeholder='Last name (Optional)'/>
            </div>
            <div className='register5'>
                <input placeholder='Email or phone'/>
            </div>
            <div className='register6'>
                <input placeholder='Password'/>
            </div>
            <button onClick={ () => router(`/login`)}>Create</button>
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
    </div>
  )
}

export default Register
