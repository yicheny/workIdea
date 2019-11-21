import React, {Component} from 'react';
import {Button, Container} from "../../../../component";

class Child extends Component {
    constructor(props){
        super(props);
        this.state = {
            state:1
        };
        console.log('Child--constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Child--getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Child--shouldComponentUpdate');
        return true;
    }

    render() {
        const {state} = this.state;
        console.log('Child--Render');
        return <div>
            <Button type='primary' onClick={()=>this.handleClick()}>点击ChildState增加</Button>
            <span style={{'fontSize':24}}>{state}</span>
        </div>
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Child--getSnapshotBeforeUpdate');
        return null;
    }

    componentDidMount() {
        console.log('Child--componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Child--componentDidUpdate');
    }

    handleClick = ()=>{
        const state = this.state.state+1;
        this.setState({state})
    }
}

class UseStateDemo_C extends Component {
    constructor(props){
        super(props);
        this.state = {
            state:'A'
        }
    }

    render() {
        const {state} = this.state;
        return <Container header='UseStateDemo_C'>
            <div style={{marginBottom:32}}>
                <Button type='primary' onClick={()=>this.handleClick()}>点击切换Demo状态</Button>
                <span style={{'fontSize':21}}>{state}</span>
            </div>
            <Child/>
        </Container>
    }

    handleClick = ()=>{
        const state = (this.state.state==='A'?'B':'A');
        this.setState({state})
    }
}

export default UseStateDemo_C;