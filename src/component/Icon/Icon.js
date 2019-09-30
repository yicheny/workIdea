import React from 'react';
import './Icon.less';

function Icon(props) {
    let {type,size,style,className,color} = props;
    const cn = ['iconfont',`icon-${type}`,className].join(' ');

    return (<i className={cn} style={styleFor()}>
    </i>);

    function styleFor() {
        return  {...style,fontSize:size,color}
    }
}
Icon.defaultProps={
    type:'',
    size:20,
    style:{},
    className:''
};

export default Icon;