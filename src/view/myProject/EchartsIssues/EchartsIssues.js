import React, {useEffect, useState} from 'react';
import {isNil} from "ylf_public_fun/publicFun";
import axios from 'axios';
import {Container} from "../../../component";
import {markGroup, sortBy} from "../../../utils/publicFun";
import ValidCompare from "./control/ValidCompare";
import VersionComparePie from "./control/VersionComparePie";
import VersionCompareBar from "./control/VersionCompareBar";
import VersionCompareTree from "./control/VersionCompareTree";

function EchartsIssues(props) {
    const [data,setData] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:5000/local/echartIssues').then(res=>{
            setData(dataInit(res.data));
        })
    },[]);

    const validData = validDataInit(data.validInfos);
    return <Container header='信息统计' nopad>
        <ValidCompare data={data}/>
        <VersionComparePie data={validData}/>
        <VersionCompareBar data={validData}/>
        <VersionCompareTree data={validData}/>
    </Container>
}

function dataInit(data) {
    const validInfos = data.filter(item=>!isNil(item.version));
    const voidInfos = data.filter(item=>isNil(item.version));
    return {
        validInfos,voidInfos
    }
}

function validDataInit(data=[]) {
    let res = markGroup(data,'version');
    res = Object.entries(res).map((item)=>({version:item[0],count:item[1].length}));
    res = sortBy(res,'count','inv');
    return res;
}

export default EchartsIssues;