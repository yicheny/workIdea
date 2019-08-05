import React from 'react';

//单例模式定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点
function SingleTon(props) {
    //实现单例模式的关键在于：使用一个变量作为标志判断这个类是否已创建过对象
    var Singleton = function (name) {
        this.name = name;
    };
    Singleton.getInstance = function (name) {
        if(!this.instance){//第一次创建的时候this.instance为undefined,之后为第一次创建返回的对象
            this.instance = new Singleton(name);
        }
        return this.instance;
    };
    console.log(Singleton.getInstance('ylf'));
    console.log(Singleton.getInstance('hello'));
    //这里实现的不足之处在于，必须通过getInstance方法获取创建，和一般类创建对象的方式不同

    //关键：变量私有化——闭包
    var Singleton = (()=>{
        let instance;
        const Singleton = function (name) {
            if(instance) return instance;
            this.name = name;
            return instance = this;
        };

        return Singleton;
    })();
    console.log(new Singleton('aaa'));
    console.log(new Singleton('bbb'));
    //这个实现的不足是Singleton做了两件事：1.创建一个实例对象 2.确保只有一个对象，实际上我们想让它做的只是2,1和2耦合在一起，不方便之后复用，所以需要剥离开来


    //这里Singleton就变成了一个普通的类，而ProxySingleton与其组合就可以实现单例模式
    var Singleton = function (name) {
        this.name = name
    };
    var ProxySingleton = (()=>{
        let instance;
        return function (name) {
            if (!instance){
                instance = new Singleton(name)
            }
            return instance;
        }
    })();
    console.log(new ProxySingleton('ccc'));
    console.log(new ProxySingleton('ddd'));


    //JS中的单例模式
    //在传统的面向对象语言中，以类为中心，要创建对象必须先创建一个类，但在JS中，没这个必要，创建对象可以使用var a = {}这种便捷的方式，加上全局作用域的存在，实现单例模式会很简单
    //简单来说，会少一个创建类的步骤，不过唯一判断依旧有必要
    //另外全局作用域是很危险的东西，需要进行一些处理，例如使用命名空间【通过对象】,或者使用私用作用域【通过闭包】
    
    return (
        <div>
            单例模式
        </div>
    );
}

export default SingleTon;