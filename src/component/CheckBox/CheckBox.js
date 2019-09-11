import React, {useEffect, useState} from 'react';
import './CheckBox.less';
import {delArrItem, mergeCn} from "../../utils/publicFun";

function CheckBox(props) {
    const [checked,setChecked] = useState(false);

    return <span className="x_checkBox flex center" onClick={handleClick}>
        <span className={boxCnFor()}> </span>
        <span className="x_checkBox_value">{props.children}</span>
    </span>;

    function boxCnFor() {
        return mergeCn("x_checkBox_box", checked&&'checked')
    }
    function handleClick() {
        const isChecked = !checked;
        isChecked ? checkedSet() : noCheckedSet();
        setChecked(isChecked);

        function checkedSet() {
            props.setBoxList((props.boxList.concat([props.value])))
        }
        function noCheckedSet() {
            props.setBoxList(delArrItem(props.boxList,props.value));
        }
    }
}

function CheckBoxGroup(props) {
    const [boxList,setBoxList] = useState([]);

    useEffect(()=>{
        props.onChange(boxList)
    },[boxList]);

    return <div className="x_checkBoxGroup flex">
        {renderChildren()}
    </div>;

    function renderChildren() {
        return React.Children.map(props.children,child=>{
            return React.cloneElement(child,{
                boxList,setBoxList
            })
        })
    }
}

export {CheckBox,CheckBoxGroup};