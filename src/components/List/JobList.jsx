import { Autocomplete, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Jobs from './Jobs.jsx';
import './JobList.css';
// import { response } from 'express';

export default function JobList() {
    const [job, setJobs] = useState();

    async function getAllJobs() {
        const res = await axios.get("/jobs/allJobs")
            .catch(err => console.log(err));

        if (res.status !== 200) {
            return console.log("No data Found");
        }

        let data = null;
        if (res) {
            data = await res.data;
            console.log(data);
        }
        return data;
    }

    useEffect(() => {
        getAllJobs()
            .then(data => setJobs(data.jobs))
            .catch(err => console.log(err))
    },)
    return (
        <div className='job_finding'>
            <img className='search_img' src='https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/08/04060924/10-Best-Job-Search-Sites-1-768x384.jpg' alt='search-img' />
            <Typography className='job_heading' variant='h5' sx={{ color: 'darkcyan', mt: '2rem' }}>Find your job</Typography>

            <div className='search_jobs' >
                <Autocomplete
                    className='job_type_field'
                    id='job-type'
                    options={jobType}
                    sx={{ width: 150, padding: "2px" }}
                    renderInput={(params) => (<TextField {...params} variant="standard" label="Job Type" />
                    )} />
                {/* <TextField label="Enter the job title, skills" sx={{ padding: "5px" }} /> */}
                <Autocomplete
                    className='text_field-1'
                    multiple
                    id="tags-standard"
                    options={sampleData}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Enter job title, skills.."
                        />
                    )}
                />
                {/* <TextField label="Location" sx={{ padding: "2px" }} /> */}
                <Autocomplete
                    className='text_field-2'
                    multiple
                    id="tags-standard"
                    options={sampleData}
                    getOptionLabel={(option) => option.location}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Location"
                        />
                    )}
                />
                <Button className='search_btn' variant='text' sx={{ alignItems: 'center', mt: "60px", ml: "10px" }}>Search</Button>
            </div>
            {/* <Typography fontWeight={'bold'}
                padding={3}
                color="grey"
                variant='h4'
                textAlign='center'>Job Openings</Typography> */}
            {job && job.map((Joblist, index) => (
                <Jobs
                    key={index}
                    title={Joblist.title}
                    skills={Joblist.skills}
                    description={Joblist.discription}
                    location={Joblist.location}

                />
            ))}
        </div>
    )
}


const jobType = ["Full Time", "Part Time", "Intern"]
const sampleData = [{ title: 'Software Developer', location: "Bengaluru" },
{ title: 'Web Developer', location: "Mysuru" },
{ title: 'MERN Stack Developer', location: "Canada" },
{ title: 'Traine', location: "chanai" },
{ title: 'Software Developer SDE -1', location: "Pune" },
{ title: "Python Developer", location: "Hydrabad" },
{ title: 'Java Developer', location: "Mangaluru" },
{
    title: 'Front End Developer',
    location: 'Tumkur',
},
{ title: 'Software Testing', location: 'USA' },
{ title: 'Software Traine', location: 'Hassan' },
{
    title: 'Full Stack Developer',
    location: 'UK',
},]