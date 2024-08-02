import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    function handleLogout() {
        localStorage.clear();
        props.setIsLogin(false);
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" sx={{ backgroundColor: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,19,121,1) 0%, rgba(0,212,255,1) 100%)` }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Careers
                        </Typography>
                        {/* <Button LinkComponent={Link} to="/register" color="inherit">Register</Button> */}
                        <Button LinkComponent={Link} to="/jobList" color="inherit">Find Jobs</Button>
                        <Button LinkComponent={Link} to="/" color="inherit">About Us</Button>
                        <Button LinkComponent={Link} to="/contact" color="inherit">Contact Us</Button>
                        {!props.isLogin ?
                            <Button LinkComponent={Link} to="/login" color="inherit">Sign In</Button>
                            : <Button onClick={handleLogout} LinkComponent={Link} to="/login" color="inherit">Log out</Button>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
