import React, {useEffect, useState} from 'react';
import { List, Item, Card } from 'semantic-ui-react';

const DisplayList = ({active, data}) =>{
    useEffect(()=>{
        console.log("List mounted");
        
    },[]);
    console.log(data);
    return (
        <div style={{height : "95vh", width : "67%",position : "fixed", overflow : "scroll", padding : "1em"}}>
            <h1>{active===0 ? "Recent Tweets": "Filtered Tweets"}</h1>
                {data.map((tweet, index)=>(
                         <Card key={index} style={{width : "96%"}}>
                             <Card.Content>
                                <Item.Header>{tweet.text}</Item.Header>
                                <Item.Extra>retweets : {tweet.retweet_count}</Item.Extra>
                                <Item.Extra>{tweet.user.name}</Item.Extra>
                             </Card.Content>
                         </Card>                        
                ))}            
        </div>
    )
}

export default (DisplayList);