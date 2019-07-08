import React, {PureComponent} from 'react';
import ChildrenComponent from "./ChildrenComponent";

class ReactHome extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            num:1
        };
        console.log('parent','constructor');
    }

    componentWillMount() {
        console.log( 'parent','componentWillMount',);
    }

    componentDidMount() {
        this.setState({num:2});
        console.log('parent','componentDidMount');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('parent','componentWillReceiveProps');
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('parent','componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('parent','componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('parent','componentWillUnmount');
    }
    
    render() {
        console.log('parent','render');
        return (
            <ChildrenComponent num={this.state.num}/>
        );
    }
}

export default ReactHome;

//生命周期总结【分为Mount,Update,UnMount三大阶段】
//1.Mount阶段：先进行父级组件的Mount，父级组件加载到render阶段会将子级组件的Mount阶段一次完成，最后执行父级的DidMount周期
//2.Update阶段：
    //- 如果是子级组件state更新，会执行WillUpdate、render、DidUpdate三个更新阶段生命周期，父级组件无变化
    //- 如果是父级state更新，会先执行父级组件的Update【WillUpdate,render】，执行到render阶段会仅执行子级的willReceiveProps周期【如果将state作为props传递给子级，那么子级在willReceiveProps周期之后会再执行WillUpdate、render、DidUpdate】，最后执行父级的DidUpdate周期
//3.UnMount阶段：父级先UnMount，然后子级UnMount
