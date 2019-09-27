import React,{Children} from 'react';
import './TableW.less';

function Column(props) {
    const {bind,text} = props;
    return <div></div>
}

function TableW(props) {
    const {data,children} = props;

    console.log(headerFor());
    const bindList = bindListFor();
    return <div className='tableW'>
        <div className="tableW_header tableW_row flex">
            {
                headerFor().map((el,i) => <div key={i} className='tableW_cell'>{el}</div>)
            }
        </div>
        <div className="tableW_main">
            {
                data.map((el,i)=>{
                    return <div className="tableW_row flex" key={i}>
                        {
                            bindList.map((bind,i2)=>{
                                return <div className="tableW_cell" key={i2}>
                                    {el[bind]}
                                </div>
                            })
                        }
                    </div>
                })
            }
        </div>
    </div>;

    function headerFor() {
        return Children.map(children,child=>child.props.text)
    }
    function bindListFor() {
        return Children.map(children,child=>child.props.bind)
    }
}

export {TableW,Column};