import React from "react";
import _ from 'lodash';
import {data} from "./Data/data"
import './MonthShowV2.less';
import {Container} from "../../../component";

function ChangeDisplay(props) {
    const {v,max,min} = props;
    return <span className={[v===max?'up':(v===min?'down':'')]}>
            {v===null?'-':v}
        </span>
}

function MonthTable(props) {
    const {data,options:{title,align}} = props;
    return <table>
        <thead>
        <tr>
            {title.map((el, i) => <td key={i} className={align[i]}>{el}</td>)}
        </tr>
        </thead>
        <tbody>
        {
            data.map(el => {
                return el.details.map((el2, i2) => {
                    return <tr key={i2}>
                        {!i2 && <td rowSpan={el.details.length} className='center'>{el.value}</td>}
                        <td className='left'>{el2.name || '-'}</td>
                        {el2.month.map((el3, i3) =>genTd(el3,i3,el2.minVal,el2.maxVal))}
                        {genTd(el2.all)}
                    </tr>
                })
            })
        }
        </tbody>
    </table>;


    function genTd(value,key,min=0,max=0) {
        return <td key={key} className='center'><ChangeDisplay v={value} min={min} max={max}/></td>
    }
}

class MonthShowV2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:null
        }
    }

    tableData = {
        title: ['年份', '名称', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '年度累计'],
        align: ['center', 'left', 'center', 'center', 'center', 'center', 'center', 'center', 'center', 'center', 'center', 'center', ' center', 'center', 'center']
    };

    componentDidMount() {
        this.setState({data:this.newDataFor(data())})
    }

    newDataFor = (data) => {
        if (!data) return;
        return _.sortBy(genNewData(), 'value').reverse();

        function genNewData() {
            return genYears().reduce((acc, el, i) => acc.concat([{value: el, details: genProductList()[i]}]), []);

            function genYears() {
                const years = gatherData(data).reduce((acc,el)=>acc.concat([el.year]),[]);
                return _.uniq(years);
            }

            //相同年份的产品和基准组成的数组
            function genProductList() {
                let productList =  genYears().map(el => gatherData(data).filter(el2=> el2.year === el));
                setLimit();
                return productList;

                function setLimit() {
                    productList.forEach(el => {
                        el.forEach(el2 => {
                            //delete ele2.year;
                            el2.maxVal = _.max(el2.month);
                            el2.minVal = _.min(el2.month);
                        })
                    });
                }
            }

            function gatherData(data) {
                return productListFor().concat(benchmarkListFor());

                function productListFor() {
                    let {product, name,} = data;
                    if (!product) return [];
                    return product.map(item => _.assign(item, {name}));
                }

                function benchmarkListFor() {
                    let {benchmarks, benchmarkName} = data;
                    if (!benchmarks) return [];
                    return benchmarks.map(item => _.assign(item, {name: benchmarkName}));
                }
            }
        }
    };

    render(){
        return <Container header='MonthShowV2' nopad>
            <div className='month_show2'>
                {this.state.data && <MonthTable data={this.state.data} options={this.tableData}/>}
            </div>
        </Container>
    }
}
export default MonthShowV2;