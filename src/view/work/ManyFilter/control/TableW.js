import React, {Children} from 'react';
import './TableW.less';

function Cell(props) {
    const {data, index, style,convert,bind,width,align} = props;
    return <div className="tableW_cell" style={styleFor()}>
        {display()}
    </div>;

    function display() {
        if (convert) return convert('v', data, index);

        const value = data[bind];
        if ([null, undefined].includes(value)) return '-';
        return value;
    }

    function styleFor() {
        return {
            ...style,
            width: width + 'px',
            textAlign:align
        }
    }
}

Cell.defaultPorps = {
    style: {},
    width:100,
    align:'center'
};

function Column(props) {
    const {options} = props;
    return <div className="tableW_row flex">
        {options.map((item, i) => <Cell key={i} {...props} {...item}/>)}
    </div>;
}


function TableW(props) {
    const {data, children} = props;

    return <div className='tableW'>
        <div className="tableW_header tableW_row flex">
            {
                optionsFor().map((el, i) => <Cell key={i} {...el} index={i} convert={()=><span>{el.text}</span>}/>)
            }
        </div>
        <div className="tableW_main">
            {renderChildren()}
        </div>
    </div>;

    function renderChildren() {
        return data.map((el, i) => <Column key={i} data={el} index={i} options={optionsFor()}/>);
    }

    function optionsFor() {
        return Children.map(children, child => child.props)
    }
}

export {TableW, Column};