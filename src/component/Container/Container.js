import React from 'react';
import './Container.less';
import {cls} from "../../utils/publicFun";

function Container (props){
    let {className,header,nopad,children} = props;
    const cn = cls('x_container',className,{nopad});

    return (
        <div className={cn}>
            <div className="x_container_main">
                {header && <div className='x_container_header'>{header}</div>}
                <div className="x_container_content">{children}</div>
            </div>
        </div>
    );
}

Container.defaultProps={
    className:'',
    header:''
};

export default Container;