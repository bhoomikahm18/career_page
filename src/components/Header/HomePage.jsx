import { Autocomplete, Box, TextField } from '@mui/material'
import React from 'react';
import './Header.css';

export default function HomePage() {
    return (
        <div >
            <div className='content'>
                <Box className='box_content'
                    height={400}
                    width="100%"
                    my={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid grey' }}
                >
                    <h1>Welcome to Career Page</h1>
                    {/* <p>CareerPage is your first source for jobs in broadcasting because these jobs are posted by the source – broadcasters from across the country. This comprehensive listing of open positions provides you with a wide range of career opportunities. Below, check to see what kinds of jobs are available in broadcasting and what’s involved in getting those positions.</p> */}
                </Box>
            </div>
            <div>
                <Autocomplete id='job-type' options={jobType} sx={{ width: 300 }} renderInput={(params) => (<TextField {...params} label="Job Type" />
                )} />
                
            </div>
        </div>
    )
}

const jobType = ["Full Time", "Part Time", "Intern"]