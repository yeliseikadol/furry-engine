import * as React from 'react';
import AppBar from '@mui/material/AppBar'; 
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomBtn from './CustomBtn';

function NavBar(){
    return (
        <Box>
            <AppBar position="static" elevation={0} color="transparent">
                <Toolbar sx={{ flexGrow: 1, justifyContent: "space-between" }}>
                    <Typography variant="logo">bootcamp.by</Typography>
                    <CustomBtn txt="Поступить"/>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar