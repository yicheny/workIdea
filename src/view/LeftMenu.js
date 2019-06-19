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
                    <Link to='/wDemo'>当前业务</Link>
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
                    <Link to='/rDemo'>生命周期-16.3以前</Link>
                </Item>
                <Item key='s3_2'>
                    <Link to='/rDemo/context'>Context</Link>
                </Item>
                <Item key='s3_3'>
                    <Link to='/rDemo/hoc'>高阶组件HOC</Link>
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
                    <Link to='/esDemo/date'>Date</Link>
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
        </Menu>
    </div>
}

export default LeftMenu;