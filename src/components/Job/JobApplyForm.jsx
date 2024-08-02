import { Button, FormLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function JobApplyForm() {
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        number: "",
    });

    function handleChange(e) {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
            <form >
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
            </form>
        </>
    )
}

export default JobApplyForm