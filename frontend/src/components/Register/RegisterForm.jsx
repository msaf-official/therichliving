import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./registerForm.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import RegisterFormBtn from "../Buttons/RegisterFormBtn";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "90ch",
      "@media (max-width: 768px)": {
        width: "60ch",
      },
      "@media (max-width: 767px)": {
        width: "35ch",
      },
      "@media (max-width: 320px)": {
        width: "30ch",
      },
    },
  },
}));

function RegisterForm() {
  const [sponser_id, setSponserId] = useState("");
  const [sponser_name, setSponserName] = useState("");
  const [name, setName] = useState("");
  const [data_of_birth, setdate_of_birth] = useState("");
  const [mobile_number, setMobileNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conform_password, setConformPassword] = useState("");
  const [verify, setVerify] = useState();
  const [errorSId, setErrorSId] = useState(false);
  const [errorSName, setErrorSName] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorDOB, setErrorDOB] = useState(false);
  const [errorMNumber, setErrorMNumber] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [message, setMessage] = useState("");
  const classes = useStyles();
  let history = useHistory();
  console.log(sponser_id);
  let payload = {
    sponser_id,
    sponser_name,
    name,
    data_of_birth,
    mobile_number,
    email,
    password,
    conform_password,
    verify,
  };
  const checkValidation = () => {

    if (sponser_id === "") {
      setErrorSId(true);
      setMessage("Incomplete field")
    } else if (name === "") {
      setErrorName(true);
      setMessage("Incomplete field")
    } else if (data_of_birth === "") {
      setErrorDOB(true);
      setMessage("Incomplete field")
    } else if (email === "") {
      setErrorEmail(true);
      setMessage("Incomplete field")
    } else if (password === "") {
      setErrorPassword(true);
      setMessage("Incomplete field")
    } else if (mobile_number === "") {
      setErrorMNumber(true)
      setMessage("Incomplete field")
    } 
  };
  const verifyPassword = (e) => {
    if (e.target.value == password) {
      console.log("password are same");
    } else {
      console.log("password are not same");
    }
  };
  return (
    <div style={{}}>
      {/* <div style={{backgroundColor:"#1b9a59",height:200,zIndex:-100}}></div> */}
      <div className="register_container">
        <ArrowBackIosIcon
          className="back_arrow"
          onClick={() => {
            history.goBack();
          }}
        />
        <div className="container_field">
          <h2>Registeration Form</h2>
          <div className="line"></div>
          <form className={classes.root} style={{marginTop:30}} noValidate  autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Sponser ID *"
              error={errorSId}
              variant="outlined"
              onChange={(e) => {
                setSponserId(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Sponser Name *"
              variant="outlined"
              onChange={(e) => {
                setSponserName(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Enter Your Name *"
              variant="outlined"
              error={errorName}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Enter Your D.O.B *"
              error={errorDOB}
              variant="outlined"
              onChange={(e) => {
                setdate_of_birth(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              error={errorMNumber}
              label="Enter Your Mobile Number *"
              variant="outlined"
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Enter Your Email *"
              variant="outlined"
              error={errorEmail}
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Enter Your Password *"
              error={errorPassword}
              variant="outlined"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password *"
              variant="outlined"
              onChange={(e) => {
                setConformPassword(e.target.value);
              }}
            />
          </form>
          <button className="btn" onClick={checkValidation}>
            Submit
          </button>
          <div className="signin_div">
            Already have an Account? Please <a href="#"> Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
