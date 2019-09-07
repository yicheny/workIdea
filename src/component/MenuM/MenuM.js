import React from 'react';
import {Link} from "react-router-dom";
import {Icon} from "antd";

function MenuItemM(props) {
    const {icon,tit} = props;
    return <Link className="x_menuItemM">
        <Icon type={icon}/>
        <span className="x_menuItemM_tit">
            {tit}
        </span>
    </Link>
}

function MenuM(props) {
    let {style,children} = props;
    return <div className='.x_menuM' style={style}>
        {children}
    </div>
}
MenuM.defaultProps = {
  style:{}
};

export {MenuM,MenuItemM};