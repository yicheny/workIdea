import React from 'react';
import {Link} from "react-router-dom";

function RouterHome(props) {
    return <div className="x_pad">
        <Link to='/router/p1'>Part1</Link>
    </div>
}

export default RouterHome;