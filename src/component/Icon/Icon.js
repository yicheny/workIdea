import React from 'react';
import './Icon.less';

function Icon({type,size,style}) {
    const cn = ['iconfont',`icon-${type}`].join(' ');
    style = {fontSize:size,...style};

    return <i className={cn} style={style}></i>
}

export default Icon;