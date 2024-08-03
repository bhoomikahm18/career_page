import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
// import ListIcon from '@mui/icons-material/List';
import './ApplicationForm.css';
import UploadIcon from '@mui/icons-material/Upload';
import axios from 'axios';

function ApplicationForm() {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        resume: "",
        country_or_region: "",
        experience: "",
        area_of_interest: "",
        about_applicant: "",
    });

    function handleChange(e) {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }


    async function sendRequest() {
        const res = await axios.post(`/application/form/add`, {
            first_name: form.first_name,
            last_name: form.last_name,
            email: form.email,
            phone_number: form.phone_number,
            resume: form.resume,
            country_or_region: form.country_or_region,
            experience: form.experience,
            area_of_interest: form.area_of_interest,
            about_applicant: form.about_applicant,
        })
            .catch(err => console.log(err))

        let data = null;
        if (res) {
            data = await res.data;
            console.log(data);
        }
        return data;
    }

    function handleSubmit(e) {
        e.preventDefault();
        sendRequest()
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <div style={{ backgroundColor: "rgb(242, 240, 250)", padding: '20px' }}>
            <form onSubmit={handleSubmit}>
                <Card
                    sx={{
                        width: '80%',
                        margin: 'auto',
                        mt: 2,
                        mb: 2,
                        padding: 4,
                        boxShadow: "5px 5px 10px #ccc",
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        },
                        justifyContent: "center"
                    }}>
                    <Typography
                        className='heading_1'
                        variant='h3'>
                        Step into new Opportunities
                    </Typography>
                    <Typography
                        className='heading_2'
                        variant='h6'
                        sx={{ textAlign: 'center', color: 'gray' }}>
                        Complete the form below, our talent network will get in contact
                    </Typography>
                    <CardContent
                        className='input_fields'
                        sx={{ flexWrap: 'wrap', fontSize: 'small' }}>
                        <div className='text_area'>
                            <TextField
                                onChange={handleChange}
                                className='text_fields'
                                label='First Name'
                                type='firt_name'
                                value={form.first_name}
                                name='first_name'
                                sx={{ mb: 1, padding: 1, width: "100%" }}
                                required />
                            <TextField
                                onChange={handleChange}
                                className='text_fields'
                                label='Last Name'
                                type='last_name'
                                value={form.last_name}
                                name='last_name'
                                sx={{ mb: 1, padding: 1, width: "100%" }}
                                required />
                        </div>
                        <div className='text_area'>
                            <TextField
                                onChange={handleChange}
                                className='text_fields'
                                label='Primary Email'
                                type='email'
                                value={form.email}
                                name='email'
                                sx={{ mb: 1, padding: 1, width: "100%" }}
                                required />
                            <TextField
                                onChange={handleChange}
                                className='text_fields'
                                label='Phone Number'
                                type='number'
                                value={form.phone_number}
                                name='phone_number'
                                sx={{ mb: 1, padding: 1, width: "100%" }}
                                required />
                        </div>
                        <div className='file_structure'>
                            <div style={{ marginLeft: 16, display: 'inline-block', marginRight: "50px" }}>
                                <h2 style={{ marginBottom: 0, marginTop: 0 }}>
                                    Resume
                                </h2>
                                <Typography
                                    fontSize={"small"}
                                    sx={{ display: 'inline-block', }}>
                                    Upload your resume as pdf with a maximum size of 2MB
                                </Typography>
                            </div>
                            <div
                                className='upload_btn'
                                style={{ display: 'inline-block', marginRight: 0 }}>
                                {/* <Button
                                className='file_upload'
                                sx={{ ml: 1, justifyContent: 'center', display: 'inline-block' }}
                                type='file'
                                variant='contained' >
                                Upload Resume
                                <UploadIcon />
                            </Button> */}
                                <TextField
                                    onChange={handleChange}
                                    type='file'
                                    value={form.resume}
                                    name='resume'
                                    sx={{ color: "black", bgcolor: "blueviolet", width: '35%', ml: 1 }}
                                    required
                                ><UploadIcon />
                                </TextField>
                            </div>
                        </div>
                        <div className='text_area'>
                            <TextField
                                onChange={handleChange}
                                className='text_fields'
                                label='Primary Country / Region'
                                type='text'
                                value={form.country_or_region}
                                name='country_or_region'
                                sx={{ mb: 1, padding: 1, width: "100%" }}
                                required />
                            <TextField
                                onChange={handleChange}
                                className='text_fields'
                                label='Experience in Year'
                                type='number'
                                value={form.experience}
                                name='experience'
                                sx={{ mb: 1, padding: 1, width: "100%" }}
                                required />
                        </div>
                        <div>
                            <TextField
                                onChange={handleChange}
                                className='text_fields_area' label='Area of Interest'
                                type='text'
                                value={form.area_of_interest}
                                name='area_of_interest'
                                sx={{ mb: 1, padding: 1, mr: 2 }}
                                required />
                            <TextField
                                onChange={handleChange}
                                className='text_fields_last'
                                label='Tell us more about you'
                                type='text'
                                value={form.about_applicant}
                                name='about_applicant'
                                sx={{ mb: 1, padding: 1, mr: 2 }}
                                required />
                        </div>
                        <Button
                            className='btn_1'
                            sx={{ margin: '0% 50% 0 45%', }}
                            variant='contained'
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </CardContent>
                </Card >
            </form>
        </div>
    )
}

export default ApplicationForm;