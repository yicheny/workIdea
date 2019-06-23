import React from 'react';

function Input({addonBefore,...rest}) {
    return <span className="x_input_group_wrapper">
        <span className="x_input_wrapper">
            {addonBefore && <span className="x_input_group_addon">{addonBefore}</span>}
            <input type="text" {...rest}/>
        </span>
    </span>
}

export default Input;