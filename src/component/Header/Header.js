import React from 'react';
import './Header.less';

function Header(props){
    const {children,style} = props;

    return <div className='x_header' style={style}>
        {children}
    </div>
}

export default Header;