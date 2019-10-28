// import {isNumber} from "../utils/publicFun";

//V2-利用对象继承的特性，并使用简单工厂模式【利用了对象多态】
//优点是解耦性更高，将容易变化的部分独立出来【易维护】
//缺点我感觉是检测的部分不如V1的方便，之后看有没有更好的解决方案【使用上要多判断一步，定义的代码量也多一些】
class Operation {
    constructor(num1=0,num2=0){
        this.num1 = num1;
        this.num2 = num2;
    }
}

class OperationAdd extends Operation{
    resultFor = ()=>this.num1 + this.num2
}

class OperationSub extends Operation{
    resultFor = ()=>this.num1 - this.num2
}

class OperationMul extends Operation{
    resultFor = ()=>this.num1 * this.num2
}

class OperationDiv extends Operation{
    resultFor = ()=>this.num1 / this.num2
}

export default class OperationFactory{
    constructor(oper){
        this.oper = oper;
    }

    createFactory = ()=>{
        const alg = {
            '+':()=>new OperationAdd(),
            '-':()=>new OperationSub(),
            '*':()=>new OperationMul(),
            '/':()=>new OperationDiv(),
        };
        return isExist(this.oper) ? alg[this.oper]() : console.error('未定义的运算符');

        function isExist(value) {
            return Object.keys(alg).includes(value)
        }
    }
}

//V1:主要利用了对象封装的特性
//评价：algorithm对象利用了对象多态的特性【如果不这么做而是在resultFor方法里去判断，则耦合度高】，不过这种方式还有改进的空间，可以将不同的算法独立成类或函数，这样更灵活，更方便维护
/*export default class Operation {
    constructor(num1=0,num2=0,operate){
        this.num1 = num1;
        this.num2 = num2;
        this.operate = operate;
    }

    resultFor = ()=>{
        if(!this.check()) return ;
        return this.algorithm[this.operate]();
    };

    algorithm = {
        '+': ()=>this.num1 + this.num2,
        '-': ()=>this.num1 - this.num2,
        '*': ()=>this.num1 * this.num2,
        '/': ()=>this.num1 / this.num2,
    };

    check = ()=>{
        if (!Object.keys(this.algorithm).includes(this.operate)) return console.error('未定义的操作符');
        if (!isNumber(this.num1)) return console.error('num1异常');
        if (!isNumber(this.num2)) return console.error('num2异常');
        return true;
    }
}*/
