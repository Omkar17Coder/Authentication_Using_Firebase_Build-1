import React from 'react'
import RegisterForm from '../../../components/AuthComponents/RegisterForm'
import { Link } from 'react-router-dom'
function Register() {
  return (
<div className="container-fluid">
    <h1 className='display-1 my-5 text-center'>Register</h1>
        
             <div className="row">
        <div className="col-md-6 mx-auto mt-5">
            <RegisterForm/>

        <Link to="/login" className="text-end">
            Already  a member? Login Here
        </Link>
        </div>
        
        </div>   


        </div>
  )
}

export default Register