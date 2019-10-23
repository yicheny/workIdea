import React from 'react';
import './Container.less';
import {mergeCn} from "../../utils/publicFun";

function Container (props){
    let {className,header,nopad,children} = props;
    const cn = mergeCn('x_container',className,nopad&&'nopad');

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