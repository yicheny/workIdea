import React from 'react';
import './Container.less';

function Container (props){
    let {className} = props;
    const cn = ['x container',className].join(" ");

    return (
        <div className={cn}>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

Container.defaultProps={
    className:''
};

export default Container;