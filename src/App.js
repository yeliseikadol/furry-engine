import * as React from 'react';
import CustomBtn from './components/CustomBtn';
import NavBar from './components/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Header from './components/Header';
import Form from './components/Form';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    }
  },
  typography: {
    fontFamily: "bc-novatica-cyr",
    h1: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.18,
      margin: '24px 0 12px',
    },
    logo: {
      fontSize: 20,
      fontWeight: 700,
      fontFamily: "bc-novatica-cyr",
    },
    body: {
      fontSize: 20,
      lineHeight: 1.5,
      fontFamily: "bc-novatica-cyr",
    },
    button: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.6,
      letterSpacing: 0,
      textTransform: "none",
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      }
    },
    TabBar: {
      defaultProps: {
        disableElevation: true,
      }
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Header logo="text"/>
      <Typography variant="h1">Hello, world</Typography>
      <CustomBtn txt="Press"/>
      <Form/>
    </ThemeProvider>
  )
}

export default App;
