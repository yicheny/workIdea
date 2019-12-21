import React, {useState, useCallback, useEffect, useRef} from 'react';

function useEventCallback(fn, dependencies) {
    const ref = useRef(() => {
        throw new Error('Cannot call an event handler while rendering.');
    });

    useEffect(() => {
        ref.current = fn;
    }, [fn, ...dependencies]);

    return useCallback(() => {
        const fn = ref.current;
        return fn();
    }, [ref]);
}

function Child(props) {
    const {getData} = props;
    const [params, setParams] = useState(null);

    const search = useEventCallback(() => {
        const newParams = params+'000';//因展示与用于请求的值不同，所以需要额外处理
        getData(newParams)
    }, [getData,params]);

    useEffect(() => {
        //初始化加载，拿到数据后会调用一次search
        getParams().then(res => {
            setParams(res);
            search();
        });
    }, [search]);

    return <div>
        <div><input onBlur={(e) => setParams(e.target.value)}/></div>
        <div>
            <button onClick={search}>查询</button>
        </div>
        <div>参数数据：{params}</div>
    </div>;

    //模拟请求参数数据
    function getParams(value) {
        value = value || Math.round(Math.random() * 300);
        return Promise.resolve("mock参数" + value);
    }
}

export default function UseCallbackHell() {
    const [data,setData] = useState(null);

    //模拟请求列表数据
    const getData = function (params) {
        const newData = params + '--' + Math.round(Math.random() * 300);
        setData(newData);
    };

    return <div>
        <Child getData={getData}/>
        <div>列表数据：{data}</div>
    </div>;
}
