import * as React from 'react';
import Typography from "@mui/material/Typography"

function Header(props) {
    return (
        <div className="header">
            <Typography variant="logo">{props.logo}</Typography>
        </div>
    )
}

export default Header
