import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {Button} from "../../../component";

function BreadcrumdTest2Next(props) {
    useEffect(()=>{
        props.setName('/cDemo/bread/demo2','demo2页面修改成功');
        props.setName('/cDemo/bread/demo2/:id','demo2Next页面修改成功');
    },[]);

    const path = props.location.pathname;
    return <div>
        <Link to={`${path}/demo3`}>
            <Button type='primary'>点击跳转Demo3</Button>
        </Link>
    </div>
}

export default BreadcrumdTest2Next;