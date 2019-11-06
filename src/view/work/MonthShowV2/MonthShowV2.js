import React from "react";
import _ from 'lodash';
import {data} from "./Data/data"
import './MonthShowV2.less';
import {Container,TableW as Table,ColumnW as Column} from "../../../component";

const monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function MonthTable(props) {
    const {data:{lData,mData}} = props;
    return <div className='month_table flex'>
        <div className="month_table_L">
            <div className="header">
                年份
            </div>
            {
                lData.map((el,i)=><div key={i} className="item">
                    {el}
                </div>)
            }
        </div>
        <div className="month_table_M">
            <Table data={mData}>
                <Column text='名称' bind='name' width={100}/>
                <Column text='1月' bind='Jan' width={100}/>
                <Column text='2月' bind='Feb' width={100}/>
                <Column text='3月' bind='Mar' width={100}/>
                <Column text='4月' bind='Apr' width={100}/>
                <Column text='5月' bind='May' width={100}/>
                <Column text='6月' bind='Jun' width={100}/>
                <Column text='7月' bind='Jul' width={100}/>
                <Column text='8月' bind='Aug' width={100}/>
                <Column text='9月' bind='Sep' width={100}/>
                <Column text='10月' bind='Oct' width={100}/>
                <Column text='11月' bind='Nov' width={100}/>
                <Column text='12月' bind='Dec' width={100}/>
                <Column text='年度累计' bind='all' width={100}/>
            </Table>
        </div>
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
        return {
            lData:_.uniq(res.map(el=>el.year)),
            mData:_.orderBy(res, 'year')
        };

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