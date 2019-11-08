import React from 'react';
import {Container, MdHtml} from "../../component";
import {last} from "../../utils/publicFun";

function MdContainer(props) {
    const {path} = props;
    return <Container header={last(path.split('/')).split('.')[0]}>
        <MdHtml path={path}/>
    </Container>;
}
MdContainer.defaultProps={
    path:''
};

export default MdContainer;