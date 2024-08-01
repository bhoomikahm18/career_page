import { Button, Typography } from '@mui/material'
import React from 'react'

export default function JobList() {
    return (
        <div>

            <Typography fontWeight={'bold'}
                padding={3}
                color="grey"
                variant='h2'
                textAlign='center'>Job Openings</Typography>
            <Typography variant="body2" color="text.secondary">
                Job Title <br /> Discription
            </Typography>
            <Button type="submit" sx={{ mt: 2, borderRadius: 4 }} variant='contained' color='warning'>Apply</Button>
        </div>
    )
}
