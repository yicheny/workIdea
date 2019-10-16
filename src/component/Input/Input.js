import React from 'react';
import './Input.less';

function Input(props) {
    const {type,value,addonBefore,style,className,onChange,onBlur,onFocus,...rest} = props;
    const cn = ["x_input_wrapper",className,addonBefore?'addonBefore':''].join(' ');

    return <span className={cn} style={style}>
            {addonBefore && <span className="x_input_addon">{addonBefore}</span>}
            <input value={value} type={type} onChange={onChange} onBlur={onBlur} onFocus={onFocus} {...rest}/>
        </span>
}

Input.defaultProps = {
    style:{},
    className:'',
    addonBefore:false,
    type:"text"
    // noBorder:false
};

export default Input;