import React, {useDebugValue, useState} from 'react';

function Child() {
    const [isOpen] = useState(null);

    useDebugValue(isOpen ? 'open' : 'close');

    return isOpen;
}

function UseDebugValueDemo(props) {
    return <div>
        <Child/>
    </div>
}

export default UseDebugValueDemo;