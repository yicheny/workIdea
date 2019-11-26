import React,{Fragment} from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function ReactHome(props) {
    return <Fragment>
        <BoxM tit='零散知识_弃'>
            <Link to='/react/mvc'>MVC演变</Link>
            <Link to='/react/lifeCycle'>生命周期_16.3之前</Link>
            <Link to='/react/context'>Context</Link>
            <Link to='/react/hoc'>高阶组件_HOC</Link>
            <Link to='/react/children'>Children</Link>
            <Link to='/react/hookBase'>Hook基础</Link>
        </BoxM>

        <BoxM tit='基础知识_Hook API'>
            <Link to='/react/base/hook'>Hook API</Link>
            <Link to='/react/base/useState'>useState</Link>
            <Link to='/react/base/useEffect'>useEffect</Link>
            <Link to='/react/base/useContext'>useContext</Link>
            <Link to='/react/base/useReducer'>useReducer</Link>
            <Link to='/react/base/useCallback'>useCallback</Link>
            <Link to='/react/base/useMemo'>useMemo</Link>
            <Link to='/react/base/useRef'>useRef</Link>
            <Link to='/react/base/useImperativeHandle'>UseImperativeHandle</Link>
            <Link to='/react/base/useLayoutEffect'>UseLayoutEffect</Link>
        </BoxM>
    </Fragment>
}

export default ReactHome;