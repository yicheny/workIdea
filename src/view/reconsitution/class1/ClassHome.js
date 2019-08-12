import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {Container} from "../../../component";

function ClassHome(props) {
    return <Fragment>
        <Container>
            <h2>这部分可以进行任意的重构测试</h2>
            <Link to='/recons/class1/part1'>part1</Link>
        </Container>
    </Fragment>
}

export default ClassHome;