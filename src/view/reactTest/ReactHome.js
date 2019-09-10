import React from 'react';
import {Link} from "react-router-dom";

function ReactHome(props) {
    return <div className="x_pad">
        <Link to='/rDemo/lifeCycle'>生命周期_16.3之前</Link>
        <Link to='/rDemo/context'>Context</Link>
        <Link to='/rDemo/hoc'>高阶组件_HOC</Link>
        <Link to='/rDemo/children'>Children</Link>
        <Link to='/rDemo/hookBase'>Hook基础</Link>
    </div>
}

export default ReactHome;