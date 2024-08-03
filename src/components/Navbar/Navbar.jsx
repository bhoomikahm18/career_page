import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    function handleLogout() {
        localStorage.clear();
        props.setIsLogin(false);
    }

    return (
        <div >
            <Box position="sticky" sx={{ flexGrow: 1}}>
                <AppBar position='sticky' sx={{ bgcolor: '#ffffff' }}>
                    <Toolbar>
                        <Typography component="div" sx={{ flexGrow: 1 }}>
                            <img src='https://www.websmartindia.com/images/logo-1.png' alt='company_logo'/>
                        </Typography>
                        {/* <Button LinkComponent={Link} to="/register" color="inherit">Register</Button> */}
                        <Button LinkComponent={Link} to="/jobList" >Find Jobs</Button>
                        <Button LinkComponent={Link} to="/" >About Us</Button>
                        <Button LinkComponent={Link} to="/contact" >Contact Us</Button>
                        {!props.isLogin ?
                            <Button LinkComponent={Link} to="/login" >Sign In</Button>
                            : <Button onClick={handleLogout} LinkComponent={Link} to="/login" >Log out</Button>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
