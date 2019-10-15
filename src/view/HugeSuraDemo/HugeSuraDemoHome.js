import React from 'react';
import {Link} from "react-router-dom";

function HugeSuraDemoHome(props) {
    return <div className='pad'>
        <Link to='/hugeSura/genPerson'>人物生成</Link>
    </div>
}

export default HugeSuraDemoHome;