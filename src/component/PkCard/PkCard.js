import React from 'react';
import './PkCard.less';
import {mergeCn} from '../../utils/publicFun';

function PkCard(props) {
    let {graph,value,face,onClick} = props;
    const cn = mergeCn('x_pkCard',face);
    const graphCn = mergeCn('x_graph',graph);

    return (
        <div className={cn} onClick={onClick}>
            <div className="x_pkCard_main fill">
                <div className="x_pkCard_backBg fill">
                </div>
                <div className="x_pkCard_front fill">
                    <i className={graphCn}/>
                    <span className="x_value">
                {value}
            </span>
                </div>
            </div>
        </div>
    );
}
PkCard.defaultProps={
    graph:null,
    value:null,
    face:'back',//牌面，front-正面 back-背面
};

export default PkCard;