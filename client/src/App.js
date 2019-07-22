import React from 'react';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: grey[900]
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
