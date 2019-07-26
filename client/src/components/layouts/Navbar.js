import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Navbar = () => {
  return (
    <div className='navbar'>
      <AppBar color='secondary' position='sticky'>
        <Toolbar>
          <Grid
            container
            alignItems='center'
            justify='space-between'
            direction='row'
            className='navBarContainer'
          >
            <Grid item>
              <Typography
                component={Link}
                style={{ textDecoration: 'none', textAlign: 'center' }}
                color='inherit'
                variant='h4'
                to='/'
              >
                Donald Pham
              </Typography>
            </Grid>
            <Grid item>
              <Button component={Link} color='inherit' to='/resume'>
                Resume
              </Button>
              <Button component={Link} color='inherit' to='/projects'>
                Projects
              </Button>
              <Button component={Link} color='inherit' to='/contact'>
                Contact
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
