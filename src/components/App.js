import React, {useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Landing from './Landing';
import {connect} from 'react-redux'
import {setLoading, loginUser} from '../actions';
import {configureAuth} from '../helper';

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