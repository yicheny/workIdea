import React, {createRef, useEffect, useState} from 'react';
import './DropdownW.less';
import {Icon} from "../index";
import {cls} from "../../utils/publicFun";
import {useOnClickOutside} from "../../utils/customEvent";

function DropdownW(props) {
    const {options,onChange} = props;
    const [text,setText] = useState(initText());
    const [unfold,setUnfold] = useState(false);
    const ref = createRef();

    useEffect(()=>{
        useOnClickOutside(ref.current,close)
    },[]);

    return <div className={cls({unfold},'DropdownW')} onFocus={open} ref={ref}>
        <div className="input">
            <div className="search">
                <div className='text'>{text}</div>
                <input type="text"/>
            </div>
            <div className="status" onClick={toggle}>
                <Icon type='arrowDown' size={16}/>
            </div>
        </div>
        <div className="popup">
            <div className="list">
                {
                    options.map((el,i)=><div className={cls({selected:el.text===text},"item")} key={i} onClick={(e)=>handleClick(e,el,el.value)}>{el.text}</div>)
                }
            </div>
        </div>
    </div>;

    function handleClick(e,o,v) {
        setText(o.text);
        onChange(e,o,v);
        close();
    }

    function open() {
        return setUnfold(true)
    }

    function close() {
        return setUnfold(false)
    }

    function toggle() {
        return setUnfold(!unfold)
    }

    function initText() {
        const o = options.find(el=>el.value===props.value);
        return o ? o.text : '';
    }
}
DropdownW.defaultProps={
    options:[],
    value:null,
    onChange:()=>{}
};

export default DropdownW;