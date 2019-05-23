import React, {useState} from 'react';
import {Container,Header,Graph} from '../../component/index'

function Game(){
    return <Container>
        <Header value='积分小游戏' style={{color:'red'}}/>
        <Graph/>
        <Graph type='roundness' color='blue'/>
        <Graph type='triangle' color='red'/>
    </Container>
}

export default Game;