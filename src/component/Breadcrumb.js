import React from 'react';
import './Breadcrumb.less';
import {Link,Route} from "react-router-dom";

const BreadcrumbItem = ({match,match:{path},Name,separator='/'}) =>{
    return <Link to={path}>
            <span className={match.isExact?'current':''}>{Name[path]}</span>
            {!match.isExact && <span className="separator"> {separator} </span>}
        </Link>
};

const Breadcrumb = ({Name,...rest}) => {
    return <div className='x_breadcrumb'>
        {
            Name && Object.keys(Name).map((el,i)=>{
                return <Route key={i} path={el} render={(props)=><BreadcrumbItem {...props} Name={Name} {...rest}/>}/>
            })
        }
    </div>
};

export default Breadcrumb

