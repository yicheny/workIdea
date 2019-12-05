import React,{memo} from 'react';
import ReactEcharts from 'echarts-for-react';
import '../EchartsIssues.less';

const VersionComparePie = memo(function (props) {
    const {data} = props;

    const option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
        },
        series: [
            {
                name:'Issues数量',
                type:'pie',
                radius: ['50%', '70%'],
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
                data:data.map(item=>{
                    return {value:item.count,name:item.version}
                })
            }
        ]
    };
    return <div className='cardBox'>
        <ReactEcharts option={option}/>
    </div>;
});

VersionComparePie.defaultProps= {
    data:[]
};

export default VersionComparePie;