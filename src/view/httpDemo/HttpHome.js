import React from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function HttpHome(props) {
    return <BoxM tit='HTTP学习'>
        <Link to='/http/p1'>Part1</Link>
    </BoxM>
}

export default HttpHome;