import React from 'react';
import './Input.less';

function Input(props) {
    const {value,addonBefore,style,className,onChange,onBlur,onFocus} = props;
    const cn = ["x_input_wrapper",className,addonBefore?'addonBefore':''].join(' ');

    return <span className={cn} style={style}>
            {addonBefore && <span className="x_input_addon">{addonBefore}</span>}
            <input value={value} type="text" onChange={onChange} onBlur={onBlur} onFocus={onFocus}/>
        </span>
}

Input.defaultProps = {
    style:{},
    className:'',
    addonBefore:false,
    // noBorder:false
};

export default Input;