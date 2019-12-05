import React,{memo} from 'react';
import ReactEcharts from 'echarts-for-react';
import '../EchartsIssues.less';

const VersionCompareTree = memo(function (props) {
    const {data} = props;

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}"
        },
        series: [{
            name:'Issues数量',
            type: 'treemap',
            data: data.map(item=>{
                return {value:item.count,name:item.version}
            })
        }]
    };

    return <div className='cardBox'>
        <ReactEcharts option={option} style={{height:800}}/>
    </div>;
});

export default VersionCompareTree;