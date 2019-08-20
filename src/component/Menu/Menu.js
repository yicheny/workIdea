import React from 'react';
import './Menu.less';
import Icon from '../Icon/Icon';

function MenuItem(props) {
    const {data} = props;
    return <li className='x_menu_item'>
        <div>
            <Icon type='success' size={18}/>
            <span>
            {data.tit}
        </span>
        </div>
        {
            data.details && <Menu data={data.details}/>
        }
    </li>
}

function Menu(props) {
    const {data} = props;

    return <ul className='x_menu'>
        {
            data.map((el,i)=>{
                return <MenuItem data={el} key={i}/>
            })
        }
    </ul>
}

function MenuWrap(props){
    const {data,...rest} = props;
    return <div className="x_menu_wrap" {...rest}>
        <Menu data={data}/>
    </div>
}

Menu.defaultProps = {
    data:[]
};

export default MenuWrap;