import React from 'react';
import './BoxM.less';

function BoxM(props) {
    const {tit,children} = props;
    return <div className='c_box'>
        {tit && <h3 className='c_box_tit'>{tit}</h3>}
        <div className="c_box_main">
            {children}
        </div>
    </div>
}

export default BoxM;