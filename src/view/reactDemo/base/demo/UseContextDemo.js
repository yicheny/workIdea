import React,{createContext,useContext,useState} from 'react';
import {Button, Container} from "../../../../component";

const buyers = {
    ming:{
        name:'小明',
        age:11
    },
    gang:{
        name:'大刚',
        age:33
    }
};

const BuyerContext = createContext(buyers);

function UseContextDemo(props) {
    const [currBuyer,setCurrBuyer] = useState('ming');

    // console.log(currBuyer);
    return <Container>
        <BuyerContext.Provider value={buyers[currBuyer]}>
            <Button type='primary' onClick={()=>setCurrBuyer(curr=>curr==='ming'?'gang':'ming')}>切换购买者</Button>
            <Child/>
        </BuyerContext.Provider>
    </Container>
}

function Child() {
    return <div>
        <Child2/>
    </div>
}

function Child2() {
    const buyer = useContext(BuyerContext);

    return <div>
        <p>当前购买者姓名是：{buyer.name}</p>
        <p>当前购买者年龄是：{buyer.age}</p>
    </div>
}

export default UseContextDemo;