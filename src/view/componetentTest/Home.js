import React from 'react';
import {Container, Header, Graph, Calendar, Button,Input} from '../../component'

function Home(){
    return <Container>
        <Header value='标题' style={{color:'red'}}/>

        <div>
            <Graph/>
            <Graph type='roundness' color='blue'/>
            <Graph type='triangle' color='red'/>
        </div>

        <div className="buttonTest">
            <Button/>
            <Button>Button_text</Button>
            <Button type='primary'>Button_primary</Button>
        </div>

        <Input style={{padding:10}}/>

        <Calendar/>
    </Container>
}

export default Home;