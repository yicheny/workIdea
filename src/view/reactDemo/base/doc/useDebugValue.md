[TOC]

# 型构
## 1.名称
`useDebugValue`

## 2.参数
`(value,format)`
第一个参数，value是一个原始值或表达式【`isOpen?'open':'close'`】

第二个参数format是一个格式化函数，该函数参数是`useDebugValue`的第一项值

## 3.返回值
`undefined`

# 使用场景
> 此API需搭配React Developer Tools使用
1. 用于在 React 开发者工具中显示自定义 hook 的标签
2. 格式化值如果是一项开销很大的操作，则可以使用`useDebugValue`只在hook被检查时进行格式化操作 
