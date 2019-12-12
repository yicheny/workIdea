import React from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function ESHome(props) {
    return <BoxM tit='原生知识'>
        <Link to='/es/indexedDB'>indexedDB</Link>
        <Link to='/es/deepClone'>深拷贝</Link>
        <Link to='/es/reg'>正则表达式</Link>
        <Link to='/es/execMech'>执行机制</Link>
        <Link to='/es/callback'>回调</Link>
        <Link to='/es/promise'>Promise</Link>
        <Link to='/es/generator'>生成器</Link>

    </BoxM>
}

export default ESHome;