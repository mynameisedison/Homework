import React, { Component } from 'react';
import FrontPage from './components/frontpage'
import SignUp from './components/signup'
import PageTwo from './components/pagetwo'
import OverView from './components/overview'
import Thanks from './components/thanks'
import { makeStyles } from '@material-ui/core/styles';
import logo from './availitylogo.jpg';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class App extends Component{
  constructor(props) {
    super(props)
    this.handleName = this.handleName.bind(this);
    this.handleNpi = this.handleNpi.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleNpi = this.handleNpi.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleNext1 = this.handleNext1.bind(this);

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
      pageFour: false,
      submitted:false
    }
  }
  handleName(event){
    this.setState({fullName: event.target.value})
  }
  handleNpi(event){
    this.setState({npiNumber: event.target.value})
  }
  handleAddress(event){
    this.setState({businessAddress: event.target.value})
  }
  handlePhone(event){
    this.setState({phone: event.target.value})
  }
  handleEmail(event){
    this.setState({email: event.target.value})
  }

  handleRegisterClick(event){
    this.setState({pageZero:null, pageOne: true});
  }
  handleNext(event){
    this.setState({pageOne:null, pageTwo:true})
  }
  handleNext1(event){
    this.setState({pageTwo:null, pageThree:true})
  }
  handleSubmit(event){
    this.setState({pageThree:null, submitted:true})
  }
  render(){

    let thing
    if(this.state.pageOne){
      thing = <SignUp handleNext={this.handleNext}
                      handleName={this.handleName}
                      handleEmail={this.handleEmail}/>
    }
    else if(this.state.pageTwo){
      thing = <PageTwo handleNext1={this.handleNext1}
                       handleNpi={this.handleNpi}
                       handleAddress={this.handleAddress}
                       handlePhone={this.handlePhone}/>
    }
    else if(this.state.pageThree){
      thing = <OverView name={this.state.fullName}
                        npiNumber={this.state.npiNumber}
                        email={this.state.email}
                        businessAddress={this.state.businessAddress}
                        phone={this.state.phone}
                        handleSubmit={this.handleSubmit}/>
    }
    else if(this.state.submitted){
      thing = <Thanks/>
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
