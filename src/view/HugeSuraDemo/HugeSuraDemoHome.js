import React from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function HugeSuraDemoHome(props) {
    return <BoxM tit='HugeSura'>
        <Link to='/hugeSura/genPerson'>人物生成</Link>
    </BoxM>
}

export default HugeSuraDemoHome;