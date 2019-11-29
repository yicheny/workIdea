import React,{Component} from 'react';
import './MoreLevelHeight.less';
import {Container, TableW} from "../../../component";

class Child extends Component{
    render() {
        return <div className="box2">
            <div className="box3">
                <div className="box4">
                    <TableW/>
                </div>
            </div>
        </div>
    }
}

class MoreLevelHeight extends Component {
    render() {
        return <Container header='more_level_height'>
            <div className="more_level_height">
                <div className="box1" style={{height:300}}>
                    <Child/>
                </div>
            </div>
        </Container>
    }
}

export default MoreLevelHeight;

