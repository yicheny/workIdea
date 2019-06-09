import React, {useState,useEffect} from 'react';

function Clock(){
    const [date,setDate] = useState(new Date());

    useEffect(()=>{
        // console.log(date);
    });

    useEffect(()=>{
        let id = setInterval(()=>setDate(new Date()),1000);//问题的关键在于如何使用到最新的props和state
        return () => clearInterval(id);
    },[]);

    const timeFormat = (v)=>{
        if(v<10){
            return '0'+v;
        }
        return v
    };

    return <span className='clock'>
        {`${timeFormat(date.getHours())}:${timeFormat(date.getMinutes())}:${timeFormat(date.getSeconds())}`}
    </span>
}

export default Clock;

//总结
//1.默认，useEffect会在render后被执行，如果组件被频繁渲染，那么会造成setInterval和clearInterval被频繁插入到任务队列中【则interval无法被执行】
//2.设置第二个参数可以有选择的令useEffect执行,传入[],则useEffect只在mount时执行和只在unmount时被清理，但即使如此依旧存在阻抗匹配的问题【具体表现为，setInterval只执行一次就不被执行了，因为setInterval中保存的依旧是上一次的state和props】
//3.阻抗匹配：冲突在于React编程模型中的useEffect的每一次state和props都是重新生成的，与上一次完全没有关联，而setInterval中的props和state一直被保存下来【它没有描述过程】
//4.在hook中useRef()相当于创建一个盒子，里面放着任意可变量，现在，每次执行useEffect，setInterval里的回调都指向新的callback