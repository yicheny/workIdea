import React from 'react';
import {Link} from "react-router-dom";
import {BoxM} from "../../component";

function ComponentHome(props) {
    return <BoxM tit='组件库测试'>
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
        <Link to='/component/radio'>Radio</Link>
        <Link to='/component/checkBox'>CheckBox</Link>
        <Link to='/component/progress'>Progress</Link>
        <Link to='/component/CountDown'>倒计时CountDown</Link>
        <Link to='/component/rate'>Rate</Link>
        <Link to='/component/tableW'>TableW</Link>
        <Link to='/component/textInput'>TextInput</Link>
        <Link to='/component/icon'>Icon展示</Link>
        <Link to='/component/DropdownW'>DropdownW</Link>
        <Link to='/component/showMarkdown' >MdHtml</Link>
        <Link to='/component/loader' >Loader</Link>
    </BoxM>
}

export default ComponentHome;