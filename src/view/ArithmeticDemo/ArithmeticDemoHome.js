import React from 'react';
import {Link} from "react-router-dom";

function ArithmeticDemoHome(props) {
    return <div className='pad'>
        <Link to='/arithmetic/questBank'>题库</Link>
    </div>
}

export default ArithmeticDemoHome;