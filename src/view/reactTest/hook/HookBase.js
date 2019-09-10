import React from 'react';
import {Link} from "react-router-dom";
import {Container} from "../../../component";

function HookBase(props) {
    return <Container header='hook初步了解'>
        <h3>React内置的Hook API 有哪些？</h3>
        <div className="box">
            <p>1. useState</p>
            <p>2. useEffect</p>
            <p>3. useContext</p>
            <p>4. useReducer</p>
            <p>5. useCallback</p>
            <p>6. useMemo</p>
            <p>7. useRef</p>
            <p>8. useImperativeHandle</p>
            <p>9. useLayoutEffect</p>
            <p>10. useDebugValue</p>
        </div>

        <h3>动机-为什么需要Hook?</h3>
        <div className="box">
            <p><b>1. 组件之间复用状态逻辑很难</b></p>
            <p>过去的主流方案是render props和高阶组件，不过存在需要重新组织组件结构、提取抽象层组件、让代码难以理解等缺点，Hook的存在为共享状态逻辑提供了更好的方案</p>
            <p><b>2. 复杂组件变得难以理解</b></p>
            <p>过去我们通过声明周期去处理副作用，但是对于一些状态比较复杂的组件，会存在一些问题，比如说在同一个生命周期可能需要维护一些不相关的逻辑，而相关的逻辑则被分散在不同的生命周期中</p>
            <p><b>3. 难以理解的class</b></p>
            <p>关于JS中的this存在，是一道屏障，使用class需要深入理解JS中的this用法，而且实际上class的使用语法相对于函数式写法来说更繁杂一些。</p>
        </div>

        <h3>自定义hook</h3>
        <div className="box">
            <p><Link to='/react/demo/customHook'>自定义hookDemo</Link></p>
            <p><b>自定义hook规则：</b></p>
            <p>1. 自定义hook是一个函数</p>
            <p>2. 自定义hook名称以use开头，函数体内部可以调用其他hook</p>
            <p>3. 在两个及以上函数共享逻辑时，可以将其提取到第三个函数（自定义hook）中</p>

        </div>
    </Container>
}

export default HookBase;