import {Link} from "react-router-dom";
import React from "react";
import './QuestItem.less';

function QuestItem(props) {
    const {tit, demo, des, memo, level} = props;

    return <div className='questItem box'>
        <h3>{tit}</h3>
        <p className={`questItem_level_${level}`}>难度：{levelFor()}</p>
        <p>{des}</p>
        {memo && <p style={{color: 'red'}}>备注：{memo}</p>}
        <Link to={`/arithmetic/questBank/${demo}`}>Demo</Link>
    </div>;

    function levelFor() {
        const levelMap = {
            A: '困难',
            B: '中等',
            C: '简单'
        };

        return levelMap[level]
    }
}
QuestItem.defaultProps = {
    memo: null
};
export default QuestItem;