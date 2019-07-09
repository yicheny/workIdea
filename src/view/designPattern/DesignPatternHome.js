import React from 'react';
import {Link} from "react-router-dom";

function DesignPatternHome(props) {
    return (<div className='design'>
        <div className="design_document">
            <div>
                <Link to='/design/doc1'>doc1</Link>
            </div>
        </div>
        <div className="design_practice">实践</div>
    </div>);
}

export default DesignPatternHome;