[TOC]

# 基础
## 1.什么是函数式编程？
函数式编程是一种编程风格，比如命令式。

## 2.为什么选择它？
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

不过有一个问题，函数嵌套让人有点难以理解。