import React from 'react';
import ReactDOM from 'react-dom';
import './CustomRMenu.less';

function GenCustomMenu() {
    return <div className="x_customMenu flex-y center">
        <div className="x_customMenu_item">自定义菜单1</div>
        <div className="x_customMenu_item">自定义菜单2</div>
        <div className="x_customMenu_item">自定义菜单3</div>
        <div className="x_customMenu_item">自定义菜单4</div>
        <div className="x_customMenu_item">自定义菜单5</div>
        <div className="x_customMenu_item">自定义菜单6</div>
    </div>
}

class ContextMenu {
    customMenuFor = ()=>document.querySelector('.x_customMenu_wrap');

    show = (e)=>{
        const customMenu = this.customMenuFor();
        if(!customMenu){
            const div = document.createElement('div');
            div.className = 'x_customMenu_wrap flex center';
            document.body.appendChild(div);
            ReactDOM.render(GenCustomMenu(),div);
            return this.show(e);
        }
        customMenu.style.display = 'flex';
        return setPosition(customMenu);


        function setPosition(ele) {
            ele.style.top = `${e.pageY - ele.clientHeight/2}px`;
            ele.style.left = `${e.pageX - ele.clientWidth/2}px`;
        }
    };

    hide = ()=>{
        const customMenu = this.customMenuFor();
        if(customMenu) return customMenu.style.display='none';
    }
}

const customMenu = new ContextMenu();
document.addEventListener('contextmenu',e=>{
    e.preventDefault();
    customMenu.show(e);
});
document.addEventListener('click',e=>{
    customMenu.hide();
});
