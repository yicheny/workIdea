import React, {useState, useRef, useEffect} from 'react';
import {Button, Container, Progress} from "../../../component";
import {genListCyclic, sleep,pick} from "../../../utils/publicFun";
import _ from 'lodash';

function SortCase(props) {
    const [nums,setNums] = useState(new NumObjList().numObjs());
    const iterator = useRef([].entries());
    const {done,value} = iterator.current.next();
    !done && setNums(new NumObjList(value.map(item=>item.value)).numObjs());
    return <Container header='排序演示'>
        <Button onClick={()=>handleClick(BubblingSort)}>点击排序</Button>
        <div className="mar_wrap_b">
            {
                nums.map((el,i)=>{
                    return <div key={i} className='flex'>
                        <Progress percent={el.percent} wrapHeight={18} strokeColor={el.color}/>
                        <span style={{marginLeft:12}}>第{el.index}个</span>
                    </div>
                })
            }
        </div>
    </Container>;
    function handleClick(arithmetic) {
        iterator.current = BubblingSort(nums);
        setNums([...nums])
    }
}

function* BubblingSort(list){
    let len = list.length;
    while(len){
        for(let i=0;i<list.length-1;i++){
            if(list[i]>list[i+1]){
                [list[i],list[i+1]] = [list[i+1],list[i]]
            }
        }
        len--;
        yield list;
    }
}

class NumObjList {
    constructor(nums=[9,8,2,6,4,3,5,1,7]){
        this.nums = nums;
    }

    numObjs = ()=>{
        const colorList = ['red','orange','yellow','green','paleturquoise','blue','purple'];
        const colorCyclic = genListCyclic(colorList);
        const max = Math.max(...this.nums);

        return this.nums.map((el,i)=>({
            index:i+1,
            value:el,
            color:colorCyclic(),
            percent:(el/max)*100
        }))
    };

}
export default SortCase;