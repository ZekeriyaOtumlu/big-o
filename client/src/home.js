import React, { Component } from 'react'
import fire from './config/fire';

class Home extends Component {
    logOut = () => {
        fire.auth().signOut();
     }

    render() {
        return (
            <div className="col-md-6">
                <h1>You are Home</h1>
                <button onClick={this.logOut}>Logout</button>
            </div>


        )
    }
}

export default Home;