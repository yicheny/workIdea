import React from 'react';
import {MenuItemM, MenuM} from "../component";

function LeftMenu(props) {
    return <MenuM selected='工作业务演示'>
        <MenuItemM icon='compass' tit='工作业务演示' url='/wDemo'/>
        <MenuItemM icon='tool' tit='组件库测试' url='/cDemo'/>
        <MenuItemM icon='read' tit='React实践' url='/rDemo'/>
        <MenuItemM icon='html5' tit='JS原生实践' url='/es'/>
        <MenuItemM icon='read' tit='React-Router实践' url='/router'/>
        <MenuItemM icon='ie' tit='HTTP学习' url='/http'/>
        <MenuItemM icon='html5' tit='设计模式' url='/design'/>
        <MenuItemM icon='dingding' tit='CSS测试' url='/cssTest'/>
        <MenuItemM icon='ant-design' tit='my_project' url='/mProj'/>
        <MenuItemM icon='ant-design' tit='重构-改善代码既有设计' url='/recons'/>
    </MenuM>
}

export default LeftMenu;