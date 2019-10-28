import {isNumber} from "../utils/publicFun";

export default class Operation {
    constructor(num1,num2,operate){
        this.num1 = num1;
        this.num2 = num2;
        this.operate = operate;
    }

    resultFor = ()=>{
        if(!this.check()) return ;
        console.log(this.algorithm[this.operate]);
    };

    algorithm = {
        '+': this.num1 + this.num2,
        '-': this.num1 - this.num2,
        '*': this.num1 * this.num2,
        '/': this.num1 / this.num2,
    };

    check = ()=>{
        if (Object.keys(this.algorithm).includes(this.operate)) return console.error('未定义的操作符');
        if (!isNumber(this.num1)) return console.error('num1异常');
        if (!isNumber(this.num2)) return console.error('num2异常');
        return true;
    }
}
