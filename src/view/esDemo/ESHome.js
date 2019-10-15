import React from 'react';
import {Link} from "react-router-dom";

function ESHome(props) {
    return (
        <div className='pad'>
            <Link to='/es/ts1'>TS1</Link>
            <Link to='/es/indexedDB'>indexedDB</Link>
        </div>
    );
}

export default ESHome;