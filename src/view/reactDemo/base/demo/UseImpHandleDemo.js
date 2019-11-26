import React, {useImperativeHandle, useRef, forwardRef, useEffect} from 'react';

const FancyInput = forwardRef(function(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef}/>;
});

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