import React from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function RouterHome(props) {
    return <BoxM tit='React-Router'>
        <Link to='/router/p1'>Part1</Link>
    </BoxM>
}

export default RouterHome;