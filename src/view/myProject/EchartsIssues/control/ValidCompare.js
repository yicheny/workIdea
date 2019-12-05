import React, {memo} from 'react';
import ReactEcharts from 'echarts-for-react';
import '../EchartIssues.less';

const ValidCompare = memo(function ValidCompare(props) {
    const {data:{validInfos,voidInfos}} = props;

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['有效信息', '无效信息']
        },
        color:['LightGreen','DarkOrange'],
        series: [
            {
                name: '信息检测',
                type: 'pie',
                radius: ['50%', '70%'],
                // animation:false,//动画存在bug，待提交Issues
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: lenFor(validInfos), name: '有效信息'},
                    {value: lenFor(voidInfos), name: '无效信息'},
                ]
            }
        ]
    };

    return <div className='cardBox'>
        <ReactEcharts option={option}/>
    </div>;

    function lenFor(list) {
        return Array.isArray(list) ? list.length : 0;
    }
});

export default ValidCompare;