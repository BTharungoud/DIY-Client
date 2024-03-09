import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Pages.css";
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errormsg, setErrormsg] = useState("");
    const navigate = useNavigate();
    const API_BASE = "https://diy-service.onrender.com"

    const handleLogin = async () => {
        if (!username || !password) { setErrormsg("Enter all the fields") }

        else if (password.substring((password.length) - 5, password.length) == ("@7235")) {
            const data = await fetch(API_BASE + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })
            const res = await data.json();
            if (res.token) {
                localStorage.setItem("token", res.token)
                navigate("/menuAdmin");
            }
            else {
                setErrormsg("fake admin!")
            }
        }
        else {
            const data = await fetch(API_BASE + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            const res = await data.json();
            if (res.token) {
                localStorage.setItem("token", res.token)
                localStorage.setItem("Username", res.username)
                navigate("/usermenu");
            }
            else {
                setErrormsg("fake user!")
            }
        }
    }
    return (
    <div className='Loginpage'>
        <div className='NavBarDiv'>
                <nav onClick={() => { navigate("/login") }}>Login</nav>
                <nav onClick={() => { navigate("/") }}>HomePage</nav>
        </div>
        <div className="pagebox">
            <div className='signupcontainer'>
                <h3>Enter your credentials.</h3>
                <Box component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
                    noValidate
                    autoComplete="off"
                    className='formclass'
                >
                    <TextField id="outlined-basic" label="Username" variant="outlined" type='String' required={true} onChange={(e) => setUsername(e.target.value)} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" required={true} onChange={(e) => setPassword(e.target.value)} />
                    <Stack spacing={2} direction="row">
                        <Button variant='outlined' sx={{ color: "#163C55" }} onClick={handleLogin} >Login</Button>
                    </Stack>
                </Box>
                <p style={{ color: "red" }}>{errormsg}</p>
                <div className="account">
                    <span>Don't have an account?</span>
                    <Link to="/register" style={{ color: "#0C0703", '&hover': { color: "skyblue" } }}>Register</Link>
                </div>
            </div>
        </div>
    </div>
    )
}