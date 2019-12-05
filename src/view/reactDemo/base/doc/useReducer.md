[TOC]

# 型构
## 1.名称
`useReducer`

## 2.参数
`(reducer,initialArg,init)`

### 1）reducer
形如`(state,action)=>newState`的函数

### 2）initialArg
通常是一个复杂状态

### 3）init
一个函数，用于惰性创建初始state。

之所以将这个init函数作为独立的函数传入，如果state是可以被计算出来的值，那么将这个重复的部分抽离出来就很有意义，而且也方便在其他地方复用。

个人的理解是如果一个state需要通过计算得到，那么就需要这个init函数，见[demo](http://localhost:3020/#/react/base/demo/useReducer)

#### 示例代码
> 注：其中用到的组件是我自定义的组件库里的
```
function UseReducerDemo(props) {
    const initialState = {x:1,y:2};
    const [state,dispatch] = useReducer(reducer,initialState,init);
    const {x,y,res} = state;

    return <Container header='UseReducerDemo'>
        <div className="mar_wrap_b">
            <div>计算方程：3x+7y+10的结果</div>
            <div>设置X的值：<TextInput value={x} onChange={(value)=>dispatch({type:'x',value})}/></div>
            <div>设置Y的值：<TextInput value={y} onChange={(value)=>dispatch({type:'y',value})}/></div>
            <div>结果：{res}</div>
            <div><Button type='primary' onClick={()=>dispatch({type:'res'})}>点击获取结果</Button></div>
        </div>
    </Container>;

    function reducer(state,action) {
        const {type,value,} = action;
        if(type==='x') state.x = value;
        if(type==='y') state.y = value;
        if(type==='res') state = init(state);
        return state;
    }

    function init(initState) {
        const {x,y} = initState;
        const res  = 3*x + 7*y + 10;
        return {x,y,res}
    }
}
```

## 3.返回值
`[state,dispatch]`

### 1）state
用于维护的状态。

初始state默认是`initialArg`，如果传了第三个参数`init`，则是`init(initialArg)`

### 2）dispatch
用于修改状态的一个方法

# 使用场景
1. state有多个子值
2. state逻辑较复杂
3. state依赖于上一次的state
4. 深更新【深层传递回调】时可通过传递dispatch进行优化
> 一般情况下通过回调传递state更显明确，如果层数过深，配合useContext更方便

# 更新
如state不变，则会跳过子级组件的渲染及`dispatch`的执行【和useState的更新一样】