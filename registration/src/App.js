import React, { Component } from 'react';
import FrontPage from './components/frontpage'

import { makeStyles } from '@material-ui/core/styles';
import logo from './availitylogo.jpg';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class App extends Component{
  render(){
    return (
      <FrontPage/>
    );
  }
}

export default App;
