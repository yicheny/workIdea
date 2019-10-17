import React, {useState} from 'react';
import './TextInput.less';
import {last, isNumber, mergeCn} from "../../utils/publicFun";
import {Icon} from "../index";

function TextInput(props) {
    const {system, type, onChange, placeholder, digit, required,max} = props;
    const [value, setValue] = useState(props.value);
    const [error, setError] = useState(props.error);
    const [init, setInit] = useState(false);

    return <span className={mergeCn('textInput_wrap', error && 'error')}>
        {error && errorTipRender()}
        <input value={value} onFocus={handleFocus} onBlur={handleBlur} onChange={e => handleChange(e.target.value)}
               placeholder={placeholder}/>
    </span>;

    function handleFocus() {
        if (init && required && value === '') return setError('必填项');
        !init && setInit(true);
        if (Number(value) === 0) return setValue('');
    }

    function handleBlur() {
        if (init && required && value === '') return setError('必填项');
        setError(null);
        return onChange(value)
    }

    function handleChange(v) {
        if (v === '') return setValue('');
        if (!typeCheck()) return;
        if (max && v>max) return;
        return setValue(v);

        function typeCheck() {
            const typeStrategy = {
                text: () => true,
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
            return typeStrategy[type]()
        }
    }

    function errorTipRender() {
        return <div className="error_tip">
            <Icon type='error' size={16} color='#f35541' style={{margin: '0 6px'}}/>
            {error}
        </div>
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
    max:null
};

export default TextInput;