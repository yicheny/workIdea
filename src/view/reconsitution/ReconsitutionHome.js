import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function ReconsitutionHome(props) {
    return <Fragment>
        <BoxM tit='Class1_实例与练习'>
            <Link to='/recons/class1/part1'>part1</Link>
        </BoxM>
        <BoxM tit='Class2_常用重构技巧'>
            <Link to='/recons/class2/extractFunction'>提炼函数</Link>
            <Link to='/recons/class2/inlineFunction'>内联函数</Link>
            <Link to='/recons/class2/extractVariable'>提炼变量</Link>
            <Link to='/recons/class2/inlineVariable'>内联变量</Link>
            <Link to='/recons/class2/changeFunctionDeclaration'>改变函数声明</Link>
        </BoxM>
    </Fragment>
}

export default ReconsitutionHome;