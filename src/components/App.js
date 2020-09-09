import React, {useEffect} from 'react';
import Dashboard from './Dashboard';
import Landing from './Landing';
import {connect} from 'react-redux'
import {setLoading, loginUser} from '../actions';
import {configureAuth} from '../helper';
import "../stylesheets/App.css";
import 'semantic-ui-css/semantic.min.css';

const App = ({auth, setLoading, loginUser}) =>{
    useEffect(()=>{
        configureAuth(setLoading, loginUser);
    },[auth.isAuthenticated]);

    if(auth.loading) return <div>Loading...</div>
    if(auth.isAuthenticated) return <Dashboard />
    return <Landing />
}

const mapStateToProps = ({auth}) => ({
    auth : auth
});

export default connect(mapStateToProps, { setLoading, loginUser })(App);