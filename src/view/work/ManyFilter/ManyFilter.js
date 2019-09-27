import React from "react";
import {condData} from './data/CondData';
import {data} from './data/Data';
import '../../../asset/style/View/business/demo2.less';
import {Container} from "../../../component";
import {TableW,Column} from './control/TableW';
import {numFormat} from "../../../utils/format";

function ManyFilter(props) {
    return <Container header='多重筛选' nopad>
        {/*<h2>共：{data.length}条</h2>*/}
        <TableW data={data}>
            <Column width={40} align='center' text='#' convert={(v, o, i) => <span>{i + 1}</span>} />
            <Column width={300} align='left' bind='productName' text='名称' />
            <Column width={240} align='left' bind='fundAdmin' text='管理机构' />
            <Column width={80} align='left' bind='manager' text='基金经理' />
            <Column width={80} align='left' bind='strategy' text='投资策略' />
            <Column width={100} align='center' bind='duration' text='成立年限(年)'/>
            <Column width={80} align='right' bind='unitNetValue' text='最新净值'/>
            <Column width={110} align='right' bind='pnlPctAll' text='自成立收益率'/>
            <Column width={110} align='right' bind='volAll' text='自成立波动率'/>
            <Column width={118} align='right' bind='sharpeAll' text='自成立夏普比率'/>
            <Column width={110} align='right' bind='pnlPctY1' text='近一年收益率'/>
            <Column width={110} align='right' bind='volY1' text='近一年波动率'/>
            <Column width={120} align='center' bind='overallPerf' text='综合能力'/>
        </TableW>
    </Container>
}

export default ManyFilter;