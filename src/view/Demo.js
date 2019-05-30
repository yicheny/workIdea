import React from 'react';
import {Container,Header,Graph,Calendar} from '../component/index'

function Demo(){
    return <Container>
        <Header value='标题' style={{color:'red'}}/>
        <Graph/>
        <Graph type='roundness' color='blue'/>
        <Graph type='triangle' color='red'/>
        <Calendar/>
    </Container>
}

export default Demo;