[TOC]

# 使用场景
在页面渲染完成后，需要执行副作用操作时。
> 关注点有两点，一是页面渲染完成后，二是需要执行副作用时。符合其中一条就需要使用useEffect

## 什么是函数副作用
当函数会改变外部数据时就有了函数副作用。

如果这个函数不会影响到外部数据，那么无论它执行多少次结果都是一致的，而有副作用的函数，结果无法保证其一致性。

什么是外部数据？可以简单理解是这个函数局部变量之外的变量。

# 执行时机
默认是在每次渲染结束后执行，设置依赖项的情况下还需要满足依赖项更新的条件
> 这就是使用场景第一条的原因，如果没有useEffect，便很难做到在渲染结束后执行

注意，`useEffect`里不要进行dom操作。

为什么？因为`useEffect`在dom渲染结束后执行，此时浏览器已经绘制完成，再进行dom操作会造成闪屏。

如果需要进行dom操作，推荐使用`useLayoutEffect`，它会在浏览器绘制dom前执行【注意，此时dom对象已经有了，只是没有被绘制到页面上，所以可以操作】。

关于两者差异，请看[演示demo](http://localhost:3020/#/react/base/demo/useEffect)

# 型构
## 1.名称
`useEffect`

## 2.参数
`(effect,dep)`

第一个参数是函数，在渲染结束后执行。

第二个参数是依赖项，决定什么时候执行第一项参数

### 依赖项详解
依赖项有三种可能：
1. 不传：如果不传，每次渲染后都会执行
> 与生命周期的`didUpdate`类似
2. 传空数组`[]`：只会在第一次渲染结束后执行
> 与生命周期的`didMount`类似
3. 传依赖项数组`[dep1,dep2,...]`：渲染结束后，依赖项中任意一项更新【改变】都会执行

关于依赖项数组，我们应该将**所有外部作用域中会发生变化且在effect中使用的变量**都放到这个依赖项数组中。

或者更进一步，可以认为所有`在effect中被引用的外部值`都应该放在这个依赖数组里。

有一点很关键：不是我们决定依赖项应该有哪些，依赖项取决于第一个参数【函数】的定义——第一个参数定义完成时，依赖项便已经决定了。

依赖项是函数中所使用到的所有外部值，如果我们没有按照规则去传依赖项，会被`eslint-plugin-react-hooks`报`warn`警告。

### effect参数详解
推荐`在effect内部声明需要的函数`。理由是这样可以更方便看出effect引用了哪些外部值。

不安全的写法会被`eslint-plugin-react-hooks`报`warn`警告，不安全的写法演示：
```
function doSomething(){
    console.log(someProp);//注意，这个someProp是外部值
}

useEffect(()=>{
    doSomething();
},[]);//这种写法，不能判断出使用了哪些外部值
```

安全的写法演示：
```
useEffect(()=>{
    function doSomething(){
        console.log(someProp);//注意，这个someProp是外部值
    }
    doSomething();
},[someProp]);//这种写法，我们知道引用了哪些外部值
```

#### effect参数返回值
`unsubscribe`

返回值可以不传。

返回值是一个清除函数，会在函数卸载前执行，用于清除副作用产生的一些资源
> 如果组件多次渲染【通常如此】，则在执行下一次effect之前，上一个effect资源就会被清除。【避免effect重复执行请见effect参数部分】

# 3.返回值
`undefined`
> 注意区分useEffect本身的返回值，与effect的返回值