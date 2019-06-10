import React from 'react';

//被传入的一般组件
const TestComponent = (props)=> {
    return <div>TestComponent {props.name}</div>;
};

//属性代理
const HOC = (WrappedComponent) => (props) => {
        const newProps = {
            name:'hoc'
        };
        return <WrappedComponent {...props} {...newProps}/> //方便操作props
    };

export default HOC(TestComponent);