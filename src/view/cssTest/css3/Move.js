import React, {createRef} from 'react';
import './Move.less';

function Move(props) {
    const guestRef = createRef();

    return <div className="move" onClick={handleClick}>
            <div className="move_guest" ref={guestRef}> </div>
    </div>;

    function handleClick(e) {
        const x = e.pageX - guestRef.current.offsetLeft - (guestRef.current.clientWidth/2);
        const y = e.pageY - guestRef.current.offsetHeight + (guestRef.current.clientHeight/2);

        guestRef.current.style.transform = `translate(${x}px,${y}px)`
    }
}

export default Move;