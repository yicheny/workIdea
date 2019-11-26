[TOC]

# 型构
useLayoutEffect与useEffect拥有相同的函数签名
> 函数签名包括：
> 1. 参数及参数类型
> 2. 返回值及返回值类型
> 3. 可能抛出的异常或错误
> 4. 该方法在面向对象程序中的可用信息

## 1.名称
`useLayoutEffect`

## 2.参数
`(effect,dep)`

第一个参数是函数，在渲染结束后执行。
> effect返回值是一个清除函数，用于清除订阅

第二个参数是依赖项数组，决定什么时候执行第一项参数

## 3.返回值
`undefined`

# 使用时机
对DOM进行操作，它和组件生命周期中的`didMount`和`didUpdate`执行阶段是一样的，不过React官方推荐优先使用`useEffect`，`useEffect`会在渲染结束后执行，不会阻塞渲染，而`useLayoutEffect`会在DOM对象变更之后、浏览器绘制之前执行，如果需要对DOM进行操作，则使用`useLayoutEffect`是更好的选择