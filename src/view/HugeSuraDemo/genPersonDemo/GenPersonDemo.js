import React,{useState} from 'react';
import {Container,Button} from "../../../component";
import {GenPerson} from "../utils/GenPerson";

function GenPersonDemo(props) {
    const [person,setPerson] = useState({});

    return <Container header='人物生成'>
        <Button onClick={()=>setPerson(GenPerson())}>随机人物</Button>
        <Button type='primary'>确认生成</Button>
        <div>
            <p>姓名：{person.name}</p>
            <p>性别：{person.sexy}</p>
            <p>等级：{person.level}</p>
            <p>生命：{person.hp}</p>
            <p>攻击：{person.attack}</p>
            <p>防御：{person.defense}</p>
            <p>速度：{person.speed}</p>
            <p>天赋：{person.talent}</p>
            <p>自由点数：{person.freePoint}</p>
        </div>
    </Container>;
}

export default GenPersonDemo;