import React, {useState} from 'react';
import './TextInput.less';
import {last, isNumber, mergeCn} from "../../utils/publicFun";

function TextInput(props) {
    const {system,type,onChange,placeholder} = props;
    const [value,setValue] = useState(props.value);

    return <span className={mergeCn('textInput_wrap')}>
        <input value={value} onFocus={handleFocus} onBlur={()=>onChange(value)} onChange={e=>handleChange(e.target.value)} placeholder={placeholder}/>
    </span>;

    function handleFocus() {
        if(Number(value)===0) return setValue('');
    }

    function handleChange(v) {
        if(v==='') return setValue('');
        if(!typeCheck()) return;
        return setValue(v);

        function typeCheck() {
            const typeStrategy = {
                text:()=>true,
                number:()=>{
                    if(!systemCheck()) return;
                    return !isNaN(Number(v));

                    function systemCheck() {
                        function genSystemList() {
                            if(!isNumber(system)||system<2) return console.error('genSystemList函数运行错误',system);
                            const systemList = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
                            return Array.from(Array(system),(item,index)=>systemList[index])
                        }
                        return genSystemList().includes(last(v));
                    }
                }
            };
            return typeStrategy[type]()
        }
    }
}
TextInput.defaultProps={
    system:10,//进制_目前最高支持16进制
    type:'text',
    value:'',
};

export default TextInput;