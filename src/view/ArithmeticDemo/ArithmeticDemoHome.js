import React from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function ArithmeticDemoHome(props) {
    return <BoxM tit='算法实践'>
        <Link to='/arithmetic/questBank'>题库</Link>
    </BoxM>
}

export default ArithmeticDemoHome;