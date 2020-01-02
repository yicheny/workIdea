import React from 'react';
import './PkCard.less';
import {cls} from '../../utils/publicFun';

function PkCard(props) {
    let {data:{graph,value,face},scale,onClick,style} = props;
    const cn = cls('x_pkCard',face,{scale});
    const graphCn = cls('x_graph',graph);

    return (
        <div className={cn} onClick={onClick} style={style}>
            <div className="x_pkCard_main fill">
                <div className="x_pkCard_backBg fill">
                </div>
                <div className="x_pkCard_front fill  flex-y">
                    <i className={graphCn}/>
                    <span className="x_value flex center">
                {value}
            </span>
                </div>
            </div>
        </div>
    );
}
PkCard.defaultProps={
    data:{
        graph:null,
        value:null,
        face:'back',//牌面，front-正面 back-背面
    },
    scale:false,
};

export default PkCard;