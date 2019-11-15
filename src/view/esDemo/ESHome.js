import React from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function ESHome(props) {
    return <BoxM tit='原生知识'>
        <Link to='/es/ts1'>TS1</Link>
        <Link to='/es/indexedDB'>indexedDB</Link>
        <Link to='/es/deepClone'>深拷贝</Link>
        <Link to='/es/reg'>正则表达式</Link>
    </BoxM>
}

export default ESHome;