import React from 'react';
import './Radio.less';
import {mergeCn} from "../../utils/publicFun";

function Radio(props) {

    return <span className="x_radio flex center-y" onClick={()=>props.onChange(props.value)}>
        <span className={boxCnFor()}> </span>
        <span className="x_radio_value">{props.children}</span>
    </span>;

    function boxCnFor() {
        return mergeCn('x_radio_box',props.value===props.selected&&'checked')
    }
}
Radio.defaultProps={
    value:''
};

function RadioGroup(props) {
    return <div className="x_radioGroup flex">
        {renderChildren()}
    </div>;

    function renderChildren() {
        return React.Children.map(props.children,child=>{
            return React.cloneElement(child,{
                selected:props.selected,
                onChange:props.onChange,
            })
        })
    }
}

export {Radio,RadioGroup};