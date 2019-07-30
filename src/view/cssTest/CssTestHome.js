import React from 'react';
import {Link} from "react-router-dom";

function CssTestHome(props) {
    return (
        <div>
            <Link to='/cssTest/layout1'>跳转layout1</Link>
        </div>
    );
}

export default CssTestHome;