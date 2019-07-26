import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import grey from '@material-ui/core/colors/grey';

import './App.css';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: grey[900]
    }
  }
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Container maxWidth='md'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
};

export default App;
