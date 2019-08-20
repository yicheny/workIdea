import React from 'react';
import './Icon.less';

function Icon(props) {
    let {type,size,style,className} = props;
    const cn = ['iconfont',`icon-${type}`,className].join(' ');
    style = {...style,fontSize:size,};

    return (<i className={cn} style={style}>
    </i>)
}
Icon.defaultProps={
    type:'',
    size:20,
    style:{},
    className:''
};

export default Icon;