import React from 'react';
import './Button.less';

function Button(props) {
    let {type='text',cn,style} = props;
    cn = ['x_button',...cn].join(' ');

    return (
        <div className={cn} style={style} >

        </div>
    );
}

export default Button;