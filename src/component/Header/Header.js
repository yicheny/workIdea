import React from 'react';
import './Header.less';

function Header(props){
    const {value,style} = props;

    return <div className='x header' style={style}>
        {value}
    </div>
}

export default Header;