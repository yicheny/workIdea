import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {Container} from "../../../component";
import './Total.less';

const option = {
    color: ['#8EC9EB'],
    legend: {
        data:['高度(km)与气温(°C)变化关系']
    },
    tooltip: {
        trigger: 'axis',
        formatter: "Temperature : <br/>{b}km : {c}°C"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false,
        },
        axisLine:{
            lineStyle:{
                type:'dashed'
            }
        },
        axisTick:{
            show:false
        },
        axisLabel: {
            formatter: '{value} °C',
        }
    },
    yAxis: {
        type: 'category',
        show: false,
        axisLine: {onZero: false},
        axisLabel: {
            formatter: '{value} km'
        },
        boundaryGap: true,
        data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
    },
    graphic: [
        {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 110,
            bottom: 110,
            z: 100,
        },
    ],
    series: [
        {
            name: '高度(km)与气温(°C)变化关系',
            type: 'bar',
            smooth: true,
            barCategoryGap: 25,
            lineStyle: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            },
            data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
        }
    ]
};

function EchartCard() {
    return <div className="echart-card">
        <ReactEcharts option={option} style={{height:600}}/>
    </div>
}

function Total(props) {
    return <Container header='汇总' className='work-total'>
        <div className="titles">
            {Array.from(Array(9),(x,i)=><div key={i}>{i+1}</div>)}
        </div>
        <div className="echart-card-wrap flex">
            <EchartCard/>
            <EchartCard/>
            <EchartCard/>
            <EchartCard/>
        </div>
    </Container>
}

export default Total;