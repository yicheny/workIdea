import React from 'react';
import {Icon} from "../index";

function Rate(props) {
    const {value,size,color,type} = props;
    return <div className="x_rate">
        {
            Array.from(Array(5)).map((el,i)=>{
                if(i<value) return <Icon key={i} type={type} size={size} color={color}/>;
                return <Icon key={i} type={type} size={size} color='#d3d3d3'/>
            })
        }
    </div>
}
Rate.defaultProps={
    value:0,
    size:24,
    color:'#1890ff',
    type:'star'
};

export default Rate;