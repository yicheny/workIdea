import React from 'react';
import './Input.less';

function Input(props) {
    const {addonBefore,style,className,onChange,onBlur} = props;
    const cn = ["x_input_wrapper",className,addonBefore?'addonBefore':''].join(' ');

    return <span className={cn} style={style}>
            {addonBefore && <span className="x_input_addon">{addonBefore}</span>}
            <input type="text" onChange={onChange} onBlur={onBlur}/>
        </span>
}

Input.defaultProps = {
    style:{},
    className:'',
    addonBefore:false,
    // noBorder:false
};

export default Input;