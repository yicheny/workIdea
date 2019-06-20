import React from 'react';
import './Button.less';

function Button(props) {
    const {type='text',className='',style={},children,...rest} = props;
    const cn = ['x_button',type,...className].join(' ');

    return (
        <span className={cn} style={style} {...rest}>
            {children}
        </span>
    );
}

export default Button;