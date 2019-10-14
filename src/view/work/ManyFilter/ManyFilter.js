import React from "react";
// import {condData} from './data/CondData';
import {data} from './data/Data';
import '../../../asset/style/View/business/demo2.less';
import {Container,TableW,ColumnW,SetColor,Rate} from "../../../component";
import {N4} from "../../../utils/format";

function ManyFilter(props) {
    return <Container header={`多重筛选——${data.length}条`} nopad>
        <TableW data={data} sort={{column:'pnlPctAll', direction:'desc'}}>
            <ColumnW width={60} align='center' text='#' convert={(v, o, i) => <span>{i + 1}</span>} />
            <ColumnW width={300} align='left' bind='productName' text='名称'/>
            <ColumnW width={240} align='left' bind='fundAdmin' text='管理机构' />
            <ColumnW width={80} align='left' bind='manager' text='基金经理' />
            <ColumnW width={80} align='left' bind='strategy' text='投资策略' />
            <ColumnW sortable width={100} align='center' bind='duration' text='成立年限(年)'/>
            <ColumnW sortable width={80} align='right' bind='unitNetValue' text='最新净值' convert={N4}/>
            <ColumnW sortable width={110} align='right' bind='pnlPctAll' text='自成立收益率' convert={v=>SetColor(v,N4(v))}/>
            <ColumnW sortable width={110} align='right' bind='volAll' text='自成立波动率' convert={v=>SetColor(v,N4(v))}/>
            <ColumnW sortable width={118} align='right' bind='sharpeAll' text='自成立夏普比率' convert={v=>SetColor(v,N4(v))}/>
            <ColumnW sortable width={110} align='right' bind='pnlPctY1' text='近一年收益率' convert={v=>SetColor(v,N4(v))}/>
            <ColumnW sortable width={110} align='right' bind='volY1' text='近一年波动率' convert={v=>SetColor(v,N4(v))}/>
            <ColumnW sortable width={120} align='center' bind='overallPerf' text='综合能力' convert={v=><Rate value={v} size={20}/>}/>
        </TableW>
    </Container>
}

export default ManyFilter;