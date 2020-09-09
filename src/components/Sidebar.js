import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from './Modal';

const displayOptions = ['Recent Tweets', 'FilterTweets'];
const Sidebar = ({active, setActive, trends, onSubmit}) =>{
    const [modal, showModal] = useState(false);
    useEffect(()=>{
        console.log("Sidebar mounted");
    },[]);

    const onSelect = (i) =>{
        setActive(i);
        if(i == 1){
            showModal(true);
        }else{
            showModal(false);
        }
    }


    return (
        <div>
            <h1>Display options</h1>
            <ul>
            {displayOptions.map((optn, index)=>(
                <li key={index}>
                    <button onClick={()=>{
                        onSelect(index);
                    }}>{optn}</button>
                </li>
            ))}
            </ul>
            {modal ? <Modal data={trends} showModal={showModal} onSubmit={onSubmit}/>:null}
        </div>
    )
}

const mapStateToProps = ({tweets}) => ({
    trends : tweets.trends
});

export default connect(mapStateToProps)(Sidebar);