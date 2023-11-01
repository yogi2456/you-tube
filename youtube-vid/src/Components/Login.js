import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {

  const router = useNavigate();
  return (
    <div>
      <div className='login'>
        <div className='login1'>
            <div className='login2'>
            <h2>Sign in</h2>
            <p>to continue to yotube</p>
            <div className='login3'>
                <input placeholder='Email or phone'/>
            </div>
            <p className='login4'>Forget email?</p>
            <div className='login5'>
                <input placeholder='Password'/>
            </div>
            <p className='login4'>Forget Password?</p>
            <div className='login6'>
                <p>Not your computer? Use Guest mode to sign in privately.</p>
                <p>Learn more</p>
            </div>
            <div className='login7'>
                <p onClick={ () => router(`/register`)}>Create account</p>
                <button onClick={() => router(`/`)}>Next</button>
            </div>
            </div>
        </div>

        <div className='login8'>
            <div className='login9'>
                <p>English (United States)</p>
                <p><i class="fa-solid fa-caret-down"></i></p>
            </div>
            <div className='login10'>
                <p>Help</p>
                <p>Privacy</p>
                <p>Terms</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
