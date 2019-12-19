import React from 'react';
import {Button, Container} from "../../../component";

function DownCsv(props) {
    return <Container header='下载CSV'>
        <Button onClick={handleClick}>点击下载</Button>
    </Container>;

    function handleClick() {
        let str = "栏位1,栏位2,栏位3\n值1,值2,值3";
        str =  encodeURIComponent(str);
        window.location.href = "data:text/csv;charset=utf-8,\ufeff"+str;
    }
}

export default DownCsv;