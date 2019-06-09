import React, {PureComponent} from 'react';

class ChildrenComponent extends PureComponent {
    constructor(props) {
        super(props);
        console.log('constructor', 'child');
    }

    componentWillMount() {
        console.log('componentWillMount', 'child');
    }

    componentDidMount() {
        console.log('componentDidMount', 'child');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps', 'child');
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate', 'child');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', 'child');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount', 'child');
    }

    render() {
        console.log('render', 'child');
        return (
            <div>
                子组件
            </div>
        );
    }
}

export default ChildrenComponent;