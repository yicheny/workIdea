import {omit} from "../../utils/publicFun";
import React from "react";
import Cell from './Cell';

const columnHeight = 35;

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

export default ColumnW