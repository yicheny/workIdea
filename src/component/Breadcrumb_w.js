import React from 'react';
import {Link} from 'react-router-dom';
import './Breadcrumb_w.less';

function Breadcrumb_w(props) {
    const {location:{pathname},option,separator='/'} = props;
    // console.log(pathname,pathname.split('/'));

    return <div className='x_breadcrumb'>
        {pathname.split('/').map((el,i,arg) => <span key={i} className={[i===arg.length-1?'current':''].join(' ')}>
            <Link to={`/${el}`}>{option[el]}</Link>
            {i!==arg.length-1 && <span className='separator'>{separator}</span>}
        </span>)}
    </div>
}
export default Breadcrumb_w;