import React from 'react';
import {cls} from '../../utils/publicFun';
import './Icon.less';

function Icon(props) {
    let {type,size,style,className,color,onClick} = props;

    return (<i className={cls('iconfont',`icon-${type}`,className)} style={styleFor()} onClick={onClick}>
    </i>);

    function styleFor() {
        return  {...style,fontSize:size,color}
    }
}
Icon.defaultProps={
    type:'',
    size:20,
    style:{},
    className:'',
    onClick:()=>{}
};

export default Icon;