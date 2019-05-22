import React from 'react';
import {Container,Header,Graph} from '../component/index'

function Demo(){
    return <Container>
        <Header value='标题' style={{color:'red'}}/>
        <Graph/>
        <Graph type='roundness' color='blue'/>
        <Graph type='triangle' color='red'/>
    </Container>
}

export default Demo;