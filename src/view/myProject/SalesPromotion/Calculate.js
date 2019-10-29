//现金收费抽象类
class CashSuper{
    constructor(money=0){
        this.money = money;
    }
}

//正常收费子类
class CashNormal extends CashSuper{
    totalFor = ()=>this.money;
}

//打折收费子类
class CashDiscount extends CashSuper{
    totalFor = (disc)=>this.money * disc;
}

//返利付费子类
class CashRebate extends CashSuper{
    totalFor = (condition,rebate)=>{
        if(this.money>=condition) return this.money - rebate;
        return this.money;
    }
}

//现金收费工厂类
export default class CashFactory{
    constructor(type){
        this.type = type;
    }

    createCash = ()=>{
        const cashs = {
            '0':()=>new CashNormal(),
            '1':()=>new CashDiscount(),
            '2':()=>new CashRebate()
        };

        return cashs[this.type]();
    }
}