import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../stylesheets/Modal.css';
import { setSelectedTrends, setLoading } from '../actions';
import {connect} from 'react-redux';

const Modal = ({data, setSelectedTrends, showModal, onSubmit}) =>{
    useEffect(()=>{
        console.log("Modal mounted");
    },[]);

    const onTrendSelect = (e, name) =>{
        setSelectedTrends(name);
        e.currentTarget.classList.toggle("selected");
    }

    const onFilter = () => {
        showModal(false);
        onSubmit();
    }

    return (
        <div>
            <h1>Modal</h1>
            <ul>
            {data.map((trend, index)=>{
                if(trend.name[0] === "#")
                return(
                <li key={index}>
                    <button onClick={(e)=>{
                        onTrendSelect(e, trend.name.substring(1));
                    }}>{trend.name.substring(1)}</button>
                </li>
            )})}
            </ul>
            <button onClick={onFilter}>Filter</button>
        </div>
    )
}

export default connect(null, {setSelectedTrends})(Modal);