import React from 'react';
import ReactDOM from 'react-dom';
import './CustomRMenu.less';
import {CirclePosition} from "../../utils/layoutPublicFun";

function GenCustomMenu() {
    const menuList = ['菜单1', '菜单2', '菜单3', '菜单4', '菜单5', '菜单6',];
    const positionFor = new CirclePosition({boxW:240,boxH:240});

    return <div className="x_customMenu flex-y center">
        {
            menuList.map((el, i) => {
                return <div className="x_customMenu_item" key={i} style={positionFor(menuList.length, i)}
                            onClick={(e) => handleClick(e,i)}>{el}</div>
            })
        }

    </div>;

    function handleClick(e,i) {
        e.stopPropagation();
        console.log(i);
    }
}

class ContextMenu {
    customMenuFor = () => document.querySelector('.x_customMenu_wrap');

    show = (e) => {
        const customMenu = this.customMenuFor();

        if (!customMenu) {
            genMenu();
            return this.show(e);
        }
        if(customMenu.style.display === 'flex')return this.hide();

        customMenu.style.display = 'flex';
        return setPosition(customMenu);


        function setPosition(ele) {
            ele.style.top = `${e.pageY - ele.clientHeight / 2}px`;
            ele.style.left = `${e.pageX - ele.clientWidth / 2}px`;
        }

        function genMenu() {
            const div = document.createElement('div');
            div.className = 'x_customMenu_wrap flex center';
            div.addEventListener('click',(e)=>{
                e.stopPropagation();
                console.log('menuClick');
            });
            document.body.appendChild(div);
            ReactDOM.render(GenCustomMenu(), div);
        }
    };

    hide = () => {
        const customMenu = this.customMenuFor();
        if (customMenu) return customMenu.style.display = 'none';
    }
}

const customMenu = new ContextMenu();
document.addEventListener('contextmenu', e => {
    e.preventDefault();
    customMenu.show(e);
});
document.addEventListener('click', e => {
    customMenu.hide();
    console.log('docClick');
});
