import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

export class Success extends React.Component {
    constructor(props) {
        super(props)
        // this.LogOut = this.LogOut.bind(this);
    };
    state = {
        user: 'ds',
    }
    LogOut = () => {
        sessionStorage.removeItem('User');
        sessionStorage.setItem('access', false);
        browserHistory.push('/');
    }
    render(){
        return (
                <div className="App">
                    <div className="App-intro">
                        <div className="App-title">Login Successful for {this.props.User}</div>
                        <br/>
                        <button onClick={this.LogOut}> Log out </button>
                    </div>
                </div>       
          )
    }
}

Success.propTypes = {
   User: PropTypes.string.isRequired,
}