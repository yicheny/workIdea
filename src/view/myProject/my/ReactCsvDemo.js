import React from 'react';
import { CSVLink } from "react-csv";
import {style} from 'typestyle';
import {Container} from "../../../component";

const headers = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" }
];

const data = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];

const niceColors = style({
    transition: 'color .2s',
    color: '#4f4f4f',
    $nest: {
        '&:hover': {
            color: '#1890ff'
        }
    }
});

function ReactCsvDemo(props) {
    return <Container header='ReactCsv测试'>
        <CSVLink className={niceColors} data={data} headers={headers} filename={`自定义名称.csv`}>Download me</CSVLink>
    </Container>
}

export default ReactCsvDemo;