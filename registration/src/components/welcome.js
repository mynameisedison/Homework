import React, { Component } from 'react'
import '../App.css'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography';

class Welcome extends Component {
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
              <Typography id="Typography" component="h3" variant="h4" >
                Thanks for choosing Availity!
              </Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={this.props.handleRegisterClick}
                style={{backgroundColor: "#ff6f00"}}
                variant="contained" color="primary" className={Button}>
                  Click here to get started
              </Button>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" style={{color: "grey"}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
// style={{color: "#898d8e"}}
    );
  }
}
export default Welcome
