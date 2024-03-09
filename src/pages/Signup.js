import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import "./Pages.css";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [securityCode, setSecurityCode] = useState(0);
    const [errormsg, setErrormsg] = useState("");

    const API_BASE = "https://diy-service.onrender.com";
    const navigate = useNavigate();
    let data ={};
    const handleSubmit = async () => {
        if (!username || !password) {
            setErrormsg("plz fill mandatory fields")
        } else {
            if (!securityCode) {
                 data = await fetch(API_BASE + "/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    })
                })
                if (data) {
                    navigate("/login");                        
                }
            } else {
                 data = await fetch(API_BASE + "/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                        securityCode: securityCode
                    })
                })
                if (data) {
                    navigate("/login");                      
                }
                else{
                    setErrormsg("wrong security code.")
                }
            }
        }
    }

    return (
    <div style={{display:'flex',justifyContent:"center",alignItems:"center"}} className='Loginpage'>
        <div  className="pagebox">
            <div className='signupcontainer'>
                <h3>Enter your details for Signup</h3>
                <Box component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
                    noValidate
                    autoComplete="off"
                    className='formclass'
                >
                    <TextField id="outlined-basic" label="Username" variant="outlined" type='String' required={true} onChange={(e) => setUsername(e.target.value)} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" required={true} onChange={(e) => setPassword(e.target.value)} />
                    <TextField id="outlined-basic" label="SecurityCode" variant="outlined" type='password' onChange={(e) => setSecurityCode(e.target.value)} />
                    <Stack spacing={2} direction="row">
                        <Button variant='outlined' sx={{ color: "#163C55" }} onClick={handleSubmit} >Register</Button>
                    </Stack>
                    <p style={{color:"red"}}>{errormsg}</p>
                </Box>
                <div className="account">
                    <span>Already have an account?</span>
                    <Link to="/login" style={{ color: "#0C0703", '&:hover': { color: "skyblue", } }}>Login</Link>
                </div>
            </div>
        </div>
    </div>
    )
}


