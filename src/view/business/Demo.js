import React from "react";
import _ from 'lodash';
import {data} from "../../data/business/data"
import '../../asset/style/View/business/demo.less'

class ChangeDisplay extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {v,max,min} = this.props;
        return <span className={[v===max?'up':(v===min?'down':'')]}>
            {v===null?'-':v}
        </span>
    }
}

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:null
        }
    }

    componentDidMount() {
        this.setState({data:this.props.data});
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.data!==this.props.data){
            this.setState({data:this.props.data})
        }
    }

    render() {
        const {option:{title,bind}} = this.props;
        const {data} = this.state;

        if(!data) return <div>没有数据</div>;

        return <table>
            <tbody>
                <tr>
                    {
                        title.map((item,index)=>{
                            return <th key={index}>
                                {item}
                            </th>
                        })
                    }
                </tr>
                {
                    data.map(item=>{
                        return item.details.map((ele,index)=>{
                            return <tr key={index}>
                                {bind.map((iItem,iIndex)=>{
                                    if(index===0){
                                        if(iIndex!==0) {
                                            return <td key={iIndex}>
                                                <ChangeDisplay v={ele[iItem]} min={ele.minVal} max={ele.maxVal}/>
                                            </td>
                                        }
                                        return [<td rowSpan={item.details.length} key={0}>{item.value}</td>,<td key={1}>
                                            {ele[iItem]}
                                        </td>]
                                    }
                                    return <td key={iIndex}>
                                        <ChangeDisplay v={ele[iItem]} min={ele.minVal} max={ele.maxVal}/>
                                    </td>
                                })}
                            </tr>
                        })
                    })
                }
            </tbody>
        </table>
    }
}

class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:null
        }
    }

    tableData = {
        title:['年份','产品名称','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月','综合'],
        bind:['productName','jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec','all']
    };

    componentDidMount() {
        this.setState({data:this.getNewArr(data())})
    }

    getNewArr = (data)=>{
        const creNewArr = (data) => {
            let newArr = [];
            data.forEach(item => {
                newArr.push(item.year);
            });
            newArr = [...new Set(newArr)];
            let newArr2 = newArr.map(item => {
                return data.filter(ele => ele.year === item);
            });
            newArr2.forEach(item=>{
                item.forEach(ele=>{
                    delete ele.year;
                    const keyArr = Object.keys(ele).map(item=>ele[item]);
                    ele.maxVal = _.max(keyArr);
                    ele.minVal = _.min(keyArr);
                })
            });
            return {
                arr1:newArr,//由特定属性组成的新数组
                arr2:newArr2,//所有含有相同特定属性值对象所组成的数组
            }
        };
        let {arr1,arr2} = creNewArr(data);

        const foo = (arr1, arr2) => {
            let i = 0,
                newArr = [];

            const innerFoo = () => {
                newArr.push({
                    value: arr1[i],
                    details: arr2[i]
                });
                i++;
                return i >= arr1.length ? newArr : innerFoo(arr1, arr2);
            };

            return innerFoo();
        };

        return foo(arr1, arr2);
    };

    render(){
        /*return <div>
            <table>
                <tbody>
                <tr>
                    <th>年份</th>
                    <th>1月</th>
                </tr>
                <tr>
                    <td rowSpan='3'>
                        2018
                    </td>
                    <td>
                        1
                    </td>
                </tr>
                <tr>
                    <td>
                        1
                    </td>
                </tr>
                <tr>
                    <td>
                        1
                    </td>
                </tr>
                </tbody>
            </table>
        </div>*/
        return <div className='x month'>
            <Table data={this.state.data} option={this.tableData}/>
        </div>
    }
}
export default Demo;