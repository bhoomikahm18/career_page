import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link, useNavigate } from 'react-router-dom';

export default function Jobs(props) {
    const [user, setUser] = useState();
    const navigate = useNavigate()

    const id = localStorage.getItem("userID")

    function handleApply() {
        if (id) {
            navigate(`/apply/${id}`)
        } else {
            alert("Please Login to Apply Jobs");
        }
    }
    return (
        <div>
            <Card sx={{
                width: '80%', margin: 'auto', mt: 2, padding: 4, boxShadow: "5px 5px 10px #ccc",
                ":hover": {
                    boxShadow: "10px 10px 20px #ccc"
                }
            }}>
                <CardContent>
                    <Typography variant="h6" >
                        {props.title}
                    </Typography>
                    <Typography variant="li" >
                        Skills Required: {props.skills}
                    </Typography><br />
                    <Typography variant="p" >
                        Job Description:<br />{props.description}
                    </Typography><br />
                    <Typography variant="span" >
                        Location: <br />{props.location}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><ShareIcon /></Button>
                    <Button size="small"><BookmarkBorderIcon /></Button>

                    <Button onClick={handleApply} LinkComponent={Link} to='/apply/:id' size='small'>Apply</Button>
                </CardActions>
            </Card>
        </div>
    )
}
