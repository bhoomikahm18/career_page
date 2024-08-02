import { Button, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Jobs from './Jobs.jsx';
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
    }, )
    return (
        <div>

            <Typography fontWeight={'bold'}
                padding={3}
                color="grey"
                variant='h2'
                textAlign='center'>Job Openings</Typography>
            {job && job.map((Joblist, index) => (
                <Jobs
                    key={index}
                    title={Joblist.title}
                    description={Joblist.discription}
                    location={Joblist.location}

                />
            ))}
        </div>
    )
}
