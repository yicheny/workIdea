import React from 'react';
import {MenuM,MenuItemM} from "../../../component";

function MenuMTest(props) {
    return <MenuM name='menuMTest'>
        <MenuItemM icon='compass' tit='工作业务演示' url='/work'/>
        <MenuItemM icon='tool' tit='组件库测试' url='/component'/>
        <MenuItemM icon='read' tit='React实践' url='/react'/>
        <MenuItemM icon='html5' tit='JS原生实践' url='/es'/>
        <MenuItemM icon='read' tit='React-Router实践' url='/router'/>
        <MenuItemM icon='ie' tit='HTTP学习' url='/http'/>
        <MenuItemM icon='html5' tit='设计模式' url='/design'/>
        <MenuItemM icon='dingding' tit='CSS测试' url='/cssTest'/>
        <MenuItemM icon='ant-design' tit='my_project' url='/mProj'/>
        <MenuItemM icon='ant-design' tit='重构-改善代码既有设计' url='/recons'/>
    </MenuM>
}
export default MenuMTest;