import React from 'react'
import './Register.css'

function Register() {
  return (
    <div>
      <div className='register'>
        <div className='register1'>
            <div className='register2'>
            <h2>Create a Google Account</h2>
            <p>Enter your name</p>
            <div className='register3'>
                <p>First name</p>
            </div>
            <div className='register4'>
                <p>Last name (Optional)</p>
            </div>
            <div className='register5'>
                <p>Email or phone</p>
            </div>
            <div className='register6'>
                <p>Password</p>
            </div>
            <button>Next</button>
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
