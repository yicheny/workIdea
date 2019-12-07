[TOC]

# 解决什么问题？
promise是ES6提出的新的异步解决方案，在此之前异步的解决方案是回调。

通过回调表达程序异步和管理并发有两个主要缺陷：缺乏顺序性和可信任性

之前在回调里我提到过，回调相当于将未来要做的事交托给第三方，而第三方如何调用，何时调用，会不会调用这些我们都难以确保。

而promise相当于什么？相当于未来我有一件事要在你【第三方异步事件】这件事之后去做，你事情做完了告诉我一声【无论成功或失败】，并将我需要的东西带给我，到时候我自己去做接下来的事情。

回调是我们将程序中的continuation【延续】交托给第三方去做，而使用promise我们只需要第三方通知我们任务何时结束，到时候我们自己去做剩下的事。

因而promise的关键词在于“承诺”，承诺事情做完了一定要通知我们【无论结果是成功还是失败】。

到这里，我们意识到一件事：promise进行异步事件，虽然我不知道它什么会结束，但是它一定会给我一个值，这个值可能是成功值也可能失败值，这不重要，重要的是它一定会给我一个值。

理解这个值很重要，即便现在我还没有拿到这个，但我们相互承诺，未来事情结束就要返回给我们一个值，到时候……

“到时候？”没错，拿到值的时候就是我们可以行动的时候，就是可以行动的最好时机，即便那是在我们尚未抵达的未来，我们已经可以掌控未来的发展了！

## 回调示例
这是一个回调处理异步的示例：
```
function getX(callback) {
    setTimeout(()=>{
        callback('X');
    },100)
}

console.log('A');
getX(x=>console.log(x));
console.log('B');
```
我们可以看出，执行到`getX(x=>console.log(x))`时，回调函数`x=>console.log(x)`的控制权被转移到了`getX`内部。

现在这里的`getX`还好，内部并不复杂，我们很容易就能看明白，实际开发中，`getX`可能是一个很复杂的函数，到真正调用`x=>console.log(x)`前需要执行一系列的代码。

而且，getX它是不是异步执行的？这点我们也必须确认，回调可能是异步的也可能是同步的，这点在之前提到过，同步和异步对于这里的代码执行顺序而言是很关键的一件事。

getX在这里的确是异步的，可这是我们去看了getX代码才知道的事，也就是说这里增加了后期人员阅读和维护的成本。

使用回调的问题就在于，我们需要关注第三方函数的实现细节。

在我的项目开发中，因下拉框组件的需要，我们拿到数据后都需要进行一系列转换以满足组件需要，然而，获取数据有些是同步的获取【前端写死】，有些是异步的获取【服务端API】，但无论同步异步都是一样的传递回调函数，而且让人恶心的是每次组件使用都是好几个下拉框一起使用，少的话两三个，多的话七八个，同步异步函数放在一起，使用一样的函数，第一眼根本无法看不出执行的顺序：
```
getA(x=>console.log(x));//同步
getB(x=>console.log(x));//异步
getC(x=>console.log(x));//同步
getD(x=>console.log(x));//异步
getE(x=>console.log(x));//异步
getF(x=>console.log(x));//异步
getG(x=>console.log(x));//同步
getH(x=>console.log(x));//异步
```
现在，顺序变得混乱而恶心了，如果数据获取相互之间没有任何交互或许也不是不能接受。

一旦数据获取间出现交互要求，对某些需求的处理就会比较难受，比如说，我们一部分数据A->B->C必须要以这种顺序去获取【回调地狱】，数据全部获取后执行一次列表查询【这里可以通过gate或latch去做，不过还是很麻烦】。

一旦我们将回调的控制权转移，我们是很难确认和控制回调的执行的，我们只能尽可能的去弥补一些缺陷，不过就和之前提到的一样，这会增加代码的复杂度，并且是和业务无关的代码。

下面，让我们看一下promise是怎么做的。

## promise示例
现在，让我们使用promise改写这个这段代码：
```
function getX(callback) {
    setTimeout(()=>{
        callback('X');
    },100)
}

console.log('A');
const promise = new Promise(resolve => getX(x=>resolve(x)));
promise.then(res=>{
    console.log(res);
});
console.log('B');
```
考虑到演示代码的复杂度，这里我只使用了成功态的承诺`resolve`，从代码量上，似乎比刚刚要多一些？

是的，的确如此，不过，真正值得注意的是promise的解决更为优雅，优雅在什么地方？在后期维护和对continuation处理上。

看见了吗？在这里，我根本不关心getX内部是如何执行的，也不关心它是同步还是异步【因为在promise眼中都是异步的】。

使用promise我们无需关注第三方函数的实现细节，这就实现了**关注点分离**（ [关注点分离_维基百科](https://zh.wikipedia.org/wiki/%E5%85%B3%E6%B3%A8%E7%82%B9%E5%88%86%E7%A6%BB)）

这样就非常舒服，之前我的业务代码改成这种写法之后，对于异步的处理顺序没有影响，区别只在于控制权，得到控制权后我们不再需要关注`getX`的实现细节。

并且面对后续需求解决也更加优雅，如果需要特定顺序获取，那么你可以利用promise的链式调用，如果需要在数据全部得到过进行操作，那么可以使用`Promise.all`这个API。

这就是promise，只要异步按`承诺`去做，结束时为我们提供一个值，那么一切都会变得简单，我们重新得到了控制权。

## 测试代码
有需要的话可以自行使用以下代码进行测试，尝试实现一些异步的场景需求，看看回调和promise的处理有什么不同：
```
function print(str,callback) {
    const delay = Math.round(Math.random()*500);
    setTimeout(()=>{
        callback([str,delay]);
    },delay)
}

print('A',x=>console.log(x));
print('B',x=>console.log(x));
print('C',x=>console.log(x));
print('D',x=>console.log(x));
print('E',x=>console.log(x));
print('F',x=>console.log(x));
print('G',x=>console.log(x));
print('H',x=>console.log(x));

// (new Promise(resolve => print('A',x=>resolve(x)))).then(res=>console.log(res));
// (new Promise(resolve => print('B',x=>resolve(x)))).then(res=>console.log(res));
// (new Promise(resolve => print('C',x=>resolve(x)))).then(res=>console.log(res));
// (new Promise(resolve => print('D',x=>resolve(x)))).then(res=>console.log(res));
// (new Promise(resolve => print('E',x=>resolve(x)))).then(res=>console.log(res));
// (new Promise(resolve => print('F',x=>resolve(x)))).then(res=>console.log(res));
// (new Promise(resolve => print('G',x=>resolve(x)))).then(res=>console.log(res));
// (new Promise(resolve => print('H',x=>resolve(x)))).then(res=>console.log(res));
```

# 探寻Promise
现在，想一想Promise机制是如何实现的？

# 关于Promise的检测

# Promise解决信任问题

# 链式调用