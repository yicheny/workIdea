import React from 'react';
import {Icon} from "../index";
import './Loader.less';

function Loader(props) {
    const {size,style,color,text} = props;

    return <div className="m_loader flex-y center" style={style}>
        <Icon type='load' size={size} color={color}/>
        {text && <span className='text'>{text}</span>}
    </div>
}
Loader.defaultProps={
    size:30,
    style:{},
    color:'#1890ff',
    text:'数据加载中……'
};

export default Loader;