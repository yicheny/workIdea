import React, {useEffect} from 'react';

function Demo3Next(props) {
    useEffect(()=>{
        // props.setName('三级修改成功',2);
    },[]);
    return <div>三级页面</div>
}

export default Demo3Next;