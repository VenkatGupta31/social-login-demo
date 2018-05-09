import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, DefaultRoute } from "react-router-dom";
import { Login } from "./login";
import { Success } from "./success";
import logo from './assets/logo.svg';
import './App.css';


class Home extends React.Component {
    render(){
        return (
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Login Demonstration</h1>
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                    {this.props.children}
                </div>       
          )
    }
}

class App extends React.Component{
    constructor(props) {
        super(props)
    };
    state = {
        User: sessionStorage.getItem('User'),
    }

    render() {
        return (
                <BrowserRouter>
                        <Home>
                            <br/>
                            <Route exact path="/" component={Login} />
                            <Route path="/Success" render={ props => ( <Success {...this.state} />) } /> 
                        </Home>
                </BrowserRouter>
        );
    }
}

export default App;
