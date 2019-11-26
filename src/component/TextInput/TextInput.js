import React, {useEffect, useState} from 'react';
import './TextInput.less';
import {last, isNumber, cls} from "../../utils/publicFun";
import {Icon} from "../index";

function TextInput(props) {
    const {system, type, onChange, digit, required, max, min, autoP, autoPTime, addonBefore} = props;
    const [value, setValue] = useState(props.value);
    const [error, setError] = useState(props.error);
    const [placeholder, setPlaceholder] = useState('');

    let autoPTimeId = null;

    useEffect(() => {
        autoP ? autoPrint() : setPlaceholder(props.placeholder);
        return ()=>{
            if(autoPTimeId) clearInterval(autoPTimeId);
        }
    }, []);

    return <span className={cnFor()}>
        {error && errorTipRender()}
        {addonBefore && <span className="textInput_addon flex center">{addonBefore}</span>}
        <input type={type} value={value} onBlur={handleBlur} onChange={e => handleChange(e.target.value)}
               placeholder={placeholder}/>
    </span>;

    function handleBlur() {
        if (!validate()) return;
        setError(null);
        return onChange(value)
    }

    function handleChange(v) {
        if (v === '') return setValue('');
        if (!typeCheck()) return;
        if (max && v > max) return;
        return setValue(v);

        function typeCheck() {
            const typeStrategy = {
                number: () => {
                    if (digitCheck()) return;
                    if (!systemCheck()) return;
                    return !isNaN(Number(v));

                    function systemCheck() {
                        function genSystemList() {
                            if (!isNumber(system) || system < 2) return console.error('genSystemList函数运行错误', system);
                            const systemList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
                            return ['.'].concat(Array.from(Array(system), (item, index) => systemList[index]))
                        }

                        return genSystemList().includes(last(v));
                    }

                    function digitCheck() {
                        return deciLenFor() > digit;

                        function deciLenFor() {
                            return decimalFor().length;

                            function decimalFor() {
                                const matchs = /(\d?)\.(\d*)/.exec(v);
                                return matchs ? matchs[2] : '';
                            }
                        }
                    }
                }
            };

            if(!Object.keys(typeStrategy).includes(type)) return true;
            return typeStrategy[type]()
        }
    }

    function validate() {
        if (required && value === '') return setError('必填项');
        if (min && value < min) return setError(`最小输入值为${min}`);
        return true;
    }

    function errorTipRender() {
        return <span className="error_tip">
            <Icon type='error' size={16} color='#f35541' style={{margin: '0 6px'}}/>
            {error}
        </span>
    }

    function autoPrint() {
        const tips = props.placeholder.split(' ');
        const cyclicFoo = genCyclic();
        autoPTimeId = setInterval(() => {
            cyclicFoo()
        }, autoPTime);

        function genCyclic() {
            let i = 0;
            let i2 = 0;
            return function () {
                i = i % tips.length;
                setPlaceholder(tips[i].slice(0, i2));
                i2++;
                if (i2 > tips[i].length) {
                    i2 = 0;
                    i++;
                }
            }
        }
    }

    function cnFor() {
        return cls('textInput_wrap', {error,addonBefore})
    }
}

TextInput.defaultProps = {
    system: 10,//进制_目前最高支持16进制
    type: 'text',
    value: '',
    onChange: () => {
    },
    digit: 100,
    required: false,
    error: null,
    max: null,
    min: null,
    autoP: false,//placeholder是否循环打印提示
    autoPTime: 300,
    addonBefore: null
};

export default TextInput;