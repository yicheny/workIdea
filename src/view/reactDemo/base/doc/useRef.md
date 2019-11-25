[TOC]

# 型构
## 1.名称
`useRef`

## 2.参数
`initialValue` 传入值会被作为返回值`Ref对象`的`current`的初始属性值

## 3.返回值
`ref` 可变的ref对象，其`current`属性值为传入参数

# 使用场景
1. 访问Dom的方式
2. 变量盒子
> 返回值的ref对象在整个生命周期都存在，它可以方便的保存任何可变值，其作用相当于类组件中的实例属性

`useRef`和自建`{current:...}`的区别在于它在整个生命周期不会被销毁和重新创建，每次返回的都是同一个ref对象

`useRef`和`useState`、`useReducer`的区别在于，每次变化不会引起重新渲染

# 测量DOM节点
不能使用`useRef`，因为ref是一个对象，ref每次变化是不会通知我们的，官方推荐使用callback ref，即便子组件延迟变化，一旦节点更新，我们依旧可以在父组件接收到更新

## Callback ref实例
```
function UseRefDemo(props) {
    const [height, setHeight] = useState(0);

    const ref = useCallback(node => {
        if (node !== null) setHeight(node.getBoundingClientRect().height);
    }, []);

    return (<>
        <Child mRef={ref}/>
        {height>0 && <h2>The above header is {Math.round(height)}px tall</h2>}
    </>);
}

function Child(props) {
    const {mRef} = props;
    const [show,setShow] = useState(false);

    return <Fragment>
        {show && <h1 ref={mRef}>Hello, world</h1>}
        {!show && <Button type='primary' onClick={()=>setShow(true)}>显示子组件</Button>}
    </Fragment>
}
```

## Callback ref抽取成自定义hook
```
function UseRefDemo(props) {
    const [rect,ref] = useClientRect();

    return (<>
        <Child mRef={ref}/>
        {rect !== null && <h2>The above header is {Math.round(rect.height)}px tall</h2>}
    </>);
}

function Child(props) {
    const {mRef} = props;
    const [show,setShow] = useState(false);

    return <Fragment>
        {show && <h1 ref={mRef}>Hello, world</h1>}
        {!show && <Button type='primary' onClick={()=>setShow(true)}>显示子组件</Button>}
    </Fragment>
}

function useClientRect() { //自定义hook
    const [rect,setRect] = useState(null);

    const ref = useCallback(node => {
        if (node !== null) setRect(node.getBoundingClientRect());
    }, []);

    return [rect,ref];
}
```
