import React from 'react';
import './Container.less';

function Container (props){
    return (
        <div className='x container'>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

export default Container;