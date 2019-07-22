import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Navbar = () => {
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <Typography style={{ flexGrow: 1 }} variant='h5' color='inherit'>
            My Website
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
