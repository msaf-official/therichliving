import React,{useState} from 'react'
import {useHistory } from "react-router-dom";
import './login.css'
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

function Login() {
  const[loginId,setLoginId]=useState("");

  const[password,setPassword]=useState("");
  const[conform_password,setConformPassword]=useState("");
 
  const[showValidation,setValidation]=useState(false);
  const [message,setMessage]=useState("");
  const classes = useStyles();
  let history = useHistory();
  
  let payload ={
    loginId,
    password,
    
  }
  const checkValidation =()=>{
    

    if(loginId === ""){
      setValidation(true)

      setMessage(" id must be required")
      return 
    }
   

  }
 
    return (
        <div className="register_container">
          <ArrowBackIosIcon className="back_arrow" onClick={()=>{
            history.goBack();
          }}/>
            <div className="container_field">
            <h2 >Login Form</h2>
            <div className="line"></div>
            <form className={classes.root} noValidate autoComplete="off">
               <TextField id="outlined-basic" label="Distributor ID" variant="outlined" onChange={(e)=>{setLoginId(e.target.value)}}/>
               <TextField id="outlined-basic" label="Your Password" variant="outlined" onChange={(e)=>{setPassword(e.target.value)}}/>
              </form>
            
         { showValidation &&
           <div style={{color:"red",fontSize:"20px",letterSpacing:"2px"}}>
              {message }
            </div>}
        <button className="btn" onClick={checkValidation}>
          Login
        </button>
        <div className="signin_div">
        No Account? Please Create it <a href="/register"> Register Account</a>
        </div>
           
            </div>
            
        </div>
    )
}

export default Login

