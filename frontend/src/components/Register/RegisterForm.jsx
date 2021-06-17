import React,{useState} from 'react'
import {useHistory } from "react-router-dom";
import './registerForm.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RegisterFormBtn from "../Buttons/RegisterFormBtn"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '90ch',
        "@media (max-width: 768px)": {
          width: '60ch',
        },
        "@media (max-width: 767px)": {
          width: '40ch',
        },
        "@media (max-width: 320px)": {
          width: '30ch',
        },
      },
    },


  }));

function RegisterForm() {
  const[sponser_id,setSponserId]=useState("");
  const[sponser_name,setSponserName]=useState("");
  const[name,setName]=useState("");
  const[data_of_birth,setdate_of_birth]=useState("");
  const[mobile_number,setMobileNumber]=useState();
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[conform_password,setConformPassword]=useState("");
  const[verify,setVerify]=useState();
  const[showValidation,setValidation]=useState(false);
  const [message,setMessage]=useState("");
  const classes = useStyles();
  let history = useHistory();
  console.log(sponser_id);
  let payload ={
    sponser_id,
    sponser_name,
    name,
    data_of_birth,
    mobile_number,
    email,
    password,
    conform_password,
    verify
  }
  const checkValidation =()=>{
    console.log(sponser_id)
    console.log("this is name ",name)
    if(sponser_id === ""){
      setValidation(true)

      setMessage("Sponser id must be required")
      return 
    }
    else if(name===""){
      setValidation(true)
      setMessage("Name must be required")
      return 
    }
    else if(data_of_birth===""){
      setMessage("Date Of Birth required")
      return 
    }
    else if(email===""){
      setMessage( "Email required")
      return
    }
    else if(password===""){
      setMessage("password required")
      return 
    }
    else if(verify===""){
      setMessage( "verification send on your Email. Please Enter the Code.")
      return
    }

  }
  const verifyPassword = (e)=>{
    if(e.target.value==password){
      console.log("password are same")
    }
    else{
      console.log("password are not same")
    }

  }
    return (
        <div className="register_container">
          <ArrowBackIosIcon className="back_arrow" onClick={()=>{
            history.goBack();
          }}/>
            <div className="container_field">
            <h2 >Registeration Form</h2>
            <div className="line"></div>
            <form className={classes.root} noValidate autoComplete="off">
               <TextField id="outlined-basic" label="Sponser ID" variant="outlined" onChange={(e)=>{setSponserId(e.target.value)}}/>
               <TextField id="outlined-basic" label="Sponser Name" variant="outlined"  onChange={(e)=>{setSponserName(e.target.value)}}/>
               <TextField id="outlined-basic" label="Enter Your Name" variant="outlined"  onChange={(e)=>{setName(e.target.value)}}/>
               <TextField id="outlined-basic" label="Enter Your D.O.B" variant="outlined"  onChange={(e)=>{setdate_of_birth(e.target.value)}}/>
               <TextField id="outlined-basic" label="Enter Your Mobile Number" variant="outlined"  onChange={(e)=>{setMobileNumber(e.target.value)}} />
               <TextField id="outlined-basic" label="Enter Your Email" variant="outlined" type="email"  onChange={(e)=>{setEmail(e.target.value)}} />
               <TextField id="outlined-basic" label="Enter Your Password" variant="outlined" onChange={(e)=>{setPassword(e.target.value)}}/>
               <TextField id="outlined-basic" label="Enter Your Conform Password" variant="outlined" onChange={(e)=>{setConformPassword(e.target.value)}}/>
              <TextField id="outlined-basic" label="Enter verification code" variant="outlined"  onChange={(e)=>{

console.log(e.target.value);
            if(e.target.value==password){
              setValidation(true)
              setMessage("password does not match")
            }

              }}/>
             

            </form>
            
         { showValidation &&
           <div style={{color:"red",fontSize:"20px",letterSpacing:"2px"}}>
              {message }
            </div>}
        <button className="btn" onClick={checkValidation}>
          Submit
        </button>
        <div className="signin_div">
         Already have an Account? Please.. <a a href="/login">Sign In</a>
        </div>
           
            </div>
            
        </div>
    )
}

export default RegisterForm
