import React from 'react';
import './Button.less';

function Button(props) {
    let {type='text',cn='',style={},children,...rest} = props;
    cn = ['x_button',type,...cn].join(' ');

    return (
        <span className={cn} style={style} {...rest}>
            {children}
        </span>
    );
}

export default Button;