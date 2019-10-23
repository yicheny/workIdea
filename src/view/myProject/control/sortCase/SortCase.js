import React,{useState,useRef} from 'react';
import {Button, Container, Progress} from "../../../../component";
import {genListCyclic} from "../../../../utils/publicFun";

const colorList = ['red','orange','yellow','green','paleturquoise','blue','purple'];
const initNumList = [1,3,8,6,4,3,5];

function SortCase(props) {
    const colorCyclicFn = genListCyclic(colorList);
    const [list,setList] = useState(initNumList) ;
    // const [sortFn,setSortFn] = useState(()=>{});
    const sortFn = useRef(()=>{});
    const [flag,setFlag] = useState(false);
    const max = Math.max(...initNumList)/100;

    // flag && sortFn.current();
    return <Container header='排序演示'>
        <Button onClick={()=>handleClick(bubblingSort)}>点击排序</Button>
        <div className="mar_wrap_b">
            {
                list.map((el,i)=>{
                    return <div key={i} className='flex'>
                        <Progress percent={el/max} wrapHeight={18} strokeColor={colorCyclicFn(i)}/>
                        {/*<span style={{marginLeft:12}}>第{i+1}个数</span>*/}
                    </div>
                })
            }
        </div>
    </Container>;
    function handleClick(arithmetic) {
        arithmetic();
        // setFlag(true);
        // sortFn.current = arithmetic;
    }

    function bubblingSort(){
        let len = list.length;
        while(len){
            for(let i=0;i<list.length-1;i++){
                if(list[i]>list[i+1]){
                    [list[i],list[i+1]] = [list[i+1],list[i]]
                }
            }
            len--;
        }
        setList([...list]);
        // setFlag(false);
    }
}

export default SortCase;