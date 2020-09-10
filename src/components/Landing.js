import React from 'react';
import {connect} from 'react-redux'
import TwitterLogin from 'react-twitter-login';
import {setLocalStorage} from '../helper';
import {setLoading, loginUser} from '../actions';
import {clientUrl} from '../gloabal_var';

const Landing = ({setLoading, loginUser}) =>{ 

    const authHandler = (err, data) => {
        setLoading(true);
        console.log(data);
        if(err){
            alert(err);
        }else{
            setLocalStorage(data);
            loginUser(data.user_id);
        }
    };

    return (
        <div>
            <h1>Landing</h1>
            <TwitterLogin
            authCallback={authHandler}
            consumerKey="xb1AisISE9fAYqpEIcZFDEEuj"
            consumerSecret="9OcMN8dDKSYDgSjF3LMNwrSybUN9bLIPtqA8XOwmpF2DJ5GODm"
            callbackUrl={clientUrl}
            />
        </div>
    )
}

export default connect(null, {setLoading, loginUser})(Landing);