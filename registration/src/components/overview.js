import React, {Component} from 'react';
import '../App.css'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Overview extends Component {
  render(){
    return (
      <Container component="main" maxWidth="sm">
        <div>
          <Box mb={4}>
            <Typography id="Typography" component="h1" variant="h5">
              Sign up
            </Typography>
          </Box>
          <Grid container spacing={2} alignItems="center" justify="flex-start">
            <Grid item xs={12}>
              <Typography id="Typography" component="h2" variant="h6">
                <List alignItems="flex-start" justifyContent="center">
                  <ListItem id="ListItem">
                    <b>
                      Name:
                    </b>
                    <Box ml={2}>
                      {this.props.name}
                    </Box>
                  </ListItem>
                  <ListItem id="ListItem">
                    <b>
                      Phone Number:
                    </b>
                    <Box ml={2}>
                      {this.props.phone}
                    </Box>
                  </ListItem>
                  <ListItem id="ListItem">
                    <b>
                      Email:
                    </b>
                    <Box ml={2}>
                    {this.props.email}
                    </Box>
                  </ListItem>
                  <ListItem id="ListItem">
                    <b>
                      Address
                    </b>
                    <Box ml={2}>
                      {this.props.businessAddress}
                    </Box>
                  </ListItem>
                  <ListItem id="ListItem">
                    <b>
                      NPI Number:
                    </b>
                    <Box ml={2}>
                      {this.props.npiNumber}
                    </Box>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
          </Grid>
          <Box mt={4}>
            <Typography id="Typography" component="h1" variant="h5">
              Everything look good?
            </Typography>
          </Box>
          <Box mt={4}>
            <Button
              style={{backgroundColor: "#ff6f00"}}
              onClick={this.props.handleSubmit}
              type="submit"
              variant="contained"
              color="primary">
                Submit
            </Button>
          </Box>
        </div>
      </Container>
    );
  }
}
export default Overview;