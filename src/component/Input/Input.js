import React from 'react';
import './Input.less';

function Input({addonBefore,style={},className,...rest}) {
    const cn = ["x_input_wrapper",addonBefore?'addonBefore':''].join(' ');

    return <span className={cn} style={style}>
            {addonBefore && <span className="x_input_addon">{addonBefore}</span>}
            <input type="text" {...rest}/>
        </span>
}

export default Input;