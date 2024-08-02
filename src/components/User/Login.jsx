import { Alert, Box, Button, FormLabel, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export default function Login() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [isRegister, setIsRegister] = useState(false);

    function handleChange(e) {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    async function sendRequest(type) {

        const res = await axios.post(`/user/${type}`, {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password,
        })
            .catch(err => console.log("Error sending request: ", err));

        let data = null;
        if (res) {
            data = await res.data;
            console.log(data);
        }
        return data;

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        if (isRegister) {
            sendRequest("register")
                .then(data => console.log(data.users))
                .then(() => navigate('/'))
                .catch(err => console.log(err))
        } else {
            sendRequest("login")
                .then(data => console.log(data.users))
                .then(() => navigate('/'))
                .catch(alert("User not found! Please Register"))
        }
    }

    return (
        <div className='body_part'>
            <Box sx={{ ml: "auto", padding: 1 }}>
                <IconButton LinkComponent={Link} to="/">
                    <CloseRoundedIcon />
                </IconButton>
            </Box>
            <form onSubmit={handleSubmit}>

                <Box
                    padding={6}
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection="column"
                    width={400}
                    margin="auto"
                    alignContent={"center"}
                >
                    <Typography variant="h4" textAlign={"center"}>
                        {isRegister ? "Register" : "Login"}
                    </Typography>
                    {isRegister &&
                        <>
                            <FormLabel >Name</FormLabel>
                            <TextField
                                onChange={handleChange}
                                value={inputs.name}
                                margin="normal"
                                variant="standard"
                                type={"text"}
                                name="name"
                            />
                        </>}{" "}
                    <FormLabel >Email</FormLabel>
                    <TextField
                        onChange={handleChange}
                        value={inputs.email}
                        margin="normal"
                        variant="standard"
                        type={"email"}
                        name="email"
                    />
                    <FormLabel >Password</FormLabel>
                    <TextField
                        onChange={handleChange}
                        value={inputs.password}
                        margin="normal"
                        variant="standard"
                        type={"password"}
                        name="password"
                    />
                    <Button
                        sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
                        type="submit"
                        fullWidth
                        variant="contained"
                    >
                        Submit
                    </Button>
                    <Button onClick={() => setIsRegister(!isRegister)} sx={{ borderRadius: 3, marginTop: 3 }}>Change to {isRegister ? "Login" : "Register"}</Button>
                </Box>
            </form>
        </div>
    )
}
