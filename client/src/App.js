import React, { Component } from 'react';
import Header from './components/header/Header'
import Headline from './components/headline/headline'
import CenteredGrid from './components/wrapper/wrapper'
import Login from './login'
import Home from "./home"
import fire from "./config/fire"
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import sportsInfo from './components/utils/API'
import { ListItemSecondaryAction } from '@material-ui/core';


class App extends Component {
  state = {
    odds: [],
    isLoaded: false,
  }

  componentDidMount = () => {
    this.authListener();
    fetch( 'https://api.the-odds-api.com/v3/odds?sport=basketball_nba&region=us&apiKey=472906afe7881a4b02da7ee4a812ecef')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          odds: json,
        })
      })
  }

  authListener = () => {
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

    var { isLoaded, odds } = this.state;

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    else {

      return (

        <div className="App">
          <ul>
              {odds.data.map(odds => (
                <li key={odds.id}>
                  {odds.teams}
                  {/* {odds.sites.odds} */}
                </li>
              ))}

          </ul>
          {/* {this.state.user ? (<Home />) : (<Login />)} */}
          <Header />
          <Headline />
          <CenteredGrid 
          
          />

        </div>



      );
    }

  }
}

export default App;
