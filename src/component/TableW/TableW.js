import React, {Children, createRef, isValidElement, useState} from 'react';
import {mergeCn, omit, isFunction, orderBy,genListCyclic} from "../../utils/publicFun";
import {nil} from "../../base/BaseVariate";
import './TableW.less';
import {ArrowSvg} from "../../asset/svg/SVG";

const cyclicDire = genListCyclic();
const columnHeight = 35;

function Cell(props) {
    const {data, index, style,convert,bind,width,align,sortable,sort,setSort} = props;
    return <div className={cnFor()} style={styleFor()} onClick={handleClick}>
        {renderValue()}
        {sortable && renderMark()}
    </div>;

    function handleClick() {
        sortable && setSortFn();

        function setSortFn() {
            const newSort = {
                column:bind,
                direction:directionFor(),
            };
            return setSort(newSort);

            function directionFor() {
                if(nil.includes(sort.direction)) return 'desc';
                return cyclicDire(['asc', 'desc'])
            }
        }
    }

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

    function renderMark() {
        return <div className="tableW_mark flex-y">
            <ArrowSvg className='svg_arrow_up' color={markColorFor('asc')}/>
            <ArrowSvg className='svg_arrow_down' color={markColorFor('desc')}/>
        </div>;

        function markColorFor(name) {
            return bind===sort.column && sort.direction===name && '#1890ff'
        }
    }

    function styleFor() {
        return {
            ...style,
            minWidth: width + 'px',
            width: width + 'px',
            justifyContent:align,
            color:colorFor()
        };

        function colorFor() {
            if(!bind) return;
            return bind===sort.column&&'#1890ff'
        }
    }

    function cnFor() {
        return mergeCn("tableW_cell flex",sortable&&"tableW_cell_sort")
    }
}
Cell.defaultProps = {
    data:{},
    style: {},
    width:100,
    align:'center',
    sortable:false,
    sort:{}
};

function ColumnW(props) {
    const {options,index} = props;

    return <div className="tableW_row flex" data-index={index} style={{top:`${(index)* columnHeight}px`}}>
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
    const [renderIndex,setRenderIndex] = useState(0);
    const {data, children} = props;
    const mainRef = createRef();

    return <div className='tableW flex-y'>
        <div className="tableW_header tableW_row flex">
            {
                optionsFor().map((el, i) => {
                    return <Cell key={i} {...el} index={i} convert={<span>{el.text}</span>} sort={sort} setSort={setSort}/>
                })
            }
        </div>
        <div className="tableW_main" ref={mainRef} onScroll={mainScrollHandle}>
            <div className="viewport" style={{height:`${data.length * columnHeight}px`}}>
                {dataFor().map((el, i) => {
                    if(i>=renderIndex+40||i<renderIndex) return null;
                    return <ColumnW key={i} data={el} index={i} options={optionsFor()}/>
                })}
            </div>
        </div>
    </div>;

    function optionsFor() {
        return Children.map(children, child => child.props)
    }
    function dataFor() {
        const {column,direction} = sort;
        if(!column || !direction) return data;
        return orderBy(data,column,direction);
    }
    function mainScrollHandle() {
        setRenderIndex(Math.floor(mainRef.current.scrollTop/columnHeight))
    }
}
TableW.defaultProps={
    sort:{
        column:null,
        direction:null
    }
};

export {TableW, ColumnW};