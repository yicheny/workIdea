import React from 'react';
import {Container, Icon, Message} from "../../../component";
import './IconDemo.less';

function Item(props) {
    const {name} = props;
    return <div className='iconItem flex-y center' onClick={handleClick}>
        <Icon type={name}/>
        <span>{name}</span>
    </div>;

    //注：这里之所以需要创建一个input标签并在之后销毁的原因是：
    //原生的execCommand方法只能用来操纵可编辑内容区域的元素
    function handleClick() {
        const input = document.createElement('input');
        document.body.appendChild(input);
        input.setAttribute('value', `<Icon type=${name}/>`);
        input.select();
        if (document.execCommand('copy')) {
            document.execCommand('copy');
            Message.show({info:`复制成功${`<Icon type=${name}/>`}`,icon:'success'});
        }
        document.body.removeChild(input);
    }
}

function IconDemo(props) {
    return <Container header='IconDemo'>
        <div  className='iconDemo'>
            <h3>备注：在指定的图标上点击即可复制指令</h3>
            <div className="flex-y">
                <div className="flex">
                    <Item name='info'/>
                    <Item name='cancel'/>
                    <Item name='arrowDown'/>
                    <Item name='error'/>
                    <Item name='success'/>
                    <Item name='warn'/>
                    <Item name='user'/>
                    <Item name='lock'/>
                    <Item name='unlock'/>
                    <Item name='zhankai'/>
                </div>
                <div className="flex">
                    <Item name='shousuo'/>
                    <Item name='star'/>
                </div>
            </div>
        </div>
    </Container>
}

export default IconDemo;