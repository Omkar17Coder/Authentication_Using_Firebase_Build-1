import React from 'react'

import { Link } from 'react-router-dom'
import LoginForm from '../../../components/AuthComponents/LoginForm'


function LoginPage() {
  return (
    <div className="container-fluid">
    <h1 className='display-1 my-5 text-center'>Login</h1>
     <div className="row">
        <div className="col-md-6 mx-auto mt-5">
            <LoginForm/>

        <Link to="/register" className="text-end">
            Not a member? Register Here
        </Link>
        </div>
        
        </div>   


        </div>
  )
}

export default LoginPage