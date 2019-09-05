import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {Container} from "../../../component";

function Class1Home(props) {
    return <Fragment>
        <Container header='这部分可以进行任意的重构测试'>
            <Link to='/recons/class1/part1'>part1</Link>
        </Container>
    </Fragment>
}

export default Class1Home;