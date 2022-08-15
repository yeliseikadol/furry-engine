import * as React from 'react';
import AppBar from '@mui/material/AppBar'; 
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

function NavBar(){
    return (
        <Box>
            <AppBar position="static" elevation={0} color="transparent">
                <Toolbar sx={{ flexGrow: 1, justifyContent: "space-between" }}>
                    <logo>bootcamp.by</logo>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar