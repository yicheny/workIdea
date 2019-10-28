import React, {useEffect, useState} from 'react';
import './DropdownW.less';
import {Icon} from "../index";
import {cls} from "../../utils/publicFun";

function DropdownW(props) {
    const {options,onChange} = props;
    const [text,setText] = useState('');
    const [unfold,setUnfold] = useState(false);

    useEffect(()=>{
        // document.addEventListener('click',close);
    },[]);

    return <div className={cls('DropdownW',{unfold})} onFocus={open}>
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
                    options.map((el,i)=><div className="item" key={i} onClick={()=>handleClick(el)}>{el.text}</div>)
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