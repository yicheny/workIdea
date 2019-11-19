import React from 'react';

function Demo(props) {
    //中国员工抽象类【定义公共接口】
    class CStaff{
        '编程' = ()=>console.error('子类必须重定义 编程 方法');
        '测试' = ()=>console.error('子类必须重定义 测试 方法');
        '设计' = ()=>console.error('子类必须重定义 设计 方法');
    }

//中国员工具体类小明
    class CStaffMing extends CStaff{
        '编程' = ()=>{
            console.log('小明开始编程啦！');
        }

        '测试' = ()=>{
            console.log('小明开始测试啦！');
        }

        '设计' = ()=>{
            console.log('小明开始设计啦！');
        }
    }

//外国员工抽象类
    class FStaff{
        code = ()=>console.error('子类必须重定义code方法');
        test = ()=>console.error('子类必须重定义test方法');
        design = ()=>console.error('子类必须重定义design方法');
    }

//适配器类
    class AdapterStaff extends FStaff{
        constructor(){
            super();
            this.adaptee = new CStaffMing();//这里也可以传入
        }

        code = ()=>this.adaptee.编程();
        test = ()=>this.adaptee.测试();
        design = ()=>this.adaptee.设计();
    }

//客户端【执行过程】
    const staff = new AdapterStaff();
    staff.code();
    staff.test();
    staff.design();
    return (
        <div></div>
    );
}

export default Demo;