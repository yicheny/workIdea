import React from 'react';
import './PkCard.less';
import {mergeCn} from '../../utils/publicFun';

function PkCard(props) {
    let {graph,value,face} = props;
    const cn = mergeCn('x_pkCard',face);
    const graphCn = mergeCn('x_graph',graph);

    return (
        <div className={cn}>
            <div className="x_backBg">

            </div>
            <div className="x_pkCard_main">
                <i className={graphCn}/>
                <span className="x_value">
                {value}
            </span>
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