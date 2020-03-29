import React, {useEffect, useReducer} from 'react';
import {Container} from "../../../component";

function ReducerSearch(props) {
    return <Container header='异步请求'>
        需求场景：现在有一个接口，请求这个接口需要使用4个参数，其中2个需要异步得到，2个可以同步得到，所有参数拿到后请求接口<br/>
        解决方法：无论同步异步设置参数都使用promise，使用promise.all所有参数拿到后进行请求<br/>
        注意：此案例`useReducer`方法使用并不规范，一次更新中不应该多次调用同一个`dispatch`，规范用法是在一个`dispatch`更新多个值
        <Child request={initSearch}/>
    </Container>;

    function initSearch(params) {
        console.log(params);
    }
}

function Child(props) {
    const [params,dispatch] = useReducer(paramsReducer,{});

    useEffect(()=>{
        //原场景
        // getA(value=>dispatch({type:'A',value}));
        // dispatch({type:"B",value:"B"});
        // getC(value=>dispatch({type:'C',value}));
        // dispatch({type:"D",value:"D"});
        // search();

        //解决场景
        const promise1 = new Promise((resolve)=>{
            getA(value=>resolve(value));
        });
        const promise2 = Promise.resolve('B');
        const promise3 = new Promise((resolve)=>{
            getC(value=>resolve(value));
        });
        const promise4 = Promise.resolve('D');

        Promise.all([promise1,promise2,promise3,promise4]).then(res=>{
            dispatch({type:'A',value:res[0]});
            dispatch({type:'B',value:res[1]});
            dispatch({type:'C',value:res[2]});
            dispatch({type:'D',value:res[3]});
            search()
        });
    },[]);

    // console.log(params);
    return <div>

    </div>;
    function search() {
        return props.request(params);
    }

    function getA(callback) {
        setTimeout(()=>{
            callback('A')
        },300)
    }
    function getC(callback) {
        setTimeout(()=>{
            callback('C')
        },150)
    }
}
function paramsReducer(state,action) {
    const {type,value} = action;

    state[type] = value;
    return state;
}

export default ReducerSearch;