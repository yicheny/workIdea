[TOC]

# 解决什么问题？
promise是ES6提出的新的异步解决方案，在此之前异步的解决方案是回调，通过回调表达程序异步和管理并发有两个主要缺陷：不是线性顺序和缺乏信任

之前在回调里我提到过，回调相当于将未来要做的事交托给第三方，而第三方如何调用，何时调用，会不会调用这些我们都难以确保。

而promise是什么？相当于未来我有一件事要在你【第三方异步事件】这件事之后去做，你事情做完了告诉我一声【无论成功或失败】，并将我需要的东西带给我，到时候我自己去做接下来的事情。

回调是我们将程序中的continuation【延续】交托给第三方去做，而使用promise我们只需要第三方通知我们任务何时结束，到时候我们自己去做剩下的事。

因而promise的关键词在于“承诺”，承诺事情做完了一定要通知我们【无论结果是成功还是失败】。

到这里，我们意识到一件事：promise进行异步事件，虽然我不知道它什么会结束，但是它一定会给我一个值，这个值可能是成功值也可能失败值，这不重要，重要的是它一定会给我一个值。

理解这个值很重要，即便现在我还没有拿到这个，但我们相互承诺，未来事情结束就要返回给我们一个值，到时候……

“到时候？”没错，拿到值的时候就是我们可以行动的时候，就是可以行动的最好时机，即便那是在我们尚未抵达的未来，我们已经可以掌控未来的发展了！

## 回调示例
这是一个回调处理异步的示例：
```
function getX(executor) {
    setTimeout(()=>{
        executor('X');
    },100)
}

console.log('A');
getX(x=>console.log(x));
console.log('B');
```
我们可以看出，执行到`getX(x=>console.log(x))`时，回调函数`x=>console.log(x)`的控制权被转移到了`getX`内部。

现在这里的`getX`还好，内部并不复杂，我们很容易就能看明白，实际开发中，`getX`可能是一个很复杂的函数，到真正调用`x=>console.log(x)`前需要执行一系列的代码。

而且，getX它是不是异步执行的？这点我们也必须确认，回调可能是异步的也可能是同步的，这点在之前提到过，同步和异步对于这里的代码执行顺序而言是很重要的一件事。

getX在这里的确是异步的，可这是我们去看了getX代码实现才知道的事，如果是实际开发这里就增加了开发人员后续阅读和维护的成本。

使用回调的问题之一就在于，我们需要关注第三方函数的实现细节，原本这不是必要的，这不是我们想要关注的点，我们只想关注什么时候回调会执行而已。

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
function getX(executor) {
    setTimeout(()=>{
        executor('X');
    },100)
}

console.log('A');
const promise = new Promise(resolve => getX(x=>resolve(x)));
promise.then(res=>{
    console.log(res);
});
console.log('B');
```
考虑到演示代码的复杂度，这里我只使用了成功态的承诺`resolve`。然而从代码量上，使用Promise似乎比刚刚使用回调代码量要多一些？

是的，的确如此，promise代码量更多一些，不过不要只关注代码量的增加，真正值得注意的是promise的解决更为优雅，优雅在什么地方？在后期维护和对continuation处理上。

看见了吗？在这里，我根本不关心getX内部是如何执行的，也不关心它是同步还是异步【因为在promise眼中都是异步的】。

使用promise我们无需关注第三方函数的实现细节，这就实现了**关注点分离**（ [关注点分离_维基百科](https://zh.wikipedia.org/wiki/%E5%85%B3%E6%B3%A8%E7%82%B9%E5%88%86%E7%A6%BB)）

这样就非常舒服，之前我的业务代码改成这种写法之后，对于异步的处理顺序没有影响，区别只在于控制权，得到控制权后我们不再需要关注`getX`的实现细节。

并且面对后续需求解决也更加优雅，如果需要特定顺序获取，那么你可以利用promise的链式调用，如果需要在数据全部得到过进行操作，那么可以使用`Promise.all`这个API。

这就是promise，只要异步按`承诺`去做，结束时为我们提供一个值，那么一切都会变得简单，我们重新得到了控制权。

## 测试代码
有需要的话可以自行使用以下代码进行测试，尝试实现一些异步的场景需求，看看回调和promise的处理有什么不同：
```
function print(str,executor) {
    const delay = Math.round(Math.random()*500);
    setTimeout(()=>{
        executor([str,delay]);
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

### 实现V0.1-监听
现在我们仅实现一个只能以`new Promise()`方式调用且只有一个`then`方法的`Promise`构造函数：
```
//自定义Promise
class Promise {
    constructor(executor) {
        this.status = 'pending';
        this.params = null;//用于接收数据
        if(typeof executor === 'function') executor(this._resolve, this._reject);
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
function getData(executor) {
    const delay = _.random(0,100);
    setTimeout(()=>{
        return executor(delay)
    },delay);
}

const promise = new Promise((resolve, reject) => {
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
理解这段代码的关键在于，我们使用了自定义Promise内部的`_resolve`、`_reject`监听了不同的部分，当`getData`内部的回调执行时，监听函数触发修改promise对象状态，状态一旦更改就会执行`then`里面相应的回调。
> 注意这里，`getData`内部的回调可能是同步的也可能是异步的，这里我们自定义的Promise是可以处理这两种情况的，因为这里监听的关键是回调被执行才会触发状态改变，无论同步还是异步逻辑都是相同的，回调执行会触发状态改变，并且只会改变一次。

在promise之前的回调控制流是这样的：异步结束，执行传进的回调。

promise控制流逻辑是：异步结束，promise实例对象的状态改为完成态并接收传入的参数，执行`then`方法回调。

区别在于，promise等于从`getData`【异步程序】处取回了控制权，之前我们是将权力交托给了第三方，而现在我们是从第三方得到**异步结束**这一信息，执行由我们决定。

我们是如何得知异步结束的？异步程序回调执行即代表异步结束，一旦结束我们promise实例就会得到通知，此时，我们可以执行预定的程序。

ok，进行到这里，如果可以实现一个简陋的基础Promise，那么应该对于promise应该有一个相对清晰的了解了，promise最主要是解决了回调函数的信任问题，它重新拿回了控制权，实现的关键在于监听，监听的实现原理是对回调的再反转。

不过现在监听的机制不是很好，我们实现了一个查询的虚拟进程，不间断的进行查询，直到状态改变执行相应的回调，如果期间出现其他任务则优先其他任务。这种不间断的查询会对性能造成的消耗较大，并且对后续的链式调用实现并不友好，现在让我们改进这个监听机制

### 实现V0.2-监听改进
```
class Promise {
    constructor(executor) {
        this.status = 'pending';
        this.params = null;//用于接收数据
        this.resolveCB = [];//注册onFulfilled函数，在_resolve回调时执行
        this.rejectCB = [];//注册onRejected函数，在_reject回调时执行
        if (typeof executor === 'function') executor(this._resolve, this._reject);
    }

    _resolve = (res) => {
        if (this.status === 'pending') {
            this.status = 'fulfilled';
            this.params = res;
            this.resolveCB.forEach(cb => cb(res));
        }
    };

    _reject = (err) => {
        if (this.status === 'pending') {
            this.status = 'rejected';
            this.params = err;
            this.rejectCB.forEach(cb => cb(err));
        }
    };

    //then修改--关键
    then = (onFulfilled,onRejected)=>{
        const {status} = this;
        if (status === 'fulfilled') return onFulfilled(this.params);//同步走这里，直接执行回调
        if (status === 'rejected') return onRejected(this.params);//同步走这里，直接执行回调
        if (status === 'pending') { //异步走这里
            this.resolveCB.push(onFulfilled);
            this.rejectCB.push(onRejected);
        }
    }
}
```
目前的`Promise`还很不完整，比如说它没有再返回一个promise对象，也没有提供一些API。接下来，我们就一步步介绍promise的链式调用，以及promise提供的API

### 实现V0.3-添加API
为了接下来的方便，我们定义`Promise`的两个静态方法`resolve`,`reject`
```
static resolve = (value)=>{
    return new Promise(resolve=>resolve(value));
};

static reject = (value)=>{
    return new Promise((resolve,reject)=>reject(value));
}
```

## 链式调用
```
const p = new Promise(resolve=>resolve('结果1'));

p.then(res=>{
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

第二个问题：关键在于`then` 返回的`promise`监听的是这个`then`执行的回调。执行`then`的回调，返回的`promise`会监听并修改状态，然后将相应的回调放到事件队列等待执行，因而`then`链的执行顺序是有序的。
> 之所以使用事件队列而不是任务队列，是因为`task queue`这个概念是ES6之后出现的，对于BOM【浏览器对象模型】开发者来说常用的微任务就是promise实例的这些api了，如果是NodeJS开发者的话`process.nextTick`也是微任务，任务队列放的就是微任务，微任务在同步代码之后，异步代码【定时器、事件这些】之前执行。另外，PromiseA+并没有规定一定要使用微任务实现Promise。

针对之前的`Promise`类，只需要稍微修改`then`方法，返回一个新的Promise对象即可。

### 实现V0.4-链式初步
```
then = (onFulfilled, onRejected) => {
    const {status} = this;

    if(status==='fulfilled') return Promise.resolve(onFulfilled(this.params));
    if(status==='rejected') return Promise.reject(onRejected(this.params));
    if(status==='pending') return new Promise((resolve,reject)=>{
        this.resolveCB.push(()=>resolve(onFulfilled(this.params)));
        this.rejectCB.push(()=>reject(onRejected(this.params)));
    })
};
```
现在的`then`方法还存在许多缺陷，不过`then`方法作为promise实现的核心，复杂一些也情有可原，现在我们针对`then`的缺陷一点点的修复。

### 实现V0.5-值的穿透
```
const promise = new Promise(resolve=>resolve('结果1'));
promise.then().then().then(res=>console.log(res));
```
这里发生了值的穿透，原理很简单，如果接收到值【`resolve`或`reject`】不是一个函数，根据情况进行相应的处理，实现如下：
```
then = (onFulfilled, onRejected) => {
    const {status} = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v; 
    onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}; 

    ...//其他代码不变
};
```

### 实现V0.6-全异步调用
promise有一个重要的思想，即无论是同步代码，还是异步代码，都以异步执行，这点很重要，在利用回调时代，就提倡这种做法【无论同步异步都以异步执行】，回调是可以同步执行的，也可以异步执行的，当我们将回调传给第三方函数【或自己编写的高阶函数】时，我们就失去了控制权，想要得知回调的具体执行就必须关注第三方函数的细节，这不是我们所希望的，全异步执行更有利于我们对于执行顺序的判断。

promise正是这么做的，见：
```
const p1 = new Promise(resolve=>resolve());
const p2 = new Promise(resolve=>resolve());
p1.then(()=>console.log('p1-1')).then(()=>console.log('p1-2'));
p2.then(()=>console.log('p2-1')).then(()=>console.log('p2-2'));
```
打印顺序是p1-1、p2-1、p1-2、p2-1，如果对顺序有疑惑，请先去了解JS的执行机制。

因而我们需要对`_resolve`、`_reject`以及`then`部分代码异步调用，实现如下：
```
_resolve = (res) => {
    setTimeout(() => {
        if (this.status === 'pending') {
            this.status = 'fulfilled';
            this.params = res;
            this.resolveCB.forEach(cb => cb(res));
        }
    }, 0)
};

_reject = (err) => {
    setTimeout(() => {
        if (this.status === 'pending') {
            this.status = 'rejected';
            this.params = err;
            this.rejectCB.forEach(cb => cb(err));
        }
    }, 0)
};

then = (onFulfilled, onRejected) => {
    const {status} = this;

    if(status==='fulfilled') return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(onFulfilled(this.params))
        },0)
    });
    if(status==='rejected') return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(onRejected(this.params))
        },0)
    });
    if(status==='pending') return new Promise((resolve,reject)=>{
        //注意：之所以这里没有修改，是因为这里注册的函数是在`_resolve`，`_reject`执行的，而那里已经被处理成异步了
        this.resolveCB.push(()=>resolve(onFulfilled(this.params)));
        this.rejectCB.push(()=>reject(onRejected(this.params)));
    })
};
```

### 实现V0.7-捕捉错误
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
```
then = (onFulfilled, onRejected) => {
    const {status} = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v; 
    onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}; 
    
    if(status==='fulfilled') {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                try {
                    Promise.resolve(onFulfilled(this.params))
                }catch (e) {
                    reject(e);
                }
            },0)
        })
    }
    if(status==='rejected') {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                try {
                    Promise.resolve(onRejected(this.params))
                }catch (e) {
                    reject(e);
                }
            },0)
        })
    }
    if(status==='pending') return new Promise((resolve,reject)=>{
        this.resolveCB.push(()=>{
            try {
                resolve(onFulfilled(this.params))
            }catch (e) {
                reject(e);
            }
        });
        this.rejectCB.push(()=>{
            try{
                reject(onRejected(this.params))
            }catch(e){
                reject(e);
            }
        });
    })
};
```
ok，现在每一个`then`方法的执行都被其创建的promise所监听，代码测试结果与原生promise一致了。

这个阶段的`then`已经可以应对大多数状况，不过有一种特殊状况，那就是如果`then`方法**直接**返回的是就是一个promise对象，以我们现在的`then`它会将监听这个promise然后创建一个promise对象，这种行为是异常的。让我们看一下原生promise是怎么做的：
```
const promise = new Promise(resolve=>resolve('结果1'));

promise.then((res) => {
    console.log('成功执行1',res);
    return Promise.reject('结果2');
}).then(()=>{},(err)=>{
    console.error('失败执行2',err);
    return Promise.resolve('结果3');
}).then((res)=>{
    console.log('成功执行3',res)
});
```
执行这个示例，我们发现下一次`then`执行的结果其实就是直接返回的这个promise对象的`then`的结果，因此，如果`then`返回的是一个promise对象，则不需要创建新的promise对象，返回这个直接返回的promise对象即可。

### Promise判断
进行Promise程序处理之前，我们需要先明确`promise`和`thenable`的区别，在接下来处理promise时会用到:
- `promise`是一个拥有`then`方法的方法或对象
- `thenable`是由`then`所定义的方法或对象

也就是说，我们只需要判断这个值是否是一个具有then方法的对象或函数，这种类型判断在术语中表示为鸭子类型，所谓鸭子类型就是：“如果它看起来像个鸭子，叫起来像个鸭子，那么它就是一只鸭子。”，这种判断在动态语言中还是很常见的，详细概念请见[鸭子类型_维基百科](https://zh.wikipedia.org/wiki/%E9%B8%AD%E5%AD%90%E7%B1%BB%E5%9E%8B)

```
isPromise(p){
    if (p===null) return false;
    if (typeof p !== 'object' && typeof p !== 'function') return false;
    return typeof p.then === 'function';
}
```
一般来说可以用这种方式去做判断promise对象，进行鸭子类型的判断。

如果想要详尽检测符合PromiseA+标准是非常麻烦的一件事，PromiseA+官方提供了一个脚本`promises-aplus-tests`供我们进行检测，这个是用于检测所编写的Promise是否符合PromiseA+标准的，检测大概花费十几二十秒，因而通常简洁的方法就是刚刚写的那个`isPromise`方法，不过网上可能也有更加规范的判断方法。

然而以鸭子类型做判断，不可避免的存在一些问题，例如如果有一个对象`obj1 = {then:()=>{}}`很明显，这不是一个常规意义的Promise对象，它是不能链式调用的，另外，熟悉JS都知道JS对象使用的是原型链机制，也就是说如果一个对象，即使这个对象本身不包含`then`方法，只要其原型链存在一个`then`就会通过这个方法的检测。

想象一下，如果有人恶意的`Object.prototype.then=function(){}`，这样所有的对象都会被检测是promise。

promise是ES6提出来的，在过去的十几年间存在许许多多的库，一些常见的库中也难免有着名为`then`的方法，如此一来，使用鸭子类型去做判断就会出问题，进而引发一些更严重的问题。

这是一个值得注意的问题，我们需要知道是使用鸭子类型进行判断可能会带来的问题。这是符合标准的promise，或许对于我们来说这种promise并不能按我们所预期的进行，可它的确是符合定义的promise。

值得庆幸的是实际开发中很少会出现误判，甚至几乎不需要进行promise的判断，不过我们需要清楚按进行鸭子类型判断可能会造成什么问题。

### 实现V0.9-resolvePromise
我们将定义一个`resolvePromise`针对`thenable`或`promise`进行处理，关于Promise处理逻辑PromiseA+规范2.3节有着详尽的记载，基本照着规范写就可以了。不过这里我还是大致说一下思路吧：

处理程序会用到4个值：`nextP`【`then`方法的最终返回值】,`x`【`then`方法的直接返回值】、`resolve`,`reject`
1. 首先判断`nextP`与`x`是否是同一个引用，如果是则抛出错误
2. 判断x是否是一个promise实例，如果是进行相应处理
3. 判断x是否是`thenable`，如果是进行相应处理
4. 不符合以上情况，进行相应处理【直接`resolve(x)`】

`resolvePromise`实现如下
```
resolvePromise = (x,nextP,resolve,reject)=>{
    //1.循环引用处理
    if(x===nextP){
        return reject(new TypeError('循环引用'));
    }

    //2.promise实例处理
    if(x instanceof Promise){
        if(x.status==='pending'){
            x.then(v=>{
                this.resolvePromise(v,nextP,resolve,reject);
            },reject)
        }else{
            x.then(resolve,reject);
        }
    }

    //3.thenable处理
    if((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))){
        let called = false;//标准2.3.2与2.3.3，保证最多只调用一次
        try {
            const then = x.then;//使用变量存储x.then的是因为x.then可能有副作用，这么做就可以保证只访问一次x.then，下面使用then.call也是一样的理由，我最后一次测试失败就是因为这里。。。
            if(typeof then === 'function'){
                then.call(x,y=>{
                    if(called) return;
                    called = true;
                    return this.resolvePromise(y,nextP,resolve,reject);
                },r=>{
                    if(called) return;
                    called = true;
                    return reject(r);
                })
            }else{
                return resolve(x)
            }
        }catch(e){
            if(called) return;
            called = true;
            return reject(e);
        }
    }else{
        //4.不符合以上，直接resolve
        resolve(x)
    }
};
```
`resolvePromise`实现了，接下来我们修改下`then`就大功告成了：
```
then = (onFulfilled, onRejected) => {
    const {status} = this;
    let nextP = null;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v;
    onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err};

    if(status==='fulfilled') {
        return nextP = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                try {
                    const x = onFulfilled(this.params);
                    this.resolvePromise(x,nextP,resolve,reject);//+++
                }catch (e) {
                    reject(e);
                }
            },0)
        })
    }
    if(status==='rejected') {
        return nextP = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                try {
                    const x = onRejected(this.params);
                    this.resolvePromise(x,nextP,resolve,reject);//+++
                }catch (e) {
                    reject(e);
                }
            },0)
        })
    }
    if(status==='pending') return nextP = new Promise((resolve,reject)=>{
        this.resolveCB.push(()=>{
            try {
                const x = onFulfilled(this.params);
                this.resolvePromise(x,nextP,resolve,reject);//+++
            }catch (e) {
                reject(e);
            }
        });
        this.rejectCB.push(()=>{
            try{
                const x = onRejected(this.params);
                this.resolvePromise(x,nextP,resolve,reject);//+++
            }catch(e){
                reject(e);
            }
        });
    })
};
```
### 实现V1.0-通过PromiseA+测试
1. 首先安装官方测试脚本: `npm i -g promises-aplus-tests`
2. 暴露Promise模块
```
//在需要测试的文件里暴露Promise模块
module.exports = Promise
Promise.defer = Promise.deferred = function(){
  let dfd = {};
  dfd.promise = new Promise((resolve,reject)=>{
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}
```
3. 执行测试：`promises-aplus-tests ./promise.js`【路径名和文件名以实际为主】
> 注：完整实例太长，我放到文档最后了。

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
发现了吗？在这里，回调执行抛出了一个错误，然而promise的错误处理函数并没有得到通知，根据之前我们`Promise`的实现思考这是为什么？

这里的错误处理函数是为promise准备的，当状态从`pending`变为`rejected`之后，此错误信息会被传递给此函数执行。在这里，promise状态从`pending`变成了`fulfilled`之后，执行的是成功态的回调，而状态一旦改变就不会再改回，错误处理函数自然不会被执行。

`promise`这种分离回调式的风格默认是会将错误给吞掉的，这不是我们想看到的情况，那么这里有什么解决方法呢？比较自然的想法是在其内部进行`try-catch`捕捉错误，这是可行的：
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

实际上promise不是这么做的，之前我们在`Promise`实现里，知道`then`生成的promise对象监控的正是这个`then`执行的回调，所以刚刚的那个例子可以这么做：
```
const p = new Promise(resolve => resolve(42));
p.then(function fulfilled(res) {
    res();//数字42这么调用会报错
},function rejected(err) {
    console.error(err);//错误信息并没有被传到这里
}).then(null,(err)=>{
    console.error('成功捕捉',err);//在这里我们捕捉到了前一个then的报错
});
```

这么做是可行的，不过这里`.then(null,()=>{})`这种捕捉错误的写法promise有个语法糖`catch`，读起来更加直观，写法也更简洁，简单实现下：

### 实现1.1-catch
```
catch = (onRejected)=>{
    return this.then(null,onRejected);
}
```
ok，实现了，现在拿刚刚的例子测试下：
```
const p = new Promise(resolve => resolve(42));
p.then(function fulfilled(res) {
    res();//数字42这么调用会报错
}).catch((err)=>{
    console.error('成功捕捉',err);//在这里我们捕捉到了前一个then的报错
});
```
执行结果和之前是一致的。

在我们实现自定义Promise的过程中，我们知道Promise的错误会沿着`then`链一直传递下去的，所以有种推荐的做法是在任何`then`链的后面都加上一个`catch`用于捕捉错误。

这种做法存在两个问题：
1. 如果执行链过长，我们很难知道究竟是哪一个环节出了问题，这是我们省略中间捕获错误流程带来的一个后果。
2. 如果最后的`catch`也出错了，就没有用于捕获这个`catch`的函数了。

第一个问题出现的可能性较大，不过解决起来很简单，加上中间省略的错误捕获即可。然而并不是所有情况都需要这么做，很多时候Promise未必是链式调用，其次就算是链式调用也可以根据报错直接定位错误点。

第二个想要解决却不是那么容易的一件事，下面针对第二个问题提出几种方案：

### 处理Promise未捕获
#### 1.注册未处理拒绝处理函数
第一种方案是一些Promise库提供的方案，注册一个*未处理拒绝*处理函数，Promise拒绝时启动这个函数，给定一个时间【例如3秒】，如果给定时间内没有`onRejected`执行，则认为有未被捕获的错误。

这种方案有一个明显的问题，大多数情景下应用这个方案没什么问题，有些时候情况下`onRejected`可能会有较长一段的等待，此时应用这个方案就会将不是错误的情况当作错误捕获了。

#### 2.终结函数done
第二种方案是为Promise添加一个done实例方法，将其作为最后一个错误捕捉函数，这个done方法和catch方法的区别就在于，done方法不会创建一个promise对象返回，只是接受一个`onRejected`执行。

这一点会导致什么区别，看这里：
``` 
const p = new Promise(resolve => resolve(42));
p.then(function fulfilled(res) {
    res();//数字42这么调用会报错
}).catch((err)=>{
    console.error('成功捕捉',err);//在这里我们捕捉到了前一个then的报错
    33();//最后一步报错，但是被Promise默认吞没了
});
```
在这个案例里，使用`catch`导致错误被Promise吞没了，虽然我们可以在加一个`catch`进行捕获，然而我们不能确保新加的`catch`就不会在出现报错。

如果这里是`done`，不创建Promise，错误就不会被吞没，它会被抛出一个全局错误，创建一个done方案是一个很好的处理方案，基本上没啥问题，唯一的问题就是它不是ES6标准的一部分，所以它不是普遍的方案，并不是所有开发者都可以立刻理解这个方法，增加了沟通了成本，不过如果需要捕获未处理错误，推荐使用这种方案。

#### 3.defer
第三种方案defer将关注点放在了Promise的默认行为上，Promise默认会吞没所有的错误，这不是开发者所希望看到的，错误要么被处理要么被报告，这几乎是所有开发者所需要的，否则一旦出现bug，在错误被吞没的情况，跟踪bug就成了一件很痛苦的事情。

可以为Promise提供两种模式，默认抛出所有捕获的错误，如果需要吞没，则可以在初始调用进行选择，比如这样：
```
const p = Promise.reject('1');//默认抛出所有错误
const p1 = Promise.reject('1').defer();//默认吞没所有错误
```

这种方案如果成为ES6标准由原生实现会更好，此方案本身是很强大的，效果也最好，然而目前来说会改变Promise的默认行为，在团队合作中如果有新人或与其他团队合作，可能会使其对代码理解产生错误。即便改为默认吞没，选择抛出也会有增加学习成本的问题【如果是这样，那么和done方案的问题就一样了】

# Promise解决信任问题

# ylfPromise完整实例
已通过PromiseA+测试
```
class Promise {
    constructor(executor) {
        this.status = 'pending';
        this.params = null;
        this.resolveCB = [];
        this.rejectCB = [];
        if (typeof executor === 'function') executor(this._resolve, this._reject);
    }

    _resolve = (res) => {
        setTimeout(() => {
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.params = res;
                this.resolveCB.forEach(cb => cb(res));
            }
        }, 0)
    };

    _reject = (err) => {
        setTimeout(() => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.params = err;
                this.rejectCB.forEach(cb => cb(err));
            }
        }, 0)
    };
    
    resolvePromise = (x,nextP,resolve,reject)=>{
        if(x===nextP){
            return reject(new TypeError('循环引用'));
        }

        if(x instanceof Promise){
            if(x.status==='pending'){
                x.then(v=>{
                    this.resolvePromise(v,nextP,resolve,reject);
                },reject)
            }else{
                x.then(resolve,reject);
            }
        }

        if((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))){
            let called = false;
            try {
                const then = x.then;
                if(typeof then === 'function'){
                    then.call(x,y=>{
                        if(called) return;
                        called = true;
                        return this.resolvePromise(y,nextP,resolve,reject);
                    },r=>{
                        if(called) return;
                        called = true;
                        return reject(r);
                    })
                }else{
                    return resolve(x)
                }
            }catch(e){
                if(called) return;
                called = true;
                return reject(e);
            }
        }else{
            resolve(x)
        }
    };

    then = (onFulfilled, onRejected) => {
        const {status} = this;
        let nextP = null;
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v;
        onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err};

        if(status==='fulfilled') {
            return nextP = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    try {
                        const x = onFulfilled(this.params);
                        this.resolvePromise(x,nextP,resolve,reject);
                    }catch (e) {
                        reject(e);
                    }
                },0)
            })
        }
        if(status==='rejected') {
            return nextP = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    try {
                        const x = onRejected(this.params);
                        this.resolvePromise(x,nextP,resolve,reject);
                    }catch (e) {
                        reject(e);
                    }
                },0)
            })
        }
        if(status==='pending') return nextP = new Promise((resolve,reject)=>{
            this.resolveCB.push(()=>{
                try {
                    const x = onFulfilled(this.params);
                    this.resolvePromise(x,nextP,resolve,reject);
                }catch (e) {
                    reject(e);
                }
            });
            this.rejectCB.push(()=>{
                try{
                    const x = onRejected(this.params);
                    this.resolvePromise(x,nextP,resolve,reject);
                }catch(e){
                    reject(e);
                }
            });
        })
    };

    static resolve = (value) => {
        return new Promise(resolve => resolve(value));
    };

    static reject = (value) => {
        return new Promise((resolve, reject) => reject(value));
    }
}
```
## 参考文档
- [PromiseA+](https://promisesaplus.com/)
- [PromiseA+译](https://juejin.im/post/5c4b0423e51d4525211c0fbc)
