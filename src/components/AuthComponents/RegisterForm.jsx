import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../../redux/reducers/actionCreators/authActionCreator';
function RegisterForm() {
    const [email,setEmail]=React.useState("");
const [password,setPassword]=React.useState("");
const [name,setName]=React.useState("");
const [passwordConfirmation,setPasswordConfirmation]=React.useState("");
const [success,setSuccess]=React.useState(false);
const navigate =useNavigate();
const dispatch = useDispatch();


const handleSubmit =(e) =>{
e.preventDefault();
if(!name || !email || !password || !passwordConfirmation){
  alert("Please eneter all fields");
  return;
}
if(password !=passwordConfirmation){
  alert("The passwords Dont match");
  return;
}
// send requset
dispatch(signUpUser(name,email,password,passwordConfirmation,setSuccess));

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
Your Name

<input 
type="text"
name="name"
id=""
className='form-control'
placeholder='Name'
value={name}

onChange={(e) => setName(e.target.value)}

/>

</label>


    
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

    <label>
    
    Re-type Password
    
    <input 
    type="password" 
    name='passwordConfirmation'
     id="" className='form-control'
    placeholder='Password Confirmation'
    value={passwordConfirmation} 
    onChange={(e) => setPasswordConfirmation(e.target.value)} 
      
      
      />
    </label>    
    
    </div>
    <button className="submit btn btn-primary my-2 form-control">Sign Up</button>
       </form>


  )
};

export default RegisterForm
