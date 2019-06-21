import React, { Component } from 'react';
import FrontPage from './components/frontpage'
import SignUp from './components/signup'
import { makeStyles } from '@material-ui/core/styles';
import logo from './availitylogo.jpg';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class App extends Component{
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state={
      firstAndLastName:"",
      npiNumber:"",
      businessAdress:"",
      phone:"",
      email:"",
      submitted: false
    }
  }
  handleChange(event){
    this.setState({firstAndLastName: event.target.value})
  }
  handleSubmit(event){
    this.setState({submitted: true});
    console.log(this.state.submitted);
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          {this.state.submitted ? <SignUp/>:<FrontPage handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>}
        </header>
      </div>
    );
  }
}

export default App;
