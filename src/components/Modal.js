import React, {useEffect} from 'react';
import '../stylesheets/Modal.css';
import { setSelectedTrends } from '../actions';
import {connect} from 'react-redux';
import { Button, Icon, List, Modal, Grid,Checkbox } from 'semantic-ui-react'


const ModalParent = ({data, setSelectedTrends, showModal, onSubmit, modal}) =>{
    useEffect(()=>{
        console.log("ModalParent mounted");
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
        <Modal
            open={modal}
            onClose={() => showModal(false)}
            onOpen={() => showModal(true)}
            >
            <Modal.Header>Trending Topics</Modal.Header>
            <Modal.Content scrolling>
            <List animated>
                <Grid columns={3}>
                        {data.map((trend, index)=>{
                            if(trend.name[0] === "#")
                            return(
                                <Grid.Column>
                                <List.Item key={index}>
                                    <Checkbox label={trend.name.substring(1)} onClick={(e)=>{
                                        onTrendSelect(e, trend.name.substring(1));
                                    }}/>
                                </List.Item>
                            </Grid.Column>
                        )})}
                </Grid>
                
            </List>
            </Modal.Content> 
            <Modal.Actions>
                <Button onClick={onFilter} primary>
                Filter <Icon name='chevron right' />
                </Button>
            </Modal.Actions>
            
        </Modal>
        // <div>
        //     <h1>ModalParent</h1>
            // <ul>
            // {data.map((trend, index)=>{
            //     if(trend.name[0] === "#")
            //     return(
            //     <li key={index}>
            //         <button onClick={(e)=>{
            //             onTrendSelect(e, trend.name.substring(1));
            //         }}>{trend.name.substring(1)}</button>
            //     </li>
            // )})}
            // </ul>
        //     <button onClick={onFilter}>Filter</button>
        // </div>
    )
}

export default connect(null, {setSelectedTrends})(ModalParent);