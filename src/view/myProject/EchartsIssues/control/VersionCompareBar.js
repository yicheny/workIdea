import React,{memo} from 'react';
import ReactEcharts from 'echarts-for-react';
import '../EchartsIssues.less';

const VersionCompareBar = memo(function (props) {
    const {data} =  props;

    const option =  {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: '6%',
            left: '1%',
            right: '4%',
            bottom:'15%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : data.map(item=>item.version),
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        dataZoom: [
            {
                show: true,
                start: 0,
                end: 30
            },
        ],
        series : [
            {
                name:'Issues数量',
                type:'bar',
                barWidth: '60%',
                data:data.map(item=>item.count),
            }
        ]
    };

    return <div>
        <div className='cardBox'>
            <ReactEcharts option={option}/>
        </div>
    </div>;
});
VersionCompareBar.defaultProps= {
    data:[]
};

export default VersionCompareBar;