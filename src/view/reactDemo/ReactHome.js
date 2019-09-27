import React from 'react';
import {Link} from "react-router-dom";

function ReactHome(props) {
    return <div className="pad">
        <Link to='/react/lifeCycle'>生命周期_16.3之前</Link>
        <Link to='/react/context'>Context</Link>
        <Link to='/react/hoc'>高阶组件_HOC</Link>
        <Link to='/react/children'>Children</Link>
        <Link to='/react/hookBase'>Hook基础</Link>
    </div>
}

export default ReactHome;