import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../availitylogo.jpg';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class SignUp extends Component {
  render(){
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>

        <img href="https://www.availity.com" src={logo} className="App-logo" alt="logo" />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Confirm Email Address"
                name="email"
                autoComplete="email"
              />
              </Grid>
            </Grid>
            <Button
              onClick={this.props.handleNext}
              type="submit"
              variant="contained"
              color="primary">
              Next
            </Button>
            <Grid container justify="center">

            </Grid>
          </form>
        </div>
        <Box mt={5}>
        </Box>
      </Container>
    );
  }
}
export default SignUp;
