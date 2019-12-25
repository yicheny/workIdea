[TOC]

# 基础
## 1.什么是函数式编程？
函数式编程是一种编程风格，比如命令式。

## 2.放弃OOP的理由
JS使用面向对象的写法存在一些问题，使用起来很笨拙：必须时刻关注`this`，代码冗余，不方便编译器分析等等。

JS拥有编写高级函数的能力，它适合函数式编程，可以很自然的使用

### 实例
现在有一个鸟群，有一个属性：鸟的数量，有两个能力/方法，一个是加入join：即两个鸟群数量叠加，另一个是繁衍mult：即两个鸟群数量相乘。

现在使用面向对象的写法实现：
```
//定义鸟群
class Bery {
    constructor(count){
        this.count = count
    }

    join = (other)=>{
        this.count = this.count + other.count;
        return this;
    };

    mult = (other)=>{
        this.count = this.count * other.count;
        return this;
    }
}

//测试代码
const b1 = new Bery(4);//b1鸟群有4只鸟
const b2 = new Bery(2);//b2鸟群有2只鸟
const b3 = new Bery(0);//b3鸟群有0只鸟

const res = b1.join(b3).mult(b2).join(b1.mult(b2)).count;//32
console.log(res);
//(b1+b3)*b2+(b1*b2)
//(4+0)*2 + (4*2) = 16;
//理论上我们是想得到16的，然而前面的赋值操作会改变的对象的值，从而导致整个计算过程出现问题
```
可以看出程序的目的，却难以分析其结果，为什么？

可变量在运算过程中永久的被改变了，以至于状态和可变值非常难以追踪，在一个小例子里已经如此，在项目里被层层传递的状态会更加的难以追踪。

ok，现在我们再使用函数式编程实现整个例子：
```
const join = (a,b)=>a+b;
const mult = (a,b)=>a*b;

const b1 = 4;
const b2 = 2;
const b3 = 0;

const res = join(mult(b2, join(b1, b3)), mult(b1, b2));
console.log(res);
```
非常简洁，达到了我们想要的效果。

有一个问题，函数嵌套让人有点难以理解，这个问题在之后会被我们解决，不过目前有更值得我们关注的东西。

仔细观察，就会发现`join`是纯粹的加法运算，`mult`是纯粹的乘法运算，这意味着什么？意味着我们可以使用一些我们熟悉的数学公式去简化代码：
```
//原代码
join(mult(b2, join(b1, b3)), mult(b1, b2));

//应用同一律 add(x,0)==x;
join(mult(b2,b1),mult(b1,b2));

//应用分配律 
mult(b1,join(b2,b2));
```
现在感觉是不是清楚多了？

你可能认为是因为这里的运算很简单所以才可以结合数学运算，实际上并不是，很多时候都可以运用数学，数学是很广泛的，如果练习一些算法或许更可以认知到这个事实。

## 3.函数式编程优点
1. 写法简洁
2. 易推理
3. 复用性极高
4. 性能优异
5. 通用易组合

# 一等公民的函数
为什么说函数式一等公民？它具备对象的一切特性，简单的说可以将它当作一个普通的对象值使用，不过它也很特殊，它是唯一可以被调用的对象。

## 1. 糟糕的范例-纯包裹函数
有的时候，我们会发现一些类似的写法，这绝非杜撰，我在项目里遇到过很多次这种写法。

现在我简单的写个错误的范例：
```
const print = s => console.log('打印字符' , s);
const foo = s=>print(s);
```
很多时候我都会看到这种形式的代码，其函数没有任何功能或职责，仅仅只是包裹了一层。

这么做不仅没有任何益处，反而造成了很多问题，一个函数将一个函数包起来，仅仅是为了延迟执行，这是一个糟糕的编程习惯。

现在我们重构一个实例：
```
//原代码--来自于npm模块包
const getServerStuff = callback => ajaxCall(json => callback(json));

//等价于
const getServerStuff = callback => ajaxCall(callback);

//等价于
const getServerStuff = ajaxCall;
```
ok,现在我们总结下包裹函数的用法存在哪些问题：
1. 增加冗余的代码量
2. 提高维护的成本
3. 提高检索/分析的成本

很容易想到的一点是，如果一个函数被不必要的包裹起来了，一旦函数发生改变，那么包裹它的函数也需要发生改变，例如：
```
//原
request = ('/mock/get/1',res=>Dispose(res));

//如果现在Dispose函数出现改动，需要处理错误，接受一个err参数，那么这里也被迫需要改动
request = ('/mock/get/1',(res,err)=>Dispose(res,err));

//而如果一开始这么使用，则不需要进行任何改动，想怎么改动参数都可以
request = ('/mock/get/1',Dispose);
```

## 2.更高的通用性--命名
一个规则，命名的时候不要局限于特定数据，尽可能使用更通用的函数名，见：
```
// 只针对当前
const validArticles = articles => articles.filter(article => article !== null && article !== undefined),

// 对未来更友好
const compact = xs => xs.filter(x => x !== null && x !== undefined);
```

## 3.!!小心`this`
实际上，在函数式编程中绝不要使用`this`，`this`糟糕透顶，令人难以忍受，如果是面向对象的写法难免会使用，但在函数式编程中，`this`是毫无必要的，我奉劝你丢弃它，立刻。

JS中的`this`调用时动态绑定的，如果某底层方法使用了`this`，那么调用的时候一定要注意：
```
var fs = require('fs');

// 糟糕透顶
fs.readFile('freaky_friday.txt', Db.save);

// 安全一些
fs.readFile('freaky_friday.txt', Db.save.bind(Db));
```

# 纯函数
**纯函数**即相同的输入永远会得到相同的输出，没有任何可观察的副作用。

例如数组方法`slice`便符合纯函数的定义，而`splice`则会改变原函数【副作用】。

## 1.追求可靠的函数
函数式编程讨厌会改变原数据的函数，我们追求的是可靠的函数。

```
//不纯的写法
let min = 10;

function checkAge(age){
    return age>=min;
}

//纯函数写法
function checkAge(age){
    const min = 10;
    return age>=min;
}
```
第一个函数为什么不纯？因为结果依赖于`min`，而`min`是可变量，这意味着结果依赖于系统状态，引入外部环境，会增加认知负荷。

以目前来看影响不是很明显，然而这种依赖外部状态的函数会成为影响系统复杂度的一个重要因素。

输入值之外的因素可以影响返回值，会让我们的思考程序的时候痛苦不堪。

纯函数里，我们应该保证除了参数之外，一切都是固定不变的，纯函数要做到自给自足。

在这里也可以使用`Object.freeze`将对象冻结：
```
const immutableState = Object.freeze({
    min:10
})
```

## 2. 副作用
**副作用**是在计算结果的过程中，系统状态的一种变化，或者与外部世界进行的可观察的交互

副作用包含但不限于：
1. 更改文件系统
2. 往数据库插入记录
3. 发送一个 http 请求
4. 可变数据
5. 打印/log
6. 获取用户输入
7. DOM 查询
8. 访问系统状态...

概括而言，只要与函数外部环境发生交互就是副作用——这点是函数式编程的一个重要问题，要做到无副作用编程是需要一定技巧和实践的。函数式编程的哲学认为副作用是导致不正当行为的主要原因。

禁止一切副作用并不那么现实，我们需要做到，是将它们放在可控制的范围内。

副作用让一个函数变得不纯的原因：从定义上来说，纯函数必须要能够根据相同的输入返回相同的输出；如果函数需要跟外部事物交互，那么就无法保证这一点。

## 3.追求纯函数的理由
注意数学上函数的定义：函数是不同数值之间的特殊关系：每一个输入值返回且只返回一个输出值

### 1)可缓存性
纯函数总能够根据输入来做缓存，因为纯函数相同的输入可以得到相同的输出。

实现缓存的一种典型方式是 memoize 技术：
```
//memoize简易实现
function memoize(f) {
    let cache = {};
    return function (...params) {
        const params_str = JSON.stringify(params);
        cache[params_str] = cache[params_str] || f(...params);
        return cache[params_str];
    }
}

//测试
let square = memoize(x=>{
    console.log('x',x);
    return x*x;
});
console.log('square',square(4));
console.log('square',square(5));
console.log('square',square(4));
console.log('square',square(6));
```

### 2）可移植性/自文档化
因纯函数是完全自给自足的，它不依赖于外部环境，因此，它完全可以移植到任意位置，它是完全独立的。

而且，因为其不依赖于外部变量或方法，因此可以很清楚的看清其功能，更易于观察和理解。

另外，纯函数对于其依赖必须要诚实，看这个例子：
```
let saveUser = function(Db, attrs) {
    ...
};

let welcomeUser = function(Email, user) {
    ...
};

// 不纯的
let signUp = function(attrs) {
  var user = saveUser(attrs);
  welcomeUser(user);
};

// 纯的
let signUp = function(Db, Email, attrs) {
  return function() {
    var user = saveUser(Db, attrs);
    welcomeUser(Email, user);
  };
};
```
这样可以最小程度得到足够多的信息，现在这种实现是延迟执行来让函数变纯，缺点是这里的参数会变多【有其他解决方案】

命令式编程中“典型”的方法和过程都深深根植于它们的所在环境中，通过状态、依赖和有效作用（available effects）达成。

而纯函数不同，它与环境无关，只要我们愿意，可以在任何地方运行它。

Erlang 语言的作者 Joe Armstrong 说过一句话：“面向对象语言的问题是，它们永远都要随身携带那些隐式的环境。你只需要一个香蕉，但却得到一个拿着香蕉的大猩猩...以及整个丛林”

### 3）可测试性
纯函数让测试变得更简单，只需要提供输入，不需要添加额外的环境因素。

### 4）合理性
很多人相信使用纯函数最大的好处是**引用透明性**（referential transparency）。

**如果一段代码可以替换成它执行所得的结果，而且是在不改变整个程序行为的前提下替换的，那么我们就说这段代码是引用透明的**

由于纯函数总是能够根据相同的输入返回相同的输出，所以它们就能够保证总是返回同一个结果，这也就保证了引用透明性。我们来看一个例子。
```
function decrementHP(player) {
    player.hp = player.hp-1;
    return player.hp;
}
function isSameTeam(player1,player2) {
    return player1.team === player2.team;
}
function punch(player,target) {
    if(isSameTeam(player,target)){
        return target
    }else{
        return decrementHP(target);
    }
}

const p1 = {name:'小明',hp:20,team:'red'};
const p2 = {name:'小强',hp:20,team:'green'};

punch(p1,p2);
console.log(p2);//{name: "小强", hp: 19, team: "green"}
```
因为纯函数具有引用透明的特性，所以可以使用**等式推导**来分析代码，所谓等式推导就是“一对一”替换，有点像在不考虑程序性执行的怪异行为（quirks of programmatic evaluation）的情况下，手动执行相关代码。我们借助引用透明性来剖析一下这段代码:
```
var punch = function(player, target) {
  if(player.team === target.team) {
    return target;
  } else {
    return decrementHP(target);
  }
};

//替换为
var punch = function(player, target) {
  if("red" === "green") {
    return target;
  } else {
    return decrementHP(target);
  }
};

//替换为
var punch = function(player, target) {
  return decrementHP(target);
};

//替换为
var punch = function(player, target) {
  return target.set("hp", target.hp-1);
};
```

等式推导为我们分析、重构和理解代码提供了很大的帮助，此技巧将贯穿函数式编程。

### 5）并行代码
最后一点，也是决定性的一点：我们可以并行运行任意纯函数。因为纯函数根本不需要访问共享的内存，而且根据其定义，纯函数也不会因副作用而进入竞态条件。

到目前为止，还有一些问题需要我们去关注，如果不解决这些问题，在追求纯函数的道路上可能存在一些困难：
1. 需要将非纯函数从纯函数中抽离出来
2. 多个参数被到处传递的问题
3. 禁止使用外部状态和副作用

现在，我们学习使用一个新工具：柯里化[curry]

# 柯里化
柯里化定义：只传递给函数一部分参数来调用它，让它**返回一个函数**去处理剩下的参数。

可以一次性地调用curry函数，也可以每次只传一个参数分多次调用:
```
//定义柯里化函数
function add(x) {
    return y=>x+y;
}

const increment = add(1);
const addTen = add(10);
console.log(increment(2));//2
console.log(addTen(2));//12
```

# 代码组合
首先定义一个`compose`方法
```
//定义
const compose = function (f,g) {
    return function (x) {
        return f(g(x))
    }
};
```
ok，现在测试下：
```
//测试
const toUpperCase = x=>x.toUpperCase();
const exclaim = x=>x+'!';
const shout = compose(exclaim,toUpperCase);
console.log(shout('send in the clowns'));
```
这种方式比起层层嵌套极大增强了可读性，我们的想法是让代码从右向左运行，而非从内向外运行。

```
const head = x=>x[0];
const reverse = data => data.reduce((acc,x)=>[x].concat(acc),[]);
const last = compose(head,reverse);
console.log(last(['a', 'b', 'c', 'd']));
```
为什么我们选择从右向左运行，而非从左向右【虽然这很容易做到】，因为从右向左执行更能体现数学上的定义。组合这一概念直接来自于数学，下面来看组合的一些特性：
```
// 结合律（associativity）
var associative = compose(f, compose(g, h)) == compose(compose(f, g), h);

//可以这样组合
compose(toUpperCase, compose(head, reverse));
// 或者
compose(compose(toUpperCase, head), reverse);
```
看见了么？怎么分组不重要，结果都是一样的，这使得我们有能力写出一个可变的组合：

对`compose`稍加改进：
```
//定义
function compose(...funcs) {
    if (funcs.length === 0) return arg => arg;
    if (funcs.length === 1) return funcs[0];
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

//测试
const loudLastUpper = compose(exclaim, toUpperCase, head, reverse);
console.log(loudLastUpper(['aaa', 'bbb', 'ccc', 'ddd']));
```

## ponitfree
`pointfree`模式，即函数无须提及将要操作的数据是什么样的。

一等公民的函数、柯里化（curry）以及组合协作起来非常有助于实现这种模式。

先看一个例子：
```
const snakeCase = function (word) {
    return word.toUpperCase().replace(/\s+/ig, '_');
};
console.log(snakeCase('a b c'));//A_B_C
```

现在改写成`pointfree`模式：
```
const replace = (regExp,template)=>{
  return str => str.replace(regExp,template)
};
const toUpperCase = s=>s.toUpperCase();
const snakeCase = compose(replace(/\s+/ig, '_'),toUpperCase);
console.log(snakeCase('a b c'));//A_B_C
```
这里通过管道将数据在接受单个参数函数间传递。利用 curry，我们能够做到让每个函数都先接收数据，然后操作数据，最后再把数据传递到下一个函数那里去。

在 pointfree 版本中，不需要 word 参数就能构造函数；而在非 pointfree 的版本中，必须要有 word 才能进行一切操作。
```
import _ from 'lodash/fp';
const toUpperCase = s=>s.toUpperCase();

// 非 pointfree模式，因为提到了数据：name
const initials = function (name) {
    return name.split(' ').map(compose(toUpperCase, _.head)).join('. ');
};
console.log(initials("hunter stockton thompson"));// 'H. S. T'
```

改为pinitfree实现
```
import _ from 'lodash/fp';
const toUpperCase = s=>s.toUpperCase();
// pointfree模式
const initials = compose(_.join('. '), _.map(compose(toUpperCase,_.head)), _.split(' '));
console.log(initials("hunter stockton thompson"));// 'H. S. T'
```
pointfree 模式能够帮助我们减少不必要的命名，让代码保持简洁和通用。

对函数式代码来说，pointfree 是非常好的石蕊试验，因为它能告诉我们一个函数是否是接受输入返回输出的小函数

并非所有的函数式代码都是 pointfree 的，不过这没关系。可以使用它的时候就使用，不能使用的时候就用普通函数。比如，while 循环是不能组合的。

## 组合debug
组合的一个常见错误是，在没有局部调用之前，就组合类似 map 这样接受两个参数的函数。
```
const latin = compose(_.map,s=>s.toUpperCase(),_.reverse);
console.log(latin(["frog", "eyes"]));
```
正确的做法：
```
const latin = compose(_.map(s=>s.toUpperCase()),_.reverse);
```

定义一个trace方法追踪代码执行，纯函数报错只会是输入不符合要求，某种层面上降低了debug的难度
```
function trace(tag) {
    return (x)=>{
        console.log(tag,x);
        return x;
    }
}
```

测试：
```
const toUpperCase = s=>s.toUpperCase();
// const latin = compose(_.map(toUpperCase),trace('_.reverse成功执行'),_.reverse);
const latin = compose(_.map,toUpperCase,trace('_.reverse成功执行'),_.reverse);
console.log(latin(["frog", "eyes"]));
```
trace 函数允许我们在某个特定的点观察数据以便 debug

## 范畴学
范畴学是数学中的一个抽象分支，范畴学主要处理对象、态射和变化式，这些概念与编程联系紧密。

范畴学中，有一个概念叫做...范畴，有着以下组件的搜集就构成了一个范畴:
- 对象的搜集
- 态射的搜集
- 态射的组合
- identity的独特的态射
范畴学抽象到足以模拟任何事物，不过目前我们最关心的还是类型和函数，所以让我们把范畴学运用到它们身上看看。

### 对象的搜集
对象就是数据类型，例如 String、Boolean、Number 和 Object 等等。通常我们把数据类型视作所有可能的值的一个集合（set）。像 Boolean 就可以看作是 [true, false] 的集合，Number 可以是所有实数的一个集合。把类型当作集合对待是有好处的，因为我们可以利用集合论（set theory）处理类型。

### 态射的搜集
态射是标准的、普通的纯函数。

### 态射的组合
即纯函数的组合

### identity的独特的态射
先介绍一个独特的使用函数：
```
const id = x=>x;
```
你肯定会问：“这到底哪里有用了？”。之后我们会扩展这个函数，暂时先将其当作一个可以替代给定值的函数——一个假装自己是普通数据的函数。

id函数和组合可以完美适配，以下这个特性对所有一元函数[只接受一个参数的函数]都成立：
```
compose(id,f) == compose(f,id) == f;
```
这就是实数的单位元，之后我们会在很多地方使用`id`方法，不过暂时我们还是将它当作一个替代给定值的函数，这对写ponitfree非常有用

## 组合总结
组合像一系列管道那样将不同的函数联系在一起，数据可以或者说必须在其中流动——纯函数就是输入对输出，打破这个链条就是不尊重输出，会让我们的程序一无是处。

我们认为组合是高于其他所有原则的设计原则，组合让我们的代码简单而富有可读性。

# 类型签名