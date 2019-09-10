import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {Icon} from "antd";
import './MenuM.less'
import {mergeCn} from "../../utils/publicFun";

function MenuItemM(props) {
    const {icon, tit, url,selected,setSelected} = props;
    const cn = mergeCn("x_menuItemM",tit===selected&&'selected');

    return <Link to={url} className={cn} onClick={handleClick}>
        <Icon type={icon}/>
        <span className="x_menuItemM_tit">
            {tit}
        </span>
    </Link>;

    function handleClick() {
        setSelected(tit);
        saveSelected();

        function saveSelected() {
            return sessionStorage.setItem(props.menuName,tit);
        }
    }
}

function MenuM(props) {
    const [selected,setSelected] = useState(loadSelected());

    return <div className='x_menuM flex-y' style={props.style}>
        {renderChildren()}
    </div>;

    function renderChildren() {
        return React.Children.map(props.children,child=>{
            return React.cloneElement(child,{
                selected,setSelected,menuName:props.menuName
            })
        })
    }

    function loadSelected() {
        return sessionStorage.getItem(props.menuName) || props.selected
    }
}

MenuM.defaultProps = {
    style: {},
    selected:''
};

export {MenuM, MenuItemM};