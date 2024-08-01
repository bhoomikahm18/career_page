import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'

export default function Navbar() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Careers
                        </Typography>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Register</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
