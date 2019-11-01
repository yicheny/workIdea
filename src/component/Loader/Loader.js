import React from 'react';
import {Icon} from "../index";
import './Loader.less';

function Loader(props) {
    const {size,style,color} = props;

    return <div className="m_loader flex center" style={style}>
        <Icon type='load' size={size} color={color}/>
    </div>
}
Loader.defaultProps={
    size:30,
    style:{},
    color:'#1890ff'
};

export default Loader;