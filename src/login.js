import React from "react";
import { render } from "react-dom";
import { Button, Icon } from 'semantic-ui-react'
import * as fbHelper from './helpers/fbLogin';
import * as googleHelper from './helpers/googleHelper';
import './App.css';


export class Login extends React.Component {
    componentDidMount(){
        // Load the required SDK asynchronously for facebook, google and linkedin
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=1805576389493183&autoLogAppEvents=1";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        
        window.fbAsyncInit = function() {
            window.FB.init({
              appId      : '1805576389493183',
              cookie     : true,  // enable cookies to allow the server to access the session
              xfbml      : true,  // parse social plugins on this page
              version    : 'v2.1' // use version 2.1
            });
        };

        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/client:platform.js";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        })(); 
    }

    render() {
        return (
            <div className="App">
                <Button color='facebook' onClick= {fbHelper.facebookLogin}>
                    <Icon name='facebook' /> Login with Facebook
                </Button>
                <Button color='google plus' onClick= {googleHelper.googleLogin}>
                    <Icon name='google' /> Login with Google
                </Button>
          </div>
        );
    }
}