import React from 'react';
import {Link} from "react-router-dom";

function MyProjectHome(props) {
    return (
        <div className='x_mProj'>
            <Link to='/mProj/calputer'>计算器</Link>
        </div>
    );
}

export default MyProjectHome;

