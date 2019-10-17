import React from 'react';
import {Container, Icon} from "../../../component";

function Item(props) {
    const {name} = props;
    return <div className='flex-y center' style={{margin:'6px 12px'}}>
        <Icon type={name}/>
        <span>{name}</span>
    </div>
}

function IconDemo(props) {
    return <Container header='IconDemo' >
        <div className="flex">
            <Item name='info'/>
            <Item name='cancel'/>
            <Item name='arrowDown'/>
            <Item name='error'/>
            <Item name='success'/>
            <Item name='warn'/>
            <Item name='user'/>
            <Item name='lock'/>
            <Item name='unlock'/>
            <Item name='zhankai'/>
            <Item name='shousuo'/>
            <Item name='star'/>
        </div>
    </Container>
}

export default IconDemo;