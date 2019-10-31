import React from 'react';
import {data} from "../../work/ManyFilter/data/Data";
import {Container, Rate, SetColor, TableW as Table,ColumnW as Column} from "../../../component";
import {N4} from "../../../utils/format";

function TableWDemo(props) {
    return <Container header={`TableW组件测试——${data.length}条`} nopad>
        <Table data={data} sort={{column:'pnlPctAll', direction:'desc'}}>
            <Column width={60} align='center' text='#' convert={(v, o, i) => <span>{i + 1}</span>} />
            <Column width={300} align='left' bind='productName' text='名称'/>
            <Column width={240} align='left' bind='fundAdmin' text='管理机构' />
            <Column width={80} align='left' bind='manager' text='基金经理' />
            <Column width={80} align='left' bind='strategy' text='投资策略' />
            <Column sortable width={100} align='center' bind='duration' text='成立年限(年)'/>
            <Column sortable width={80} align='right' bind='unitNetValue' text='最新净值' convert={N4}/>
            <Column sortable width={110} align='right' bind='pnlPctAll' text='自成立收益率' convert={v=>SetColor(v,N4(v))}/>
            <Column sortable width={110} align='right' bind='volAll' text='自成立波动率' convert={v=>SetColor(v,N4(v))}/>
            <Column sortable width={118} align='right' bind='sharpeAll' text='自成立夏普比率' convert={v=>SetColor(v,N4(v))}/>
            <Column sortable width={110} align='right' bind='pnlPctY1' text='近一年收益率' convert={v=>SetColor(v,N4(v))}/>
            <Column sortable width={110} align='right' bind='volY1' text='近一年波动率' convert={v=>SetColor(v,N4(v))}/>
            <Column sortable width={120} align='center' bind='overallPerf' text='综合能力' convert={v=><Rate value={v} size={20}/>}/>
        </Table>
    </Container>
}

export default TableWDemo;