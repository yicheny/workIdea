import React,{Fragment} from 'react';
import './Breadcrumb.less';
import {Link} from "react-router-dom";
import {RenderRoute} from "../view/router/Wrapper_Router";

const BreadcrumbItem = ({match,match:{path},Name,separator='/',...rest}) =>{
    return <Fragment>
        <Link to={path}>
            <span className={match.isExact?'current':''}>{Name[path]}</span>
            {!match.isExact && <span className="separator"> {separator} </span>}
        </Link>
    </Fragment>
};

const Breadcrumb = ({Name}) => {
    return <div className='x_breadcrumb'>
        {
            Name && Object.keys(Name).map((el,i)=>{
                return <RenderRoute key={i} path={el} component={BreadcrumbItem} Name={Name}/>
            })
        }
    </div>
};

export default Breadcrumb

