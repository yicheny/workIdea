import React from 'react';
import {Link} from "react-router-dom";
import {Container} from "../../../component";

function Class2Home(props) {
    return <Container>
        <div className="x_pad">
            <h2>常用重构技巧</h2>
            <Link to='/recons/class2/extractFunction'>提炼函数</Link>
            <Link to='/recons/class2/inlineFunction'>内联函数</Link>
            <Link to='/recons/class2/extractVariable'>提炼变量</Link>
        </div>
    </Container>
}

export default Class2Home;