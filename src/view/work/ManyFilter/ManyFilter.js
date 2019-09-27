import React from "react";
import {condData} from './data/CondData';
import {data} from './data/Data';
import '../../../asset/style/View/business/demo2.less';
import {Container} from "../../../component";
import {TableW,Column} from './control/TableW';

function ManyFilter(props) {
    return <Container header='多重筛选' nopad>
        {/*<h2>共：{data.length}条</h2>*/}
        <TableW data={data}>
            <Column text='#' width={40} convert={(v, o, i) => <span>{i + 1}</span>}/>
            <Column bind='productName' text='名称' width={320}/>
            <Column bind='fundAdmin' text='管理机构' width={320}/>
            <Column bind='manager' text='基金经理' width={120}/>
        </TableW>
    </Container>
}

export default ManyFilter;