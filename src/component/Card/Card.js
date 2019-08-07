import React from 'react';
import './Card.less';

function Card(props) {
    const {className,style={},children} = props;
    const cn = ['x_card',className].join(' ');

    return (
        <div className={cn} style={style}>
            <div className="x_card_body">
                {children}
            </div>
        </div>
    );
}
Card.defaultProps = {
    className:'',
    style:{},
};

export default Card;