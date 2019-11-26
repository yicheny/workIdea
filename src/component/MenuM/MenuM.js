import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Icon as IconM} from '../../component'
import Icon from "antd/es/icon";
import './MenuM.less'
import {cls} from "../../utils/publicFun";

function MenuItemM(props) {
    const {icon, tit, url, selected, setSelected,open} = props;
    const cn = cls("menuM_column x_menuItemM", { selected:tit === selected});

    return <Link to={url} className={cn} onClick={handleClick}>
        <Icon type={icon}/>
        {open && <span className="x_menuItemM_tit">{tit}</span>}
    </Link>;

    function handleClick() {
        setSelected(tit);
        saveSelected();

        function saveSelected() {
            return sessionStorage.setItem(props.menuName, tit);
        }
    }
}

function MenuM(props) {
    const [selected, setSelected] = useState(loadSelected());
    const [open, setOpen] = useState(props.open);

    return <div className={cnFor()} style={props.style}>
        <div className="menuM_column menuM_header flex center" onClick={()=>setOpen(!open)}>
            <IconM type={`${open ? 'shousuo'  : 'zhankai'}`}/>
        </div>
        {renderChildren()}
    </div>;

    function renderChildren() {
        return React.Children.map(props.children, child => {
            return React.cloneElement(child, {
                selected, setSelected, menuName: props.menuName,open
            })
        })
    }

    function loadSelected() {
        return sessionStorage.getItem(props.menuName) || props.selected
    }

    function cnFor() {
        return cls('menuM flex-y', props.className, open?'on':'off')
    }
}

MenuM.defaultProps = {
    style: {},
    className: '',
    selected: '',
    open: true,
};

export {MenuM, MenuItemM};