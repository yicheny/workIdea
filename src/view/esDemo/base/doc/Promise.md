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

关键是两个字：**监听**，监听异步事件的执行，一旦结束就就进行通知，看这一段伪代码：
```
const promise = ent(foo());//foo是一个异步事件，ent监听foo

promise.then(res=>console.log('成功',res));//异步成功结束则在这里进行通知
promise.catch(err=>console.log('失败',err));//异步失败结束则在这里进行通知
```
这段伪代码里ent监听了`foo()`，当`foo()`执行结束后ent得到通知，成功则执行`then`方法里的回调，失败则执行`catch`的回调，大致如此。

这里的ent就相当于Promise内置函数，下面我们实现这个监听机制，实现一个最基本的只有监听机制的`Promise`

## Promise基础
在实现之前，我们回顾下`Promise`的特性有哪些？
- Promise是一个内置函数，可以通过`new Promise`的方式去调用，也可以通过API调用，例如`Promise.resolve`、`Promise.all`这些
- 通过`new Promise()`方式调用时，接受一个形如`(resolve,reject)=>{}`的回调函数，这个回调函数是同步执行的，我们在这个回调函数里定义承诺的内容，包括成功的承诺与失败的承诺
- `Promise`实例对象有三种状态`pending`、`fulfilled`、`rejected`，初始状态为`pending`，一旦更改为`fulfilled`或`reject`就不能再修改
- `then`方法接受两个回调，第一个回调在`fulfilled`状态时执行，第二个状态在`rejected`状态执行，只有有一个被执行，且只会执行一次。

### Promise实现V1
现在我们仅实现一个只能以`new Promise()`方式调用且只有一个`then`方法的`Promise`构造函数：
```
//自定义Promise
class MyPromise {
    constructor(callback) {
        this.status = 'pending';
        this.params = null;//用于接收数据
        if(_.isFunction(callback)) callback(this._resolve, this._reject);
    }

    _resolve = (res) => {
        if (this.status === 'pending'){
            this.status = 'fulfilled';
            this.params = res;
        }
    };

    _reject = (err) => {
        if(this.status === 'pending'){
            this.status = 'rejected';
            this.params = err;
        }
    };

    then = (resolve,reject) => {
        const {status,params} = this;
        
        if(status==='fulfilled') return resolve(params);
        if(status==='rejected') return reject(params);
        
        setTimeout(()=>{
            return this.then(resolve,reject);
        },0);
    }
}

//测试部分
function getData(callback) {
    const delay = _.random(0,100);
    setTimeout(()=>{
        return callback(delay)
    },delay);
}

const promise = new MyPromise((resolve, reject) => {
    getData(x=>{
        if(x>50) return resolve(x);
        return reject(x);
    });
});

console.log('A');
promise.then((res)=>{
    console.log('异步执行成功啦！',res);
},(err)=>{
    console.error('异步执行失败啦！',err);
});
console.log('B');
```
理解这段代码的关键在于，`getData`内部的回调执行时，此时异步请求结束，我们根据条件更改状态并执行`then`里面的回调。

在promise之前的回调控制流是这样的：异步结束，执行传进的回调。

promise控制流逻辑是：异步结束，promise实例对象的状态改为完成态并接收传入的参数，执行`then`方法回调。

区别在于，promise等于从`getData`【异步程序】处取回了控制权，之前我们是将权力交托给了第三方，而现在我们是从第三方得到**异步结束**这一信息，执行由我们决定。

我们是如何得知异步结束的？异步程序回调执行即代表异步结束，一旦结束我们promise实例就会得到通知，此时，我们可以执行预定的程序。

ok，进行到这里，如果可以实现一个简陋的基础Promise，那么应该对于promise应该有一个相对清晰的了解了，promise最主要是解决了回调函数的信任问题，它重新拿回了控制权，实现的关键在于监听，监听的实现原理是对回调的再反转。

目前的`Promise`还很不完整，比如说它没有再返回一个promise对象，也没有提供一些API。接下来，我们就一步步介绍promise的链式调用，以及promise提供的API

## 链式调用
```
const promise = new Promise(resolve=>resolve('结果1'));

promise.then(res=>{
    console.log(res);
    return '结果2';
}).then(res=>{
    console.log(res);
    return '结果3';
}).then(res=>{
    console.log(res);
});
```
链式调用的关键在于两点：
- `then`方法每次执行之后都会创建一个新的`promise`对象，
- `then`方法中所执行的回调的返回值 会作为新`promise`对象`then`的传入值

思考这里：
在`then`执行之前，返回得到的是什么？是如何保证`then`执行之后立即执行下一个`then`的？

这里的用立即不太准确，因为下一个`then`是被插入到任务队列中的，如果任务队列已有任务，新放入的任务不会被立即执行，不过肯定会比事件队列的事件优先执行。之所以这里使用立即，是想表达promise的`then`概念，它是希望监听的事件结束后立刻被执行的，所以被加入任务队列这一优先执行的队列中
> JS执行机制：事件循环->任务队列【微任务】->事件队列【宏任务】

第一个问题：`then`被执行前返回的是一个`pending`状态的promise实例对象

第二个问题：在当前`then`执行结束之前，我们一直在监听当前`promise`的状态，监听当前promise状态修改完成后，不再返回当前`promise`，返回一个新创建的`promise`对象。

针对之前的`MyPromise`类，只需要稍微修改`then`方法，针对三种状态返回不同的`promise`对象即可，具体实现如下。

### Promise实现V1.1
```
then = (resolve,reject) => {
    const {status,params} = this;

    if(status==='fulfilled'){
        return new MyPromise(onFulFilled=>onFulFilled(resolve(params)));
    }
    if(status==='rejected'){
        return new MyPromise((onFulFilled,onRjected)=>onRjected(reject(params)));
    }

    setTimeout(()=>{
        return this.then(resolve,reject)
    },0);

    return this;
}
```
之所以命名为1.1版本，是因为现在的`then`方法缺陷很大，不过`then`方法作为promise实现的核心，复杂一些也情有可原，现在我们针对`then`的缺陷一点点的修复。

首先让我们看一段代码：
```
const promise = new Promise(resolve=>resolve('结果1'));

promise.then(res=>{
    console.log(res);
    return aaa;//aaa未定义
},()=>{

}).then(res=>{

},err=>{
    console.error('成功捕获错误', err);
    return '结果2'
}).then(res=>{
    console.log(res)
});
```
这里，第一个`then`执行`fulfilled`的回调，第二个`then`执行`rejected`的回调，第三个`then`执行`fulfilled`的回调，这是怎么做到的？

答案是每一个`then`都属于不同的promise对象，除去第一个promise是监控是我们指定的内容，`then`所返回的promise对象所监听的内容是它执行的回调本身，一旦出错则执行promise的`rejected`回调，实现如下：

### Promise实现V1.2
```

```

## 错误处理
### `try-catch`
JS中，说的错误处理，我们首先会想到的是`try-catch`，然而可惜的是，`try-catch`只能处理同步错误，对于异步是无能为力的。【在es6之后，利用生成器是可以使用`try-catch`的，这个暂且不谈】
```
//同步
try{
    baz();
}catch (e) {
    console.error('捕捉到错误了！',e); //捕捉到baz未定义的错误
}

//异步
try{
    setTimeout(()=>{
        baz();
    },0)
}catch (e) {
    console.error('捕捉到错误了！',e);//没有捕捉到baz未定义的错误，只有全局报错
}
```

### `error-first`
在`promise`之前异步是通过回调解决的，`error-first`是一种常见的错误处理方案。

`error-first`即回调第一个参数为报错信息，如果没有报错，则置空。nodeJS的API几乎都是`error-first`风格，因而此风格也被叫做nodeJS风格

```
function foo(cb) {
    setTimeout(()=>{
        try{
            var x = bar();//注意bar未定义
            cb(null,x)
        }catch (e) {
            cb(e)
        }
    },0)
}

foo((err,value)=>{
   if(err){
       console.error('捕捉到错误！',err);//成功捕捉错误
   } else{
       console.log(value)
   }
});
```
`error-first`风格在过去回调时代是一种非常流行的报错方案，其主要思想便在于异步转同步，我们真正捕捉错误的时候其实是在同步执行回调时捕捉的。

这种风格缺点在于麻烦，首先捕捉错误是在第三方函数内部进行的，这使得开发者需要关注其内部细节，其次回调的使用更加麻烦了，它需要考虑失败的情况。

`error-first`正好印证了回调的两个关键缺陷：1.控制权转移引发的信任问题，2.可读性【回调地狱】

### 分离回调
这是某些API采取的错误处理方案，promise和indexedDB便是使用的这种API，具体来说就是接收两个回调，一个用于成功时执行，一个用于报错时执行。见示例：
```
const p1 = new Promise((resolve)=>resolve('完成'));
const p2 = new Promise((resolve,reject)=>reject('拒绝'));

p1.then(function fulfilled(res) {
    console.log(res);//执行
},function rejected(err) {
    console.error(err);//不执行
});

p2.then(function fulfilled(res) {
    console.log(res);//不执行
},function rejected(err) {
    console.error(err);//执行
});
```
看上去，一切都很完美。然而，还是存在缺陷，见以下：
```
const p = new Promise(resolve => resolve(42));

p.then(function fulfilled(res) {
    res();//注意：这里数字42这样调用，会报错
},function rejected(err) {
    console.error(err);//错误信息并没有被传到这里
});
```
发现了吗？在这里，回调执行抛出了一个错误，然而promise的错误处理函数并没有得到通知，根据之前我们`MyPromise`的实现思考这是为什么？

这里的错误处理函数是为promise准备的，当状态从`pending`变为`rejected`之后，此错误信息会被传递给此函数执行。在这里，promise状态从`pending`变成了`fulfilled`之后，执行的是成功态的回调，而状态一旦改变就不会再改回，错误处理函数自然不会被执行。

如果promise只使用分离回调处理，那么就会很容易造成错误被吞掉，这不是我们想看到的情况。

那么这里有什么解决方法呢？比较自然的想法是在其内部进行`try-catch`捕捉错误，这是可行的：
```
const p = new Promise(resolve => resolve(42));
p.then(function fulfilled(res) {
    try{
        res()//注意：这里数字42这样调用，会报错
    }catch(e){
     console.error('成功捕捉错误',e)
    }
},function rejected(err) {
    console.error(err);//错误信息并没有被传到这里
});
```

不过这种方案也有缺陷，如果只是一两个`then`调用可能还好，如果有很多`then`被链式调用，那么难道我们要在每个`then`里面都进行这种错误捕捉吗？这也太让人难受了。


# 关于Promise的检测

# Promise解决信任问题

