import React, { Component } from 'react'
import fire from './config/fire';

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    login = (e) => {
            e.preventDefault();
            fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            }).catch((error) => {
                console.log(error);
            });
        }
       


    handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        }

    render() {
            return (
                <div className="col-md-6">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                                class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                placeholder="Enter Email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input value={this.state.password} onChange={this.handleChange} type="password"
                                name="password" class="form-control" id="exampleInputPassword1" placeholder="password" />
                        </div>

                        <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                    </form>

                </div>
            );
        }
    }

    export default Login