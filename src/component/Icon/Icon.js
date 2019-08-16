import React from 'react';
import './Icon.less';

function Icon(props) {
    let {type,size,style} = props;
    const cn = ['iconfont',`icon-${type}`].join(' ');
    style = {...style,fontSize:size,};

    console.log(cn);
    return (<i className={cn} style={style}>
    </i>)
}
Icon.defaultProps={
    type:'',
    size:20,
    style:{}
};

export default Icon;