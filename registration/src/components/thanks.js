import React, { Component } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

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
            <Typography id="Typography" component="h1" variant="h4">
              Thanks! You have registered with Availity!
            </Typography>
          </Grid>
          <Grid item>
            <Typography id="Typography" component="h1" variant="h4">
              An imaginary email will be sent to your inbox shortly.
            </Typography>
          </Grid>
          <Grid item>
            <Button
                  onClick={this.props.handleRestart}
                  style={{backgroundColor: "#ff6f00"}}
                  variant="contained" color="primary" className={Button}
                  href="localhost:3000">
                    Click here to start over
            </Button>
          </Grid>
        </Grid>

    );
  }
}
export default Thanks;
