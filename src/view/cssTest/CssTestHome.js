import React from 'react';
import {Link} from "react-router-dom";

function CssTestHome(props) {
    return (
        <div className='pad'>
            <Link to='/cssTest/layout1'>Layout-上高固定，下高占满</Link>
            <Link to='/cssTest/table1'>Table1-一列固定，其余平分</Link>
            <Link to='/cssTest/overturn'>卡片翻转</Link>
            <Link to='/cssTest/move'>指哪走哪</Link>
        </div>
    );
}

export default CssTestHome;