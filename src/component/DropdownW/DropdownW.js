import React from 'react';
import './DropdownW.less';
import {Icon} from "../index";


function DropdownW(props) {
    return <div className='DropdownW'>
        <div className="input">
            <div className="search">
                {/*<div></div>*/}
                <input type="text"/>
            </div>
            <div className="status">
                <Icon type='arrowDown'/>
            </div>
        </div>
        <div className="popup">

        </div>
    </div>
}

export default DropdownW;