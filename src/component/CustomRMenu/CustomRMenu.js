import React from 'react';
import ReactDOM from 'react-dom';
import './CustomRMenu.less';

function GenCustomMenu() {
    const menuList = ['菜单1','菜单2','菜单3','菜单4','菜单5','菜单6',];

    return <div className="x_customMenu flex-y center">
        {
            menuList.map((el,i)=>{
                return <div className="x_customMenu_item" key={i} style={positionFor(menuList.length,i)} onClick={()=>handleClick(i)}>{el}</div>
            })
        }

    </div>;

    function handleClick(index) {
        console.log(index);
    }

    function positionFor(max, i) {
        const boxW = 300;
        const boxH = 300;
        const itemW = 60;
        const itemH = 60;

        const rad = ((i % max) / (max / 2)) * Math.PI;
        const sinValue = Math.sin(rad).toFixed(4);
        const cosValue = Math.cos(rad).toFixed(4);
        const height = (boxH - itemH) / 2;
        const width = (boxW - itemW) / 2;
        const bottom = (cosValue * height) + height;
        const left = (sinValue * width) + width;
        return {bottom, left};
    }
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
