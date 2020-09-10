import React, {useEffect, useState} from 'react';
import myserver from '../api/myserver';
import {  setRecentTrends, addFilteredTweets, setFilteredTweets,setSelectedTrends, setRecentTweets, setLoading } from '../actions';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import List from './List';
import { Grid } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react'


const Dashboard = ({tweets, setRecentTrends, setSelectedTrends, setRecentTweets, addFilteredTweets, setFilteredTweets, setLoading}) =>{
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
        setFilteredTweets([]);
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
                addFilteredTweets(res.data.statuses);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
    return (
        <Container >
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4} style={{padding : "2em"}}>
                        <Sidebar active={active} setActive={setActive} onSubmit={onSubmit}/>
                    </Grid.Column>
                    <Grid.Column width={12} style={{padding : "4em", marginBottom : "10px !important"}}>
                        <List active={active} data={active==0 ? tweets.recent: tweets.filteredTweets}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}
    
const mapStateToProps = ({tweets}) => ({
    tweets
});

export default connect(mapStateToProps, {setLoading, setRecentTweets, addFilteredTweets, setFilteredTweets, setRecentTrends, setSelectedTrends})(Dashboard);