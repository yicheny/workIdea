import React from 'react';
import {Container, Icon, Message} from "../../../component";
import './IconDemo.less';

const icons = [
    ['info','cancel','arrowDown','error','success','warn','user','lock','unlock','zhankai'],
    ['shousuo','star']
];

function IconDemo(props) {
    return <Container header='IconDemo'>
        <div  className='iconDemo'>
            <h3>备注：在指定的图标上点击即可复制指令</h3>
            <IconBox/>
        </div>
    </Container>;

    function IconBox() {
        return <div className="flex-y">
            {
                icons.map((item,index)=>{
                    return <div className='flex' key={index}>
                        {
                            item.map((item2,index2)=>{
                                return <Item name={item2} key={index2}/>
                            })
                        }
                    </div>

                })
            }
        </div>;

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
                input.setAttribute('value', `<Icon type='${name}'/>`);
                input.select();
                if (document.execCommand('copy')) {
                    document.execCommand('copy');
                    Message.show({info:`复制成功${`<Icon type='${name}'/>`}`,icon:'success'});
                }
                document.body.removeChild(input);
            }
        }
    }
}

export default IconDemo;