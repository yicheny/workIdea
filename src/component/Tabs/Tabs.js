import React from 'react';
import './Tabs.less';

function Tabs({active,tabData,className,...rest}) {
    const {onClick} = rest;
    const cn = ['x_tabs',className].join(" ");

    return (
        <div className={cn}>
            {
                tabData.map((el,i)=>{
                    return<span key={i}
                                onClick={() => onClick(el.id)}
                                className={['x_tabs_item',el.id===active?'active':''].join(' ')}>{el.text}</span>
                })
            }
        </div>
    );
}

export default Tabs;