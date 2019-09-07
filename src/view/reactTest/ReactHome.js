import React from 'react';
import {Link} from "react-router-dom";

function ReactHome(props) {
    return <div className="x_pad">
        <Link to='/rDemo/lifeCycle'>生命周期——16.3之前</Link>
        <Link to='/rDemo/context'>Context</Link>
        <Link to='/rDemo/hoc'>高阶组件——HOC</Link>
    </div>
}

export default ReactHome;