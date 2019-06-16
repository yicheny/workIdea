import React from 'react';
import {Link, Route} from 'react-router-dom';
import './Breadcrumb_w.less';

const Breadcrumb_w = ({match, ...rest,}) => {
    let {name, separator} = rest;
    console.log(match,'match.path',name);
    return (
        <span>
      <Link to={match.url || ''} className={['x_breadcrumb', match.isExact ? 'current' : ''].join(' ')}>
          {name[match.path]}
          {!match.isExact && <span className="separator"> {separator} </span>}
      </Link>
      <Route path={`${match.url}/:path`}
             render={(props) => <Breadcrumb_w {...props} name={name} separator={separator}/>}/>
    </span>
    )
}
export default Breadcrumb_w;