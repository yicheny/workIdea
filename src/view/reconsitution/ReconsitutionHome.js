import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

function ReconsitutionHome(props) {
    return <Fragment>
        <Link to='/recons/class1'>Class1_实例与练习</Link>
        <Link to='/recons/class2'>Class2_常用重构技巧</Link>
    </Fragment>
}

export default ReconsitutionHome;