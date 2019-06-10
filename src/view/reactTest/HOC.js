import React from 'react';

//被传入的一般组件
const TestComponent = (props)=> {
    return <div>TestComponent {props.name}</div>;
};

//属性代理
const HOC = (WrappedComponent) => (props) => {
        const { extraProp, ...passThroughProps } = props;// 过滤掉非此 HOC 额外的 props，且不要进行透传
        const newProps = {// 将 props 注入到被包装的组件中。——通常为 state 的值或者实例方法。
            name:'hoc'
        };
        return <WrappedComponent {...passThroughProps} {...newProps}/> //方便操作props
    };

export default HOC(TestComponent);