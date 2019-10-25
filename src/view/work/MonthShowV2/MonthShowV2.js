import React from "react";
import _ from 'lodash';
import {data} from "./Data/data"
import './MonthShowV2.less';
import {Container} from "../../../component";

const monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function MonthTable(props) {
    const {data} = props;
    console.log(data);
    return <div className='flex'>

    </div>
}

class MonthShowV2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:null
        }
    }

    componentDidMount() {
        this.setState({data:this.newDataFor(data())})
    }

    newDataFor = (data) => {
        let res = [];
        const {benchmarks,product,name,benchmarkName} = data;
        spreadArr(product,(el)=>res.push({...el,type:'product',name}));
        spreadArr(benchmarks,(el)=>res.push({...el,type:'benchmark',name:benchmarkName}));
        return _.orderBy(res, 'year');

        function spreadArr(list,callback=()=>{}) {
            list.forEach((el,i)=>{
                el.month.forEach((el2,i2)=>el[monthName[i2]] = el2);
                callback(el);
            });
        }
    };

    render(){
        const {data} = this.state;
        return <Container header='MonthShowV2' nopad>
            <div className='month_show2'>
                {data && <MonthTable data={data}/>}
            </div>
        </Container>
    }
}
export default MonthShowV2;