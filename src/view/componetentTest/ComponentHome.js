import React from 'react';
import {Link} from "react-router-dom";

function ComponentHome(props) {
    return (
        <div className='x_pad'>
            <Link to='/cDemo/all'>综合测试</Link>
            <Link to='/cDemo/bread'>Breadcrumd</Link>
            <Link to='/cDemo/tabs'>Tabs</Link>
            <Link to='/cDemo/message'>Message</Link>
            <Link to='/cDemo/modal'>Modal</Link>
            <Link to='/cDemo/menu'>Menu</Link>
            <Link to='/cDemo/pkCard'>PkCard</Link>
            <Link to='/cDemo/calendar'>Calendar_通用</Link>
            {/*<Link to='/cDemo/calendarW'>CalendarW_自用业务</Link>*/}
        </div>
    );
}

export default ComponentHome;