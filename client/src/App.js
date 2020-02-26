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
import json from './components/results/results.json'

class App extends Component {
  state = {
    matchup: [],
    isLoaded: false,
  }

  // componentDidMount = () => {
  //   this.authListener();
  //   fetch( 'https://api.the-odds-api.com/v3/odds?sport=basketball_nba&region=us&mkt=spreads&apiKey=fbf453c4368699f118ccfd0e8ddefe51')
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         isLoaded: true,
  //         matchup: json,
  //       })
  //     })
  // }

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
    console.log(json)


    // var { isLoaded, matchup } = this.state;

    // if (!isLoaded) {
    //     return <div>Loading...</div>;
    // }

    // else {

      return (

        <div className="App">
    
          {/* {this.state.user ? (<Home />) : (<Login />)} */}
          <Header />
          <Headline />
           <ul>
              {json.data.map(res => (
                <li key={res.id}>
                   <b>Teams:</b> {res.teams[0]} vs {res.teams[1]} <b>Spread</b>  ,  {res.sites[0].odds.spreads.points[0]}  {res.sites[0].odds.spreads.points[1]}


                  {/* {odds.sites.odds} */}
                </li>
              ))}

          </ul>
          
          />

        </div>



      );
    }

  }


export default App;
