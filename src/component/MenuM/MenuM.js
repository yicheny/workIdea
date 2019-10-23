import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Icon as IconM} from '../../component'
import {Icon} from "antd";
import './MenuM.less'
import {mergeCn} from "../../utils/publicFun";

function MenuItemM(props) {
    const {icon, tit, url, selected, setSelected,open} = props;
    const cn = mergeCn("x_menuM_column x_menuItemM", tit === selected && 'selected');

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
        <div className="x_menuM_column x_menuM_header flex center" onClick={()=>setOpen(!open)}>
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
        return mergeCn('x_menuM flex-y', props.className, open?'on':'off')
    }
}

MenuM.defaultProps = {
    style: {},
    className: '',
    selected: '',
    open: true,
};

export {MenuM, MenuItemM};