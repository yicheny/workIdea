import React from 'react';
import './Tabs.less';

function Tabs(props) {
    let {active,data,className,onClick} = props;
    const cn = ['x_tabs',className].join(" ");

    return (
        <div className={cn}>
            {
                data.map((el,i)=>{
                    return<span key={i}
                                onClick={() => onClick(el.id)}
                                className={['x_tabs_item',el.id===active?'active':''].join(' ')}>{el.text}</span>
                })
            }
        </div>
    );
}

export default Tabs;