import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


const List = ({active, data}) =>{
    useEffect(()=>{
        console.log("List mounted");
        
    },[]);
    console.log(data);
    return (
        <div>
            <h1>{active===0 ? "Recent Tweets": "Filtered Data"}</h1>
            <ul>
            {data.map((tweet, index)=>(
                <li key={index}>
                    {tweet.text}
                </li>
            ))}
            </ul>
            
        </div>
    )
}

export default (List);