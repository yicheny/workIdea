import React from 'react';

export function ArrowSvg(props) {
    const {className,size,color} = props;
    return (
        <svg className={className} height={size} width={size} fill={colorFor()} viewBox="0 0 1024 1024"><path d="M89.5 353.2l414.9 336.2c4.4 3.6 10.7 3.6 15.1 0l414.9-336.2c8.8-7.1 3.8-21.3-7.6-21.3H96.9c-11.1 0-16.2 14.2-7.4 21.3z"/></svg>
    );

    function colorFor() {
        return color ? color :'gray'
    }
}
ArrowSvg.defaultProps={
    className:'',
    size:12,
    color:'gray'
};
