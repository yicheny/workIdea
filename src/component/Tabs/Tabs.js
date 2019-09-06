import React from 'react';
import './Tabs.less';
import {mergeCn} from "../../utils/publicFun";

function Tabs(props) {
    let {active,data,className,onClick} = props;
    const cn = mergeCn('x_tabs',className);

    return (
        <div className={cn}>
            {
                data.map((el,i)=>{
                    return <span key={i} onClick={() => onClick(el.id)}
                                className={mergeCn('x_tabs_item',el.id===active&&'active')}>{el.text}</span>
                })
            }
        </div>
    );
}

export default Tabs;