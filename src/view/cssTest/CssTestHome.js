import React from 'react';
import {Link} from "react-router-dom";

function CssTestHome(props) {
    return (
        <div>
            <Link to='/cssTest/layout1'>跳转Layout1</Link> <br/>
            <Link to='/cssTest/table1'>跳转Table1</Link>
        </div>
    );
}

export default CssTestHome;