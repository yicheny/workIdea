import React, {useImperativeHandle, useRef, forwardRef, useEffect} from 'react';

function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef}/>;
}
FancyInput = forwardRef(FancyInput);

function UseImpHandleDemo(props) {
    const ref = useRef();

    useEffect(()=>{
        console.log(ref);
    },[]);

    return (
        <div>
            <FancyInput ref={ref}/>
        </div>
    );
}

export default UseImpHandleDemo;