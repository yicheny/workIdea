import React, {memo, useState} from 'react';
import {Container, TextInput} from "../../../component";
import ReactEcharts from 'echarts-for-react';

const SixDimRadar = memo(function SixDimRadar(props) {
    const {data}  = props;
    let i = -1;
    const option = {
        title: {
            text: '能力六维图'
        },
        radar: {
            shape: 'circle',
            name: {
                rich: {
                    a: {
                        color: 'red',
                        lineHeight: 20
                    },
                    b: {
                        color: '#fff',
                        align: 'center',
                        backgroundColor: '#777',
                        padding: [4, 6],
                        borderRadius: 4,
                    }
                },
                formatter: (v)=>{
                    i++;
                    return `{a|${v}}\n{b|${data[i] || 0}级}`
                }
            },
            radius: 90,
            indicator: [
                {name: '攻击', max: 5},
                {name: '防御', max: 5},
                {name: '速度', max: 5},
                {name: '持续', max: 5},
                {name: '范围', max: 5},
                {name: '开发度', max: 5}
            ],
        },
        color: ['#F35541', '#5397FF', '#F5A623'],
        series: [{
            type: 'radar',
            areaStyle: {
                // normal: {},
                opacity: 0.60
            },
            data: [
                {
                    value: data,
                    name: '能力等级'
                },
            ]
        }]
    };

    return <div style={{width:480,height:600}}>
        <ReactEcharts option={option}/>
    </div>
});
SixDimRadar.defaultProps = {
    data:[1,1,1,0,0,0]
};

function SixDimShow(props) {
    const [data,setData] = useState([5, 3, 5, 1, 1, 4]);
    return <Container header='六维展示'>
        <div style={{margin:8}}>
            <span>请输入六维值：</span>
            <TextInput onChange={handleChange} max={555555}/>
        </div>
        <SixDimRadar data={data}/>
    </Container>;

    function handleChange(v) {
        setData(v.split(''));
    }
}

export default SixDimShow;