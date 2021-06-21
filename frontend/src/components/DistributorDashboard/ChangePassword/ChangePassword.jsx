import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { InputAdornment } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
export default function ChangePassword() {
  const [open, setOpen] = React.useState(true);

  const [passwordValid, setPasswordValid] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visibilityIcon, setVisibilityIcon] = useState(false);
  const [cVisibilityIcon, setCVisibilityIcon] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const checkValidation = () => {
 
     if (password === "") {
      setErrorPassword(true);
      return false;
    }
    setErrorPassword(false)
  
    if (!passwordValid || confirmPassword == "") {
      setConfirmPassword(" ");
      setPasswordValid(false);
      return false;
    }
    setConfirmPassword("")
    setPasswordValid(true)
    return true;
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{textAlign:"center"}}>
       Are Yor Sure You want to change the password
      </Button> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
        <DialogContent style={{display:"flex",flexDirection:"column",margin:10}}>
          
        <TextField
              id="outlined-basic"
              label="Enter Your Old Password"
              variant="outlined"
              style={{margin:10,width:300}}
             
              
            />
          <TextField
           style={{margin:10,width:300}}
              id="outlined-basic"
              label="Enter Your Password *"
              type={!visibilityIcon ? "password" : "text"}
              error={errorPassword}
              variant="outlined"
              value={password}
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
             style={{margin:10,width:300}}
              id="outlined-basic"
              label="Confirm Password *"
              type={!cVisibilityIcon ? "password" : "text"}
              error={confirmPassword !== "" ? !passwordValid : false}
              variant="outlined"
              value={confirmPassword}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save    
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}