import React, {PureComponent} from 'react';

class ChildrenComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            childNum:100,
            // parentNum:0,
        };
        console.log('child','constructor' );
    }

    componentWillMount() {
        console.log('child','componentWillMount');
    }

    componentDidMount() {
        // this.setState({childNum:99});
        console.log('child','componentDidMount');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        // this.setState({parentNum:this.props.num});
        console.log('child','componentWillReceiveProps');
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('child','componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('child','componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('child','componentWillUnmount');
    }

    render() {
        console.log('child','render');
        return (
            <div>
                子组件
            </div>
        );
    }
}

export default ChildrenComponent;