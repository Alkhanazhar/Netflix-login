import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div id='form-container'>
    <div className='form'>
      <form className='container-fluid'>

        <div><h2><span className='bi bi-person-fill'></span>User Log In</h2></div>
      <div className='mb-2'>
        <label className='form-label'>Name</label>
        <div className='width'>
        <input type="text" className='form-control'/>
        </div>
        </div>
        <div className='mb-2 pb-2'>
        <label className='form-label'>password</label>
        <div className='width'>
        <input type="password" className='form-control'/>
        </div>
        </div>  
        <div className='mb-2 pb-2' >
        <input type="submit" className='btn btn-primary w-100'/>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login
