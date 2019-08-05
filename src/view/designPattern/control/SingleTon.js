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

    return (
        <div>
            单例模式
        </div>
    );
}

export default SingleTon;