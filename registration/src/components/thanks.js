import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../availitylogo.jpg';
import '../App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';



class Thanks extends Component {
  render(){
    return (
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          spacing={3}
          >

          <Grid item>
          <Typography component="h1" variant="h3">
          Thanks! You have registerred with
          </Typography>
          </Grid>

          <Grid item>
            <img href="https://www.availity.com" src={logo} className="App-logo" alt="logo" />
          </Grid>

          <Grid item>
            <Typography component="h1" variant="h4">
            An imaginary email will be sent to your inbox shortly.
            </Typography>
          </Grid>
          </Grid>

    );
  }
}
export default Thanks;
