import React from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';

function LeftMenu(props) {
    const {SubMenu, Item} = Menu;
    const {className} = props;

    return <div className={className}>
        <Menu
            style={{height:'100vh'}}
            defaultSelectedKeys={['s2_1']}
            defaultOpenKeys={['sub2']}
            mode="inline"
        >
            <SubMenu
                key='sub1'
                title={
                    <span>
                         <Icon type='compass'/>
                         <span>工作业务演示</span>
                    </span>
                }>
                <Item key='s1_1'>
                    <Link to='/wDemo'>工作业务导航页</Link>
                </Item>
            </SubMenu>

            <SubMenu key='sub2'
                     title={
                         <span>
                             <Icon type='tool'/>
                             <span>my组件库测试</span>
                         </span>
                     }>
                <Item key='s2_1'>
                    <Link to='/cDemo'>综合测试</Link>
                </Item>
            </SubMenu>

            <SubMenu key='sub3'
                     title={
                         <span>
                             <Icon type='read'/>
                             <span>React知识点实践</span>
                         </span>
                     }>
                <Item key='s3_1'>
                    <Link to='/rDemo'>React导航页</Link>
                </Item>
            </SubMenu>

            <SubMenu key='sub4'
                     title={
                         <span>
                             <Icon type="html5" />
                             <span>JS原生知识点实践</span>
                         </span>
                     }>
                <Item key='s4_1'>
                    <Link to='/es'>JS原生导航页</Link>
                </Item>
            </SubMenu>

            <SubMenu key='sub5'
                     title={
                         <span>
                             <Icon type="read" />
                             <span>React-Router</span>
                         </span>
                     }>
                <Item key='s5_1'>
                    <Link to='/router'>Router_Demo</Link>
                </Item>
            </SubMenu>

            <SubMenu key='sub6'
                     title={
                         <span>
                             <Icon type="ie" />
                             <span>HTTP学习</span>
                         </span>
                     }>
                <Item key='s6_1'>
                    <Link to='/http'>Http_Home</Link>
                </Item>
            </SubMenu>

            <SubMenu key='sub7'
                     title={
                         <span>
                             <Icon type="html5" />
                             <span>设计模式</span>
                         </span>
                     }>
                <Item key='s7_1'>
                    <Link to='/design'>设计模式导航页</Link>
                </Item>
            </SubMenu>

            <SubMenu key='sub8'
                     title={
                         <span>
                             <Icon type="dingding" />
                             <span>Css测试</span>
                         </span>
                     }>
                <Item key='s8_1'>
                    <Link to='/cssTest'>Css测试导航页</Link>
                </Item>
            </SubMenu>

            <SubMenu key='sub9'
                     title={
                         <span>
                             <Icon type="ant-design" />
                             <span>my_project</span>
                         </span>
                     }>
                <Item key='s9_1'>
                    <Link to='/mProj'>my_project导航页</Link>
                </Item>
            </SubMenu>

            <SubMenu key='sub10'
                     title={
                         <span>
                             <Icon type="ant-design" />
                             <span>重构-改善代码既有设计</span>
                         </span>
                     }>
                <Item key='s9_1'>
                    <Link to='/recons'>重构导航页</Link>
                </Item>
            </SubMenu>
        </Menu>
    </div>
}

export default LeftMenu;