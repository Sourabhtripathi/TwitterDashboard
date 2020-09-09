import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import { Header } from 'semantic-ui-react'
import { Button, Icon,Input } from 'semantic-ui-react';
import myserver from '../api/myserver';
import {setFilteredTweets} from '../actions';

const Sidebar = ({active, setActive, trends, onSubmit, setFilteredTweets}) =>{
    const [modal, showModal] = useState(false);
    const [value, setValue] = useState('');
    useEffect(()=>{
        console.log("Sidebar mounted");
    },[]);

    const onSelect = (i) =>{
        setActive(i);
        if(i === 1){
            showModal(true);
        }else{
            showModal(false);
        }
    }

    const handleSearchChange = (e) => {
        setValue(e.currentTarget.value);
        console.log(e.currentTarget);
    }

    const onSearch = (e) => {
        e.preventDefault();
        setFilteredTweets([]);
        setValue('');
        let data = {
            screen_name : localStorage.screen_name,
            oauth_token : localStorage.oauth_token,
            oauth_token_secret : localStorage.oauth_token_secret,
            user_id : localStorage.user_id,
        }
        data.q = value;

        myserver.get("/search", {
            params : data
        }).then(res=>{
            console.log(res.data.statuses);
            setFilteredTweets(res.data.statuses);
            setActive(1);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div style={{height : "96vh", padding : "2em", position : "fixed",overflow : "scroll", width : "100%"}}>
            <Header >
                <Icon name='twitter' color="blue" />
                {localStorage.screen_name}
            </Header>
            <Button.Group>
                <Button color={active===0 ? "orange" : null} onClick={()=>{
                    onSelect(0);
                }} ><Icon name="home"/>Recent Tweets</Button>
                <Button.Or />
                <Button color={active===1 ? "green" : null} onClick={()=>{
                    onSelect(1);
                }} ><Icon name="filter"/>Filter</Button>
            </Button.Group>
            <form onSubmit={onSearch} style={{marginTop : "10px"}}>
                <Input icon='search' placeholder='Search...' value={value} onChange={handleSearchChange} />
            </form>
            {modal ? <Modal data={trends} modal = {modal} showModal={showModal} onSubmit={onSubmit}/>:null}
        </div>
    )
}

const mapStateToProps = ({tweets}) => ({
    trends : tweets.trends
});

export default connect(mapStateToProps , {setFilteredTweets})(Sidebar);