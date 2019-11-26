[TOC]

# 型构
## 1.名称
`useImperativehandle`

## 2.参数
`(ref,createHandle,[deps])`
第一个参数是一个ref对象；
> 这个参数是父级传过来的`ref对象`，是被替换掉的`ref对象`

第二个参数是一个函数，函数返回一个对象，用于自定义暴露给父组件的实例值；
> 第二个参数的返回值即父组件中`ref.current`所获取到的值

第三个参数是依赖项数组；

## 3.返回值
`newRef` 一个自定义实例值的ref对象

# 使用场景
使用ref对象需要限制暴露给父组件的实例值时。
> 注意：`useImperativehandle`应当与`forwardRef`一起使用

# 实例
首先使用`useImperativeHandle`+`forwardRef`创建一个组件类
```
function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef}/>;
}
FancyInput = forwardRef(FancyInput);
```

在父组件获取刚刚创建的组件类，打印`ref.current`，我们发现得到的是一个对象，对象只包含一个`focus`方法
```
function UseImpHandleDemo(props) {
    const ref = useRef();

    useEffect(()=>{
        console.log(ref.current);
    },[]);

    return (
        <div>
            <FancyInput ref={ref}/>
        </div>
    );
}
```