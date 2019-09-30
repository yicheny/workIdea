import React, {Children} from 'react';
import './TableW.less';
import {omit} from "../../utils/publicFun";
import {ArrowSvg} from "../../asset/svg/SVG";

function Cell(props) {
    const {data, index, style,convert,bind,width,align,sortable} = props;
    return <div className="tableW_cell flex" style={styleFor()}>
        {renderValue()}
        {sortable && renderMark()}
    </div>;

    function renderValue() {
        const value = data[bind];

        if (convert) return convert(value, data, index);
        if ([null, undefined].includes(value)) return '-';
        return value;
    }

    function styleFor() {
        return {
            ...style,
            width: width + 'px',
            justifyContent:align
        }
    }

    function renderMark() {
        return <div className="tableW_mark flex-y">
            <ArrowSvg className='svg_arrow_up'/>
            <ArrowSvg className='svg_arrow_down'/>
        </div>
    }
}
Cell.defaultProps = {
    data:{},
    style: {},
    width:100,
    align:'center',
    sortable:false
};

function ColumnW(props) {
    const {options} = props;

    return <div className="tableW_row flex">
        {options.map((item, i) => {
            return <Cell key={i} {...props} {...itemFilter(item)}/>
        })}
    </div>;

    function itemFilter(item) {
        return omit(item,['sortable']);
    }
}


function TableW(props) {
    const {data, children} = props;

    return <div className='tableW flex-y'>
        <div className="tableW_header tableW_row flex">
            {
                optionsFor().map((el, i) => <Cell key={i} {...el} index={i} convert={()=><span>{el.text}</span>}/>)
            }
        </div>
        <div className="tableW_main">
            {data.map((el, i) => <ColumnW key={i} data={el} index={i} options={optionsFor()}/>)}
        </div>
    </div>;

    function optionsFor() {
        return Children.map(children, child => child.props)
    }
}

export {TableW, ColumnW};