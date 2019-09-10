import React from 'react';
import {Link} from "react-router-dom";

function ComponentHome(props) {
    return (
        <div className='x_pad'>
            <Link to='/component/all'>综合测试</Link>
            <Link to='/component/bread'>Breadcrumd</Link>
            <Link to='/component/tabs'>Tabs</Link>
            <Link to='/component/message'>Message</Link>
            <Link to='/component/modal'>Modal</Link>
            <Link to='/component/menu'>Menu</Link>
            <Link to='/component/pkCard'>PkCard</Link>
            <Link to='/component/calendar'>Calendar_通用</Link>
            {/*<Link to='/component/calendarW'>CalendarW_自用业务</Link>*/}
            <Link to='/component/menuM'>MenuM</Link>
        </div>
    );
}

export default ComponentHome;