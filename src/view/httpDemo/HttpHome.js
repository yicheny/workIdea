import React from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function HttpHome(props) {
    return <BoxM tit='HTTP练习-需启动服务端'>
        <Link to='/http/p1'>Demo1</Link>
    </BoxM>
}

export default HttpHome;