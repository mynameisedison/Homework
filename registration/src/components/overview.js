import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class OverView extends Component {
  render(){
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
        <img href="https://www.availity.com" src={logo} className="App-logo" alt="logo" />
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <List>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                Name: {this.props.name}
              </Grid>
              <Grid item xs={12}>
                Phone Number: {this.props.phone}
              </Grid>
              <Grid item xs={12}>
                Email: {this.props.email}
              </Grid>
              <Grid item xs={12}>
                Address: {this.props.businessAddress}
              </Grid>
              <Grid item xs={12}>
              NPI Number: {this.props.npiNumber}
              </Grid>
            </Grid>
            <Typography component="h1" variant="h6">
              Everything look good?
            </Typography>
            <Button
              onClick={this.props.handleSubmit}
              type="submit"
              variant="contained"
              color="primary">
              Submit
            </Button>
          </List>
        </div>
      </Container>
    );
  }
}
export default OverView;
