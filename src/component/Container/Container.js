import React from 'react';
import './Container.less';
import Header from "../Header/Header";
import {mergeCn} from "../../utils/publicFun";

function Container (props){
    let {className,header} = props;
    const cn = mergeCn('x_container',className);

    return (
        <div className={cn}>
            <div className="x_container_main">
                {header && <Header>{header}</Header>}
                <div className="x_container_content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

Container.defaultProps={
    className:'',
    header:''
};

export default Container;