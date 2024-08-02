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
                width={1100}
                my={4}
                display="flex"
                alignItems="last baseline"
                justifyContent="center"
                gap={4}
                p={2}
                sx={{ flexGrow: 1, border: '2px solid grey' }}
            >
                {/* <img src="https://img.freepik.com/premium-photo/business-man-working-laptop-with-job-search-screen_218381-8578.jpg" label="Start Your Career" /> */}
                <h1>Start Your Career </h1>
            </Box>
            <JobList />
        </div >
    )
}
