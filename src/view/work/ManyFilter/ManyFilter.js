import React from "react";
import {condData} from './data/CondData';
import {data} from './data/Data';
import '../../../asset/style/View/business/demo2.less';
import {Container} from "../../../component";
import {TableW,Column} from './control/TableW';

function ManyFilter(props) {
    return <Container header='多重筛选'>
        <h2>共：{data.length}条</h2>
        <TableW data={data}>
            <Column bind='productName' text='名称'/>
            <Column bind='fundAdmin' text='管理机构'/>
        </TableW>
    </Container>
}

export default ManyFilter;