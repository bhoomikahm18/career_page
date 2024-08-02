import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function JobApplyForm() {
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address_1: "",
        address_2: "",
        number: "",
        education: "",
    });

    function handleChange(e) {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
            {/* <form >
                <Typography variant='h5'>
                    Enter the Neccessary details.
                </Typography>
                <FormLabel >First Name</FormLabel>
                <TextField
                    onChange={handleChange}
                    value={inputs.firstName}
                    margin="normal"
                    variant="standard"
                    type={"text"}
                    name="name"
                />
                <FormLabel >Last Name</FormLabel>
                <TextField
                    onChange={handleChange}
                    value={inputs.lastName}
                    margin="normal"
                    variant="standard"
                    type={"text"}
                    name="name"
                />
                <FormLabel >email</FormLabel>
                <TextField
                    onChange={handleChange}
                    value={inputs.email}
                    margin="normal"
                    variant="standard"
                    type={"text"}
                    name="name"
                />
                <FormLabel >Address</FormLabel>
                <TextField
                    onChange={handleChange}
                    value={inputs.address}
                    margin="normal"
                    variant="standard"
                    type={"text"}
                    name="name"
                />
                <FormLabel >Number</FormLabel>
                <TextField
                    onChange={handleChange}
                    value={inputs.number}
                    margin="normal"
                    variant="standard"
                    type={"text"}
                    name="name"
                />
                <Button LinkComponent={Link} to='/jobList' variant='outlined'>Submit</Button>
            </form> */}
            <form>


                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            onChange={handleChange}
                            required
                            id="outlined-required"
                            value={inputs.firstName}
                            label="First Name"
                        />
                        <TextField
                            onChange={handleChange}
                            required
                            id="outlined-required"
                            value={inputs.lastName}
                            label="Last Name"
                        />
                        <TextField
                            onChange={handleChange}
                            required
                            id="outlined-required"
                            value={inputs.email}
                            label="Email"
                        />
                        <TextField
                            onChange={handleChange}
                            required
                            id="outlined-required"
                            value={inputs.address_1}
                            label="Address 1"
                        />

                        <TextField
                            id="outlined-password-input"
                            label="Address 2"
                            value={inputs.address_2}
                        />
                        <TextField
                            onChange={handleChange}
                            required
                            id="outlined-password-input"
                            label="Number"
                            value={inputs.number}
                        />
                        <TextField
                            onChange={handleChange}
                            required
                            id="outlined-password-input"
                            label="Education"
                            value={inputs.education}
                        />
                        <Button LinkComponent={Link} to="/jobList" variant='contained'>Submit</Button>
                    </div>

                </Box>
            </form>
        </>
    )
}

export default JobApplyForm