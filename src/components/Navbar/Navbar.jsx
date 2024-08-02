import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Careers
                        </Typography>
                        <Button LinkComponent={Link} to="/login" color="inherit">Login</Button>
                        <Button LinkComponent={Link} to="/login" color="inherit">Register</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
