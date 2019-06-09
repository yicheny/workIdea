import React, {PureComponent} from 'react';
import ChildrenComponent from "./ChildrenComponent";

class ParentComponent extends PureComponent {
    constructor(props) {
        super(props);
        console.log('constructor', 'parent');
    }

    componentWillMount() {
        console.log('componentWillMount', 'parent');
    }

    componentDidMount() {
        console.log('componentDidMount', 'parent');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps', 'parent');
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate', 'parent');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', 'parent');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount', 'parent');
    }
    
    render() {
        console.log('render', 'parent');
        return (
            <ChildrenComponent/>
        );
    }
}

export default ParentComponent;