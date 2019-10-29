import React from 'react';
import './GuestGraph.less';

function GuestGraph(props) {
    return <div className='guest_graph' ref={props.middleRef}>
        <div className='guest_box'> </div>
    </div>
}

export default GuestGraph;