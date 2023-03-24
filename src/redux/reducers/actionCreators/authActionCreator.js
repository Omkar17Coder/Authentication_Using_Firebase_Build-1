
import * as types from "../actionsTypes/authActionsTypes";

import fire from "../../../config/firebase";
import { async } from "@firebase/util";


const loginUser=(payload)=>{
return {
type:types.SIGN_IN,
payload

};

};

const logoutUser=()=>{
    return{
type:types.SIGN_OUT,
    };
};


export const  signInUser=(email,password,setSuccess)=>(dispatch)=>{

    fire.auth().signInWithEmailAndPassword(email,password).then(user=>{
       dispatch(loginUser({
        uid:user.user.uid,
        email:user.user.email,
        displayName:user.user.displayName,

    
    }));
       setSuccess(true);
    }).catch((error)=>{
        alert("Invalid email or Password");
        
    });
};

export const signUpUser =(name,email,password,setSuccess) =>(dispatch)=>{
    fire.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
       fire.auth().currentUser.updateProfile({
        displayName:name,
       }).then(()=>{
        const currentUser= fire.auth().currentUser;
        dispatch(loginUser({uid:currentUser.uid,name:currentUser.displayName,email:currentUser.email}));
        
        alert("Registration Successful click the bottom 'already a user to login");
        
       }).catch((error)=>{
        console.log(error);
       });

       setSuccess(true);
       
    }).catch((error)=>{
        
        if(error.code=="auth/weak-password"){
            alert("Weak Password:Keep atleast 6 characters with mixed charaters");
        }
        if(error.code=="auth/invalid-email"){
            alert("Invalid Email");
        }
        if(error.code=="auth/email-already-in-use"){
            alert("Email Already in use!");
        }
    })

};

export const signOutUser =()=>(dispatch)=>{
dispatch(logoutUser());

};
