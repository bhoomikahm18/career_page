import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function Jobs(props) {
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
                    <Button size='small'>Apply</Button>
                </CardActions>
            </Card>
        </div>
    )
}
