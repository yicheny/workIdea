import React from 'react';
import {CheckBox, CheckBoxGroup, Container} from "../../../component";

function CheckBoxDemo(props) {
    return <Container header='CheckBox组件测试'>
        <CheckBoxGroup onChange={handleChange}>
            <CheckBox value='A'>AW</CheckBox>
            <CheckBox value='B'>BW</CheckBox>
            <CheckBox value='C'>CW</CheckBox>
            <CheckBox value='D'>DW</CheckBox>
        </CheckBoxGroup>
    </Container>;

    function handleChange(checkBoxList) {
        console.log(checkBoxList,'checkBoxDemo');
    }
}

export default CheckBoxDemo;