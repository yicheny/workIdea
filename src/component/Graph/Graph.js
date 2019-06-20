import React from 'react';
import './Graph.less';

function Graph(props){
    let {type='square',size=16,color='green',style={}} = props;
    const cn = `x graph ${type}`;
    //triangle三角形   square正方形   roundness圆形

    style = type!=='triangle'
        ? {...style, width:`${size}px`, height:`${size}px`, background:color}
        : {...style, border: `${size*0.6}px solid transparent`,borderBottom: `${size}px solid ${color}`};

    return <div className={cn} style={style}>
    </div>
}

export default Graph;