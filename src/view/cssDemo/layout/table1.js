import React from 'react';
import './table1.less'

//设置单列表格宽度固定，其他列平分剩余宽度

const mockData = Array.from(Array(8),(el,i)=>[
    i,i*2,i*3
]);
function Table1(props) {
    return (
        <div className='css_table1'>
            <table>
                { mockData.map((el)=><tr>
                    <td>{el[0]}</td>
                    <td>{el[1]}</td>
                    <td>{el[2]}</td>
                </tr>)}
            </table>
        </div>
    );
}

export default Table1;