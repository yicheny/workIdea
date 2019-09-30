import React, {Children,isValidElement,useState} from 'react';
import './TableW.less';
import {mergeCn, omit, isFunction} from "../../utils/publicFun";
import {ArrowSvg} from "../../asset/svg/SVG";

function Cell(props) {
    const {data, index, style,convert,bind,width,align,sortable} = props;
    return <div className={cnFor()} style={styleFor()}>
        {renderValue()}
        {sortable && renderMark()}
    </div>;

    function renderValue() {
        const value = data[bind];
        if(convert) return renderConvert();
        if ([null, undefined].includes(value)) return '-';
        return value;

        function renderConvert() {
            if(isFunction(convert)) return convert(value, data, index);
            if(isValidElement(convert)) return convert;
        }
    }

    function styleFor() {
        return {
            ...style,
            width: width + 'px',
            justifyContent:align
        }
    }

    function cnFor() {
        return mergeCn("tableW_cell flex",sortable&&"tableW_cell_sort")
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
    const [sort,setSort] = useState(props.sort);
    const {data, children} = props;

    return <div className='tableW flex-y'>
        <div className="tableW_header tableW_row flex">
            {
                optionsFor().map((el, i) => {
                    return <Cell key={i} {...el} index={i} convert={<span>{el.text}</span>} setSort={setSort}/>
                })
            }
        </div>
        <div className="tableW_main">
            {data.map((el, i) => <ColumnW sort={sort} key={i} data={el} index={i} options={optionsFor()}/>)}
        </div>
    </div>;

    function optionsFor() {
        return Children.map(children, child => child.props)
    }
}
TableW.defaultProps={
    sort:{
        column:null,
        direction:null
    }
};

export {TableW, ColumnW};