import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function Jobs(props) {
    return (
        <div>
            <Card sx={{
                width: '40%', margin: 'auto', mt: 2, padding: 2, boxShadow: "5px 5px 10px #ccc",
                ":hover": {
                    boxShadow: "10px 10px 20px #ccc"
                }
            }}>
                <CardContent>
                    <Typography variant="h6" >
                        {props.title}
                    </Typography>
                    <Typography variant="h6" >
                        {props.description}
                    </Typography>
                    <Typography variant="h6" >
                        {props.location}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
