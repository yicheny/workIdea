//抽象算法类
class CashStrategy {
    constructor(money=0){
        this.money = money;
    }
}

//正常收费策略子类
export class CashNormal extends CashStrategy{
    totalFor = ()=>this.money;
}

//打折收费策略子类
export class CashDiscount extends CashStrategy{
    totalFor = (disc)=>this.money * disc;
}

//返利付费策略子类
export class CashRebate extends CashStrategy{
    totalFor = (str)=>{
        const [condition,rebate]= [...(str.split(','))];
        if(this.money>=condition) return this.money - rebate;
        return this.money;
    }
}

//上下文类
export class CashContext{
    constructor(type){
        const strategies = {
            '0':new CashNormal(),
            '1':new CashDiscount(),
            '2':new CashRebate()
        };

        return strategies[type];
    }
}