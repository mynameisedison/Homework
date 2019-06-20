import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../availitylogo.jpg';
import '../App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class FrontPage extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          spacing={3}
          >
          <img href="https://www.availity.com" src={logo} className="App-logo" alt="logo" />

          <Button
            style={{backgroundColor: "#ff6f00"}}
            variant="contained" color="primary" className={Button}>
              Register
          </Button>
          <a
            className="App-link"
            href="https://www.availity.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login?
          </a>
          </Grid>
        </header>
      </div>
    );
  }
}
export default FrontPage;
