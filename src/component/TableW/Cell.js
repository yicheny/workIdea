import {genListCyclic, isFunction, isNil, mergeCn} from "../../utils/publicFun";
import React, {isValidElement} from "react";
import {ArrowSvg} from "../../asset/svg/SVG";

const cyclicDire = genListCyclic(['asc', 'desc']);
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
                if(isNil(sort.direction)) return 'desc';
                return cyclicDire()
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

export default Cell;