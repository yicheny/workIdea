import React from 'react';
import {Container, Header, Graph, Calendar, Button} from '../../component'

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

        <Calendar/>
    </Container>
}

export default Home;