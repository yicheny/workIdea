import React from 'react';
import {menuData} from "../mockData/data";
import {Container,Menu} from "../../../component";

function MenuDemo(props) {
    return <Container header='多级菜单'>
        <Menu data={menuData}/>
    </Container>
}

export default MenuDemo;