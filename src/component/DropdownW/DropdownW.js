import React, {createRef, useEffect, useState} from 'react';
import './DropdownW.less';
import {Icon} from "../index";
import {cls} from "../../utils/publicFun";
import {useOnClickOutside} from "../../utils/customEvent";

function DropdownW(props) {
    const {options,onChange} = props;
    const [text,setText] = useState(props.value);
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
            <div className="status" onClick={open}>
                <Icon type='arrowDown' size={16}/>
            </div>
        </div>
        <div className="popup">
            <div className="list">
                {
                    options.map((el,i)=><div className={cls({selected:el.text===text},"item")} key={i} onClick={()=>handleClick(el)}>{el.text}</div>)
                }
            </div>
        </div>
    </div>;

    function handleClick(o) {
        setText(o.text);
        onChange(o);
        setUnfold(false);
    }

    function open() {
        return setUnfold(true)
    }

    function close() {
        return setUnfold(false)
    }
}
DropdownW.defaultProps={
    options:[],
    value:null,
    onChange:()=>{}
};

export default DropdownW;