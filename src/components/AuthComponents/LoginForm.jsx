import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../../redux/reducers/actionCreators/authActionCreator';

import './LoginForm.css'


function LoginForm() {

const [email,setEmail]=React.useState("");
const [password,setPassword]=React.useState("");
const [success,setSuccess]=React.useState(false);
const dispatch=useDispatch();
const navigate=useNavigate();


const handleSubmit=(e)=>{
e.preventDefault();
if(!email || !password){
    alert("Please fill all field");
    return;
}
dispatch(signInUser(email,password,setSuccess));

};
React.useEffect(()=>{
if(success){
  navigate("/dashboard");
}
},[success]);
  return (

  

    <form onSubmit={handleSubmit}>
 <div className='form-group my-2 tt'>
 <label>
     VIT-Email-ID
 <input  
 type="email"
 name='email' 
 id="" 
 className='form-control'
   placeholder='Email'
value={email}
 onChange={(e) => setEmail(e.target.value)}

 />
 </label>
 <label>

Password

 <input 
 type="password" 
name='password'
 id="" className='form-control'
placeholder='Password'
value={password} 
onChange={(e) => setPassword(e.target.value)} 
  
  
  />
</label>

</div>
<button className="submit btn btn-primary my-2 form-control">Login</button>
   </form> 
  )
}

export default LoginForm