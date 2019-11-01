import React from 'react';
import {Container,MdHtml} from "../../../component";
import mdPath from './Markdown_Test.md';

function ShowMarkdown(props) {
    return <Container header='展示Markdown文档'>
        <MdHtml path={mdPath}/>
    </Container>
}

export default ShowMarkdown;