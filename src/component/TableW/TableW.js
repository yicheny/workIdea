import React, {Children, createRef, useState} from 'react';
import {orderBy} from "../../utils/publicFun";
import './TableW.less';
import Cell from './Cell';
import ColumnW from './ColumnW';

const columnHeight = 35;

function TableW(props) {
    const [sort, setSort] = useState(props.sort);
    const [renderIndex, setRenderIndex] = useState(0);
    const {data, children} = props;
    const mainRef = createRef();
    const headRef = createRef();

    return <div className='tableW flex-y'>
        <div className="tableW_header tableW_row flex" ref={headRef}>
            {
                optionsFor().map((el, i) => {
                    return <Cell key={i} {...el} index={i} convert={<span>{el.text}</span>} sort={sort}
                                 setSort={setSort}/>
                })
            }
        </div>
        <div className="tableW_main" ref={mainRef} onScroll={mainScrollHandle}>
            <div className="viewport" style={{height: `${data.length * columnHeight}px`}}>
                {dataFor().map((el, i) => {
                    if (i >= renderIndex + 40 || i < renderIndex) return null;
                    return <ColumnW key={i} data={el} index={i} options={optionsFor()}/>
                })}
            </div>
        </div>
    </div>;

    function optionsFor() {
        return Children.map(children, child => child.props)
    }

    function dataFor() {
        const {column, direction} = sort;
        if (!column || !direction) return data;
        return orderBy(data, column, direction);
    }

    function mainScrollHandle() {
        headRef.current.style.transform = `translateX(-${mainRef.current.scrollLeft}px)`;
        setRenderIndex(Math.floor(mainRef.current.scrollTop / columnHeight))
    }
}

TableW.defaultProps = {
    sort: {
        column: null,
        direction: null
    }
};

export default TableW