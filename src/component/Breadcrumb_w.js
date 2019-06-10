import React from 'react';
import {Link, Route} from 'react-router-dom';
import './Breadcrumb_w.less';

const Breadcrumb_w = ({match, ...rest,}) => {
    const {name, separator} = rest;
    return (
        <span>
      <Link to={match.url || ''} className={['x_breadcrumb', match.isExact ? 'current' : ''].join(' ')}>
          {name.shift()}
          {!match.isExact && <span className="separator"> {separator} </span>}
      </Link>
      <Route path={`${match.url}/:path`}
             render={(props) => <Breadcrumb_w {...props} name={name} separator={separator}/>}/>
    </span>
    )
}
export default Breadcrumb_w;