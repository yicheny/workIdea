import React from 'react';
import './WkCard.less'
import {mergeCn,shuffle} from "../../../utils/publicFun";

function WkCard(props) {
    const {className,identity,code,user,face} = props;
    const cn = mergeCn('wkCard flex-y center', className);
    const mainCn = mergeCn("wkCard_main", getCamp(),face);

    return (<div className={cn}>
        <div className="wkCard_header">
            <span className="code">{code}号:</span>
            <span className="name">{user}</span>
        </div>
        <div className={mainCn}>
            <div className="card_back fill"> </div>
            <div className="card_front fill box2 flex center">
                {identity}
            </div>
        </div>
    </div>);

    function getCamp() {
        // const manCamp = ['村民','女巫','猎人','守卫','预言家'];
        const wolfCamp = ['狼人'];

        if (wolfCamp.includes(identity)) return 'wolf';
        return 'man'
    }
}

WkCard.defaultProps = {
    className: '',
    identity: '村民',//身份
    code:0,//编号
    name:'',//玩家名称
    face:'',//牌面
};

function WkCardBox(props) {
    const {data,className,current} = props;
    const cn = mergeCn('wkCardBox flex wrap', className);

    return <div className={cn}>
        {setIdentity()}
    </div>;

    function setIdentity() {
        const ids = creIds();
        return data.map((el,i)=>{
            return <WkCard identity={ids.pop()} user={el} code={i+1} key={i} face={cardFaceFor(el)}/>
        })
    }

    function creIds() {
        const ids = Array(12);
        ids.fill('狼人',0,4);
        ids.fill('村民',4,8);
        ids.fill('女巫',8,9);
        ids.fill('猎人',9,10);
        ids.fill('守卫',10,11);
        ids.fill('预言家',11,12);
        return shuffle(ids);
    }

    function cardFaceFor(item) {
        // console.log(item, current);
        const face = item === current;
        return face?'front':'back';
    }
}
export {WkCardBox};
