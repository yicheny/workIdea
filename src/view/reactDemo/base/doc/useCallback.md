[TOC]

# 型构
## 1.名称
`useCallback`

## 2.参数
`(fn,deps)`
第一个参数是形如`()=>fn(a,b...)`的回调函数
第二个参数是依赖项数组，其中任意一项改变时，就会更新`useCallback`的返回值

## 3.返回值
函数，准确的说是一个`memoized`回调函数

### 关于`Memoization`
一种优化技术，使用缓存存储已有的结果，根据输入每次执行功能前先查一次缓存，如果缓存存在结果那么直接返回结果。
> 在`useCallback`中依赖项即相当于输入，根据依赖返回缓存的相应函数

详见：[维基百科：Memoization](https://en.wikipedia.org/wiki/Memoization)

# 使用场景
性能优化。准确的说是：将回调函数传递给 通过引用相等避免非必要渲染的子组件时

下面以一个案例，详解`useCallback`的使用场景：

# 案例
## V1.0
```
function CountBtn({onClick,count}) {
    console.log(count);
    return <Button onClick={onClick}>{count}</Button>
}

function UseCallbackDemo(props) {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);

    const countAdd = ()=>setCount(count=>count+1);

    return <Container header='UseCallbackDemo'>
        <CountBtn count={count} onClick={countAdd}/>
        <CountBtn count={count2}/>
    </Container>
}
```
点击第一个按钮，`count`状态变化，触发重渲染，我们发现`console.log(count)`被执行了两次，一次打印出`1`，一次打印出`0`。

符合预期的结果，之前在`useState`、`useReducer`也提到过，React的进行相等性检查在不会真正执行DOM操作，然后子组件内的代码却是会被逐步执行，也就是说，不执行DOM操作，而其他写在子组件内的操作都会被执行，甚至包括`return`

比如刚刚的代码，我即使这么写：`return <Button onClick={onClick}>{count}{console.log(count)}</Button>`也一样会执行两次打印。

如何避免这种情形？这里可以使用`React.memo`。

## V1.5
对刚刚的`CountBtn`组件进行改写：
```
const CountBtn = React.memo(function ({onClick,count}) {
    console.log(count);
    return <Button onClick={onClick}>{count}</Button>
});
```
点击第一个按钮，发现只出现一次打印`1`，再点击一次，只出现一次`2`，这正面第二个`CountBtn`没有执行内部的代码，进一步优化了性能。

## V1.6
然而，这样就完美了么？让我们修改下代码:
```
function UseCallbackDemo(props) {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);

    const countAdd = ()=>setCount(count=>count+1);
  + const countAdd2 = ()=>setCount2(count2=>count2+1);
    
    return <Container header='UseCallbackDemo'>
        <CountBtn count={count} onClick={countAdd}/>
        <CountBtn count={count2} onClick={countAdd2}/>
    </Container>
}
```
我们为第二个`CountBtn`传递了一个`countAdd2`函数，`CountBtn`依旧保持`React.memo`的写法

点击第一个按钮，发现又再度回到了之前的状况，现在`console.log(count)`又打印了两次，为什么会这样？

`React.memo`的检查是通过`Object.is()`算法进行相等性检查的，下面简单说下这个算法

## 理解`Object.is()`
`Object.is()`和`===`一样，不会造成隐式类型转换，不过它们有两方面不同：
1. `===`会判断`+0`与`-0`相等
2. `===`会判断`NaN`与`NaN`不相等

除此之外，二者对于引用类型的判断都是一样的，即只有引用地址相同才会判断相等，例如：
```
{} === {} //false
[] === [] //false
(()=>{}) === (()=>{}) //false

const a = {};
a === a //true
```

刚刚之所以`console.log()`会执行两次，是这样的：
调用`setCount()`之后状态改变，`UseCallbackDemo`函数内部被重新执行，`countAdd2`会被销毁回收，在重新执行时再次创建，此时`countAdd2`的内存地址与上一次不同，`React.memo`的相等性检查会认为两次传的值不同，因此会再次执行。

而`useCallback`和`useMemo`正是为了解决引用类型相等性判断造成的重复执行问题而存在的。

`useCallback`仅是解决函数相等性判断，而`useMemo`的范围更加宽泛，包括数组、对象等类型也可以通过`useMemo`进行优化。

除了引用类型相等性判断`useMemo`还有另一项优化能力，在`useMemo`部分会介绍。

目前，先关注怎么使用`useCallback`解决函数相等性判断的问题。

## V2.0
其他地方不变，使用`useCallback`改写`countAdd`与`countAdd2`:
```
const countAdd = useCallback(()=>setCount(count=>count+1),[]);
const countAdd2 = useCallback(()=>setCount2(count2=>count2+1),[]);
```
任意点击一个函数，发现只会打印对应组件的`count`。

使用`useCallback`，状态改变后，函数没有被销毁，而是引用的上一次内存地址，所以通过了`Object.is()`相等性判断

# 注意事项
每个抽象(和性能优化)都是有代价的。应用 AHA 编程原则，直到确实需要抽象或优化时才去做，这样可以避免承担成本而不会获得收益的情况。

`useCallback`的优化成本在于：
1. 使用`useCallback`本身也是需要消耗性能的
2. 代码更复杂了，增加了犯错的风险以及维护的成本

并不是任何时候都需要进行优化的，一定要满足`useCallback`使用场景再进行优化，否则反而会使得性能降低，使用`useCallback`也是需要成本的

# 参考文档：
[【译】什么时候使用 useMemo 和 useCallback](https://jancat.github.io/post/2019/translation-usememo-and-usecallback/)