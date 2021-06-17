import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./registerForm.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Visibility from "@material-ui/icons/Visibility";
import { InputAdornment } from "@material-ui/core";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

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

function VisibilityIcon(props) {
  if (props.state) {
    return <Visibility />;
  }
  return <VisibilityOff />;
}

function RegisterForm() {
  const [sponser_id, setSponserId] = useState("");
  const [sponser_name, setSponserName] = useState("");
  const [name, setName] = useState("");
  const [data_of_birth, setdate_of_birth] = useState("");
  const [mobile_number, setMobileNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorSId, setErrorSId] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorDOB, setErrorDOB] = useState(false);
  const [errorMNumber, setErrorMNumber] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [visibilityIcon, setVisibilityIcon] = useState(false);
  const [cVisibilityIcon, setCVisibilityIcon] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const classes = useStyles();
  let history = useHistory();

  let payload = {
    sponser_id,
    sponser_name,
    name,
    data_of_birth,
    mobile_number,
    email,
    password,
  };
  const checkValidation = () => {
    if (sponser_id === "") {
      setErrorSId(true);
      return false;
    }
    if (name === "") {
      setErrorName(true);
      return false;
    }
    if (data_of_birth === "") {
      setErrorDOB(true);
      return false;
    }
    if (email === "") {
      setErrorEmail(true);
      return false;
    }
    if (password === "") {
      setErrorPassword(true);
      return false;
    }
    if (mobile_number === "") {
      setErrorMNumber(true);
      return false;
    }
    if (!passwordValid || confirmPassword == "") {
      setConfirmPassword(" ");
      setPasswordValid(false);
      return false;
    }
    return true;
  };

  const submitForm = () => {
    if (checkValidation()) {
      alert("Form Submitted Successfully")
    }
  }

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
          <form
            className={classes.root}
            style={{ marginTop: 30 }}
            noValidate
            autoComplete="off"
          >
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
              label="Sponser Name"
              variant="outlined"
              value={sponser_id}
              disabled={true}
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
              InputLabelProps={{
                shrink: true,
              }}
              label="Date of birth*"
              error={errorDOB}
              variant="outlined"
              type={"date"}
              onChange={(e) => {
                setdate_of_birth(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              error={errorMNumber}
              label="Enter Your Mobile Number *"
              variant="outlined"
              type={"number"}
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
              type={!visibilityIcon ? "password" : "text"}
              error={errorPassword}
              variant="outlined"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        !visibilityIcon
                          ? setVisibilityIcon(true)
                          : setVisibilityIcon(false);
                      }}
                    >
                      <VisibilityIcon state={visibilityIcon} />
                    </div>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password *"
              type={!cVisibilityIcon ? "password" : "text"}
              error={confirmPassword !== "" ? !passwordValid : false}
              variant="outlined"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                for (var i = 0; i < e.target.value.length; i++) {
                  if (e.target.value[i] != password[i]) {
                    setPasswordValid(false);
                    return;
                  }
                }
                setPasswordValid(true);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        !cVisibilityIcon
                          ? setCVisibilityIcon(true)
                          : setCVisibilityIcon(false);
                      }}
                    >
                      <VisibilityIcon state={cVisibilityIcon} />
                    </div>
                  </InputAdornment>
                ),
              }}
            />
          </form>
          <button className="btn" onClick={submitForm}>
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
