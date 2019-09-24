import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../availitylogo.jpg'
import '../App.css'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'


class FrontPage extends Component {
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
          <img href="https://www.availity.com" src={logo} className="App-logo" alt="logo" />
          </Grid>
          <Grid item>
          <Button
            onClick={this.props.handleRegisterClick}
            style={{backgroundColor: "#ff6f00"}}
            variant="contained" color="primary" className={Button}>
              Register
          </Button>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" style={{color: "grey"}}>
              Already have an account? Sign in
            </Link>
          </Grid>
          </Grid>

    );
  }
}
export default FrontPage
