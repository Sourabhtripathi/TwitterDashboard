import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import myserver from '../api/myserver';
import {  setRecentTrends, setFilteredTweets,setSelectedTrends, setRecentTweets, setLoading } from '../actions';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import List from './List';

const Dashboard = ({tweets, setRecentTrends, setSelectedTrends, setRecentTweets, setFilteredTweets, setLoading}) =>{
    const [active, setActive] = useState(0);
    
    useEffect(()=>{
    }, [active]);
    
    useEffect(()=>{
        console.log("dashboard mounted");
        let data = {
            screen_name : localStorage.screen_name,
            oauth_token : localStorage.oauth_token,
            oauth_token_secret : localStorage.oauth_token_secret,
            user_id : localStorage.user_id,
        }
        myserver.get("/get_tweets", {
                params : data
            }).then(res=>{
            console.log(res.data);
            setRecentTweets(res.data);
        });

        myserver.get("/get_trends", {
            params : data
        }).then(res=>{
            console.log(res.data[0].trends);
            setRecentTrends(res.data[0].trends);
        });
    },[]);

    const onSubmit = () => {
        let data = {
            screen_name : localStorage.screen_name,
            oauth_token : localStorage.oauth_token,
            oauth_token_secret : localStorage.oauth_token_secret,
            user_id : localStorage.user_id,
        }

        let i;
        console.log(tweets.selectedTrends)
        for (i = 0; i < tweets.selectedTrends.length; i++) {
            data.q = tweets.selectedTrends[i];
            myserver.get("/search", {
                params : data
            }).then(res=>{
                console.log(res.data.statuses);
                setFilteredTweets(res.data.statuses);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
    return (
        <div>
            <Sidebar active={active} setActive={setActive} onSubmit={onSubmit}/>
            <List active={active} data={active==0 ? tweets.recent: tweets.filteredTweets}/>
        </div>
    )
}
    
const mapStateToProps = ({tweets}) => ({
    tweets
});

export default connect(mapStateToProps, {setLoading, setRecentTweets, setFilteredTweets, setRecentTrends, setSelectedTrends})(Dashboard);