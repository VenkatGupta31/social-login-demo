import { browserHistory } from 'react-router';

export const facebookLogin = () => {
    // window.FB.login(
    //     checkLoginState(), 
    //     { scope : 'email, public_profile' } 
    // );
    window.FB.login(
        function(resp){
            statusChangeCallback(resp);
        }.bind(this),{ scope : 'email, public_profile' });
}

const checkLoginState = () => {
    window.FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    }.bind(this));
}

const statusChangeCallback = (response) => {
    console.log('fb-response', response);
    if (response.status === 'connected') {
        fetchDataFacebook();
    } else if (response.status === 'not_authorized') {
        alert('Not Authorized app to import data.')
    } else {
        alert('No response fron the user.')
    }
}

const fetchDataFacebook = () => {
    window.FB.api('/me', function(user) {
        browserHistory.push('/Success');
        sessionStorage.setItem('User', user.name);
        sessionStorage.setItem('Access', true);
        alert( 'Successful login for: ' + user.name );
    });
}
