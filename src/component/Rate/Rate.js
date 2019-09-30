import React from 'react';
import {Icon} from "../index";

function Rate(props) {
    const {value,size,color,type} = props;
    return <div className="x_rate">
        {
            Array.from(Array(5)).map((el,i)=>{
                if(i<value) return <Icon key={i} type={type} size={size} color={color}/>;
                return <Icon key={i} type={type} size={size}/>
            })
        }
    </div>
}
Rate.defaultProps={
    value:2,
    size:24,
    color:'#1890ff',
    type:'star'
};

export default Rate;