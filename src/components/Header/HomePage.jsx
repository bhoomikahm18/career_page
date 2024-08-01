import { Autocomplete, Box, Button, Card, CardContent, Input, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react';
import './Header.css';
import JobList from '../List/JobList';

export default function HomePage() {
    return (
        <div className='body'>
            <div className='content'>
                <Box className='box_content'
                    height={400}
                    width={550}
                    my={4}
                    display="flex"
                    alignItems="last baseline"
                    justifyContent="center"
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid grey' }}
                >
                    <h1>Welcome to Career Page</h1>
                    {/* <p>CareerPage is your first source for jobs in broadcasting because these jobs are posted by the source – broadcasters from across the country. This comprehensive listing of open positions provides you with a wide range of career opportunities. Below, check to see what kinds of jobs are available in broadcasting and what’s involved in getting those positions.</p> */}
                </Box>
            </div>
            <Typography variant='h3'>Search Jobs</Typography>
            <Card sx={{ backgroundColor: "bisque", width: "500px", alignItems: "center", justifyContent: "center" }}>
                <CardContent className='card_content' sx={{
                    height: 200,
                    width: 250,
                    alignItems: "center",
                    justifyContent: "center",

                }}>
                    <Autocomplete id='job-type' options={jobType} sx={{ width: 222, padding: "2px", backgroundColor: "white" }} renderInput={(params) => (<TextField {...params} label="Job Type" />
                    )} />
                    <TextField label="Enter the job title, skills" sx={{ padding: "2px", backgroundColor: "white" }} />
                    <TextField label="Location" sx={{ padding: "2px", backgroundColor: "white" }} />
                    <Button variant='contained' sx={{ margin: "auto", padding: "5px" }}>Search</Button>
                </CardContent>
            </Card>
            <div>
                <JobList />
            </div>
        </div >
    )
}

const jobType = ["Full Time", "Part Time", "Intern"]