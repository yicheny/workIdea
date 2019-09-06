import React, {useState} from 'react';
import {mergeCn} from "../../utils/publicFun";
import './Menu.less';
import Icon from '../Icon/Icon';

function MenuItem(props) {
    const {data} = props;
    const [arrowCn,setArrowCn] = useState('arrow_down');

    return <li className='x_menu_item'>
        <div className='x_menu_item_main' onClick={arrowCnChange}>
            <span className='tit'>
                <Icon type='success' size={18}/>
                <span>{data.tit}</span>
            </span>
            {data.details && <Icon className={arrowCn} type='arrowDown' size={18}/>}
        </div>
        {
            data.details && <Menu data={data.details} className={arrowCn}/>
        }
    </li>;

    function arrowCnChange() {
        const arrowMap={
            'arrow_down':'arrow_up',
            'arrow_up':'arrow_down'
        };
        setArrowCn(arrowMap[arrowCn])
    }
}

function Menu(props) {
    const {data,className} = props;
    const cn = mergeCn('x_menu',className);

    return <ul className={cn}>
        {data.map((el, i) => <MenuItem data={el} key={i}/>)}
    </ul>;
}
Menu.defaultProps = {
    data:[],
    className:''
};

function MenuWrap(props) {
    const {data, ...rest} = props;
    return <div className="x_menu_wrap" {...rest}>
        <Menu data={data}/>
    </div>
}

export default MenuWrap;