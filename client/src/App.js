import React, { Component } from 'react';
import Header from './components/header/Header'
import Headline from './components/headline/headline'
import CenteredGrid from './components/wrapper/wrapper'
import Login from './login'
import Home from "./home"
import fire from "./config/fire"
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import sportsInfo from './components/utils/API'


class App extends Component {
 state = {
      user: {},
    }
  
  componentDidMount = ()=> {
    this.authListener();
  }

  authListener = ()=> {
    fire.auth().onAuthStateChanged((user) => {

      if (user) {
        console.log(user)
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }


  render() {
    return (

      <div className="App">
        {/* {this.state.user ? (<Home />) : (<Login />)} */}
        <Header />
        <Headline />
        <CenteredGrid />

      </div>



    );
  }

}

export default App;
