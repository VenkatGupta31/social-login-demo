import { browserHistory } from 'react-router';

export const googleLogin = () => {
        let response = null;
        window.gapi.auth.signIn({
            callback: function(authResponse) {
                googleSignInCallback( authResponse )
            }.bind( this ),
            // callback: this.googleSignInCallback( authResponse ),
            clientid: "304555139752-4n7lud9k91lflbd998nlsqqj8rtjikg6.apps.googleusercontent.com", //Google client Id
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schema.org/AddAction",
            scope: "https://www.googleapis.com/auth/plus.login email"
        });
    }
    
    const googleSignInCallback = (e) => {
        if (e["status"]["signed_in"]) {
            console.log( 'token', e )
            window.gapi.client.load("plus", "v1", function() {
                if (e["access_token"]) {
                    getUserGoogleProfile( e["access_token"] )
                } else if (e["error"]) {
                    console.log('Import error', 'Error occured while importing data')
                }
            }.bind(this));
        } else {
            console.log('User not logged in.', e.status);
        }
    }

    const getUserGoogleProfile = accesstoken => {
        var e = window.gapi.client.plus.people.get({
            userId: "me"
        });
        e.execute(function(e) {
            if (e.error) {
                console.log('error-token', e.message);
                return
            } else if (e.id) {
                browserHistory.push('/Success');
                sessionStorage.setItem('User', e.url);
                sessionStorage.setItem('Access', true);
                alert("Successfull login from google : "+ e.displayName )
            }
        }.bind(this));
    }
