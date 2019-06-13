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

//高阶组件的意义之一在于将公共的逻辑或状态抽取出来，这样可以将不同的功能进行组成，使得代码具有更高的复用性
//react中组件一般可分为四种类型表现型/无状态，容器型/独立状态，HOC/公共状态，render props
//react的哲学是F(state)=UI 推崇的是Functional Programming,而HOC与Render Props正式其思想的体现
//HOC是将公共部分抽取出来，将不同的部分作为参数传入形成一个新组件，其优点在于更高的复用性，而且由于HOC传出的还是组件，所以可以实现HOC1(HOC2(HOC3(HOC4))))这种多个公共功能复用的情形，然而缺点是其多层嵌套造成的生命周期会很复杂。。。【HOC可以简单理解成一条流水加工线，根据不同场景的需求进行功能加工，在加工的最底层是仅用于展示的表现型组件(仅需专注于描述依据props所应当呈现的View)】

//待理解：
//render props核心思想是通过一个函数将class组件的state作为props传递给纯函数组件【关键点在于动态的state】，我认为react-router的Route可能就是这种组件，Render Props是一个函数，其任何作为其render的函数都有能力从其他地方得到渲染所需要的资料】
//render props的优点是所有变化都是在底层组件发生的，所以生命周期相对HOC处理起来比较简单，缺点可能是处理同样的逻辑代码量会比HOC多不少吧