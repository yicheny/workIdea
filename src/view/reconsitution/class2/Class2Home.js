import React from 'react';
import {Link} from "react-router-dom";
import {Container} from "../../../component";

function Class2Home(props) {
    return <Container header='常用重构技巧'>
        <div className="pad">
            <Link to='/recons/class2/extractFunction'>提炼函数</Link>
            <Link to='/recons/class2/inlineFunction'>内联函数</Link>
            <Link to='/recons/class2/extractVariable'>提炼变量</Link>
            <Link to='/recons/class2/inlineVariable'>内联变量</Link>
            <Link to='/recons/class2/changeFunctionDeclaration'>改变函数声明</Link>
        </div>
    </Container>
}

export default Class2Home;