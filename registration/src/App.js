import React, { Component } from 'react';
import FrontPage from './components/frontpage'
import SignUp from './components/signup'
import PageThree from './components/pagethree'
import { makeStyles } from '@material-ui/core/styles';
import logo from './availitylogo.jpg';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class App extends Component{
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleNext = this.handleNext.bind(this);


    this.state={
      fullName:"",
      npiNumber:"",
      businessAddress:"",
      phone:"",
      email:"",
      pageZero: true,
      pageOne: false,
      pageTwo: false,
      pageThree: false,
      pageFour: false
    }
  }
  handleName(event){
    this.setState({fullName: event.target.value})
  }
  handleRegisterClick(event){
    this.setState({pageOne: true});
  }
  handleNext(event){
    this.setState({pageOne: null, pageTwo:true})
  }
  render(){

    let thing
    if(this.state.pageOne){
      thing = <SignUp handleNext={this.handleNext} handleName={this.handleName}/>
    }
    else if(this.state.pageTwo){
      thing = <PageThree/>
    }
    else thing = <FrontPage handleRegisterClick={this.handleRegisterClick}/>

    return (
      <div className="App">
        <header className="App-header">
          {thing}
        </header>
      </div>
    );
  }
}

export default App;
