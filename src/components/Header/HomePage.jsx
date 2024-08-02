import { Autocomplete, Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React from 'react';
import './Header.css';
import JobList from '../List/JobList';
// import JobList from '../List/JobList';

export default function HomePage() {

    return (
        <div className='body'>
            <Box className='box_content'
                height={400}
                width={550}
                my={4}
                display="flex"
                alignItems="last baseline"
                justifyContent="center"
                gap={4}
                p={2}
                sx={{ flexGrow: 1, border: '2px solid grey' }}
            >
                <h1>Welcome to Career Page</h1>
            </Box>
            <Typography variant='h3'>Search Jobs</Typography>

            <div className='search_jobs' >
                <Autocomplete id='job-type' options={jobType} sx={{ width: 222, padding: "2px", backgroundColor: "white" }} renderInput={(params) => (<TextField {...params} label="Job Type" />
                )} />
                <TextField label="Enter the job title, skills" sx={{ padding: "2px", backgroundColor: "white" }} />
                <TextField label="Location" sx={{ padding: "2px", backgroundColor: "white" }} />
                <Button variant='contained' sx={{ alignItems: 'center' }}>Search</Button>
            </div>
            <JobList />
        </div >
    )
}

const jobType = ["Full Time", "Part Time", "Intern"]