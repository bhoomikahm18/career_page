import { Box, Button, FormLabel, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export default function Login() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    async function sendRequest() {
        const res = await axios.post(`/login`, {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password,
        })
            .catch(err => console.log(err));

        const data = await res.data;
        return data;
    }

    function handleChange(e) {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className='body_part'>
            <Box sx={{ ml: "auto", padding: 1 }}>
                <IconButton LinkComponent={Link} to="/">
                    <CloseRoundedIcon />
                </IconButton>
            </Box>
            <Typography variant="h4" textAlign={"center"}>
                Login or Register
            </Typography>
            <form >
                <Box
                    padding={6}
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection="column"
                    width={400}
                    margin="auto"
                    alignContent={"center"}
                >
                    <FormLabel >Name</FormLabel>
                    <TextField
                        onChange={handleChange}
                        value={inputs.name}
                        margin="normal"
                        variant="standard"
                        type={"text"}
                        name="name"
                    />
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
                        Login
                    </Button>
                    <Button
                        sx={{ mt: 2, borderRadius: 10 }}
                        fullWidth
                    >
                        Switch To Login to Register
                    </Button>
                </Box>
            </form>
        </div>
    )
}
