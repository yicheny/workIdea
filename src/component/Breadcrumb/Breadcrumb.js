import React from 'react';
import './Breadcrumb.less';
import {Link,Route} from "react-router-dom";

const BreadcrumbItem = ({match:{path,url,isExact},Name,separator='/'}) =>{
    return <Link to={url}>
            <span className={isExact?'current':''}>{Name[path]}</span>
            {!isExact && <span className="separator"> {separator} </span>}
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
//通过match.path可以拿到动态路由，比如A/B/:id
//通过match.url可以拿到实际路由，比如A/B/1

