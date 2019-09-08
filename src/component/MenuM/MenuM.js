import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {Icon} from "antd";
import './MenuM.less'
import {mergeCn} from "../../utils/publicFun";

let middle = {};

function MenuItemM(props) {
    const {icon, tit, url} = props;
    const cn = mergeCn("x_menuItemM",tit===middle.selected&&'selected');

    return <Link to={url} className={cn} onClick={handleClick}>
        <Icon type={icon}/>
        <span className="x_menuItemM_tit">
            {tit}
        </span>
    </Link>;

    function handleClick() {
        middle.setSelected(tit)
    }
}

function MenuM(props) {
    let {style, children} = props;
    const [selected,setSelected] = useState(props.selected);
    middle = {selected,setSelected};

    return <div className='x_menuM flex-y' style={style}>
        {children}
    </div>;
}

MenuM.defaultProps = {
    style: {},
    selected:''
};

export {MenuM, MenuItemM};