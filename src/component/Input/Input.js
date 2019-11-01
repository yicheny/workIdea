import React from 'react';
import './Input.less';
import {cls} from "../../utils/publicFun";

function Input(props) {
    const {type,value,addonBefore,style,className,onChange,onBlur,onFocus,...rest} = props;
    const cn = cls("x_input_wrapper",className,{addonBefore});

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