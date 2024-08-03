import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import React from 'react';
// import ListIcon from '@mui/icons-material/List';
import './ApplicationForm.css';
import UploadIcon from '@mui/icons-material/Upload';

function ApplicationForm() {
    return (
        <div style={{ backgroundColor: "rgb(242, 240, 250)", padding: '20px' }}>
            <Card
                sx={{
                    width: '80%', margin: 'auto', mt: 2, mb: 2, padding: 4, boxShadow: "5px 5px 10px #ccc",
                    ":hover": {
                        boxShadow: "10px 10px 20px #ccc"
                    },
                    justifyContent: "center"
                }}>
                <Typography className='heading_1' variant='h3'>
                    Step into new Opportunities
                </Typography>
                <Typography className='heading_2' variant='h6' sx={{ textAlign: 'center', color: 'gray' }}>
                    Complete the form below, our talent network will get in contact
                </Typography>
                <CardContent className='input_fields' sx={{ flexWrap: 'wrap', fontSize: 'small' }}>
                    <div className='text_area'>
                        <TextField className='text_fields' label='First Name' type='name' sx={{ mb: 1, padding: 1, width: "100%" }} required></TextField>
                        <TextField className='text_fields' label='Last Name' type='name' sx={{ mb: 1, padding: 1, width: "100%" }} required></TextField>
                    </div>
                    <div className='text_area'>
                        <TextField className='text_fields' label='Primary Email' type='email' sx={{ mb: 1, padding: 1, width: "100%" }} required></TextField>
                        <TextField className='text_fields' label='Phone Number' type='number' sx={{ mb: 1, padding: 1, width: "100%" }} required></TextField>
                    </div>
                    <div className='file_structure'>
                        <div style={{ marginLeft: 16, display: 'inline-block', marginRight: "50px" }}>
                            <h2 style={{ marginBottom: 0, marginTop: 0 }}>Resume</h2>
                            <Typography fontSize={"small"} sx={{ display: 'inline-block', }}>Upload your resume as pdf with a maximum size of 2MB</Typography>
                        </div>
                        <div className='upload_btn' style={{ display: 'inline-block', marginRight: 0 }}>
                            <Button className='file_upload' sx={{ display: 'inline-block', ml: 1, justifyContent: 'center', display: 'inline-block' }} type='file' variant='contained' >Upload Resume <UploadIcon /></Button>
                        </div>
                    </div>
                    <div className='text_area'>
                        <TextField className='text_fields' label='Primary Country / Region' type='text' sx={{ mb: 1, padding: 1, width: "100%" }} required></TextField>
                        <TextField className='text_fields' label='Experience in Year' type='number' sx={{ mb: 1, padding: 1, width: "100%" }} required></TextField>
                    </div>
                    <div>
                        <TextField className='text_fields_area' label='Area of Interest' type='text' sx={{ mb: 1, padding: 1, mr: 2 }} required></TextField>
                        <TextField className='text_fields_last' label='Tell us more about you' type='text' sx={{ mb: 1, padding: 1, mr: 2 }} required></TextField>
                    </div>
                    <Button className='btn_1' sx={{ margin: '0% 50% 0 45%', }} variant='contained'>Submit</Button>

                </CardContent>
            </Card >
        </div>
    )
}

export default ApplicationForm

// https://www.websmartindia.com/images/logo-1.png