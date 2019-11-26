import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "../../../component";

function BreadcrumdTest1(props) {
    // const handleClick = ()=>{
    //     props.history.push({ pathname : '/component/demo2' , search:'?id=100&&name=ylf',query : { param:[1,2,3,4,5,6]} })
    // };
    return <div>
        {/*<Button onClick={handleClick} type={"primary"}>点击跳转到demo2</Button>*/}
        <Link to='/component/bread/demo2'>
            <Button>点击跳转到demo2</Button>
        </Link>
        <Link to='/component'>
            <Button type='primary'>点击跳转到组件测试首页</Button>
        </Link>
    </div>
}

export default BreadcrumdTest1;

// 关于路由传参，网上所说的三种方式params、query、state，其中，query自react-router4.x更新后就无法持久保存传参
// 目前，我认为可以通过search和params进行传参，其中通过search传参不会影响到路由判定，而params的优势在于无论是前进还是后退都可以拿到传参【包括刷新】，search仅可以在前进和刷新时拿到传参【注意：如果想要使用params传参，则必须使用动态路由】
// 注：hash是用于页面锚点的，但是它的特性和search参数非常相似，也可以用于传参，但是不推荐
// state可以用于传临时的大量数据