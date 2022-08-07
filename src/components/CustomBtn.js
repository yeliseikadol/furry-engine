import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "44px",
    padding: "0 16px",
    boxSizing: "border-box",
    borderRadius: 8, 
    color: "#fff",
    transform: "none",
    transition: "background .3s,border-color .3s,color .3s",
  });

function CustomBtn(props){
    return <StyledButton variant="contained" disableElevation>{props.txt}</StyledButton>
}

export default CustomBtn