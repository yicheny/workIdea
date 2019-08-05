import React from 'react';

function Strategy(props) {
    //原始状态--非策略模式
    var calculateBonus = function( performanceLevel, salary ){
        if ( performanceLevel === 'S' ){
            return salary * 4;
        }
        if ( performanceLevel === 'A' ){
            return salary * 3;
        }
        if ( performanceLevel === 'B' ){
            return salary * 2;
        }
    };
    console.log(calculateBonus('B', 20000));      // 输出：40000
    console.log(calculateBonus('S', 6000));      // 输出：24000

    //策略模式
    var strategies = {
        S:v=>v*4,
        A:v=>v*3,
        B:v=>v*2
    };
    var calculateBonus = (level,salary)=>strategies[level](salary);
    console.log(calculateBonus('B', 20000));      // 输出：40000
    console.log(calculateBonus('S', 6000));      // 输出：24000

    return (
        <div>
            <h3>策略模式【表格驱动法】</h3>
            <p>
                Peter  Norvig 在他的演讲中曾说过：“在函数作为一等对象的语言中，策略模式是隐形的。 strategy 就是值为函数的变量
            </p>
        </div>
    );
}

export default Strategy;
//优点
//1. 策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句。
//2. 策略模式提供了对开放—封闭原则的完美支持，将算法封装在独立的 strategy 中，使得它们易于切换，易于理解，易于扩展。
//3. 策略模式中的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作。
//4. 在策略模式中利用组合和委托来让 Context 拥有执行算法的能力，这也是继承的一种更轻便的替代方案。

//缺点：
//首先，使用策略模式会在程序中增加许多策略类或者策略对象，但实际上这比把它们负责的逻辑堆砌在 Context 中要好。