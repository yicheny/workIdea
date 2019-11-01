import React from 'react';
import './Tabs.less';
import {cls} from "../../utils/publicFun";

function Tabs(props) {
    let {active,data,className,onClick} = props;

    return (
        <div className={cls('x_tabs',className)}>
            {
                data.map((el,i)=>{
                    return <span key={i} onClick={() => onClick(el.id)}
                                className={cls('x_tabs_item',{active:el.id===active})}>{el.text}</span>
                })
            }
        </div>
    );
}

export default Tabs;