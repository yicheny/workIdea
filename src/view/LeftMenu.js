import React from 'react';
import {MenuItemM, MenuM} from "../component";

function LeftMenu(props) {
    return <MenuM menuName='leftMenu' selected='工作业务演示' className='leftMenu'>
        <MenuItemM icon='compass' tit='工作业务演示' url='/work'/>
        <MenuItemM icon='tool' tit='组件库测试' url='/component'/>
        <MenuItemM icon='read' tit='React实践' url='/react'/>
        <MenuItemM icon='html5' tit='JS原生实践' url='/es'/>
        <MenuItemM icon='read' tit='React-Router实践' url='/router'/>
        <MenuItemM icon='ie' tit='HTTP学习' url='/http'/>
        <MenuItemM icon='html5' tit='设计模式' url='/design'/>
        <MenuItemM icon='dingding' tit='CSS测试' url='/css'/>
        <MenuItemM icon='dribbble' tit='my_project' url='/mProj'/>
        <MenuItemM icon='ant-design' tit='重构-改善代码既有设计' url='/recons'/>
        <MenuItemM icon='codepen' tit='算法练习' url='/arithmetic'/>
        <MenuItemM icon='sketch' tit='huge_sura测试' url='/hugeSura'/>
    </MenuM>
}

export default LeftMenu;