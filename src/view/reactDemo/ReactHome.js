import React from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function ReactHome(props) {
    return <div>
        <BoxM tit='零散知识'>
            <Link to='/react/lifeCycle'>生命周期_16.3之前</Link>
            <Link to='/react/context'>Context</Link>
            <Link to='/react/hoc'>高阶组件_HOC</Link>
            <Link to='/react/children'>Children</Link>
            <Link to='/react/hookBase'>Hook基础</Link>
        </BoxM>
    </div>
}

export default ReactHome;