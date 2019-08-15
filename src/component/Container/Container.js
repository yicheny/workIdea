import React from 'react';
import './Container.less';
import Header from "../Header/Header";

function Container (props){
    let {className,header} = props;
    const cn = ['x_container',className].join(" ");

    return (
        <div className={cn}>
            <div className="main">
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