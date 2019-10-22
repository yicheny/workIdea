import React, {useEffect,createRef} from 'react';
import ReactDOM from 'react-dom';
import './CustomRMenu.less';
import {CirclePosition} from "../../utils/layoutPublicFun";

function GenCustomMenu() {
    const menuList = ['导航', 'DOClever', '部署', 'MDN', 'React', 'bugTags', '本地'];
    const positionFor = new CirclePosition({boxW:240,boxH:240});
    const boxRef = createRef();

    useEffect(()=>{
        bindEvent();
    },[]);

    return <div className="x_customMenu flex-y center" ref={boxRef}>
        {
            menuList.map((el, i) => {
                return <div className="x_customMenu_item" key={i} style={positionFor(menuList.length, i)}>{el}</div>
            })
        }
    </div>;

    function bindEvent(){
        const items = [...boxRef.current.children];
        items.forEach((el,i)=>{
            el.addEventListener('click',(e)=>{
                handleClick(e,i)
            });
        });

        function handleClick(e,i) {
            e.stopPropagation();
            // console.log('itemClick',i);
            return strategyFor()[i]();

            function strategyFor() {
                return {
                    0:()=>window.open('https://192.168.1.56/nav/'),
                    1:()=>window.open('http://192.168.1.56:10000/html/web/controller/console/console.html'),
                    2:()=>window.open('http://192.168.1.43:8081/jenkins/view/%E5%89%8D%E5%8F%B0%E9%83%A8%E7%BD%B2/'),
                    3:()=>window.open('https://developer.mozilla.org/zh-CN/'),
                    4:()=>window.open('https://zh-hans.reactjs.org/'),
                    5:()=>window.open('https://work.bugtags.cn/apps/1620705465599016'),
                    6:()=>window.open('http://localhost:3000/#/login')
                };
            }
        }
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
                // console.log('menuClick');
            });
            document.body.appendChild(div);
            ReactDOM.render(<GenCustomMenu/>, div);
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
    // console.log('docClick');
});

//问题1：在GenCustomMenu函数组件内调用useEffect方法报错
//原因：以GenCustomMenu()方式调用函数式组件
//解决：必须以形如<GenCustomMenu/>调用函数式组件

//问题2:
//从内而外绑定三层click事件：item、menu、document，其中item、menu都设置了e.stopPropagation()，但是点击item时却只触发了menu的click事件;如果注释menu的e.stopPropagation()，点击item，事件触发顺序为menu-document-item
//关注点1：点击item却只触发menu事件
//关注点2：注释menu的e.stopPropagation()，点击item的触发顺序是：menu-document-item【存在两个问题，顺序及item的e.stopPropagation()失效
//原因1：react有一套自己的 SyntheticEvent【混合事件】系统，这个事件系统是委托在document上的，它的执行顺序在原生事件之后
//原因2：在React事件中拿到的e并不是原生的事件对象【通过e.nativeEvent可以拿到原生对象，然而执行到这里时已经经过了原生事件执行，所以即使执行原生的e.nativeEvent.stopPropagation()也无法解决问题】
//解决方案：
//react和原生事件不要混用
//参考资料1：https://www.cnblogs.com/Wayou/p/react_event_issue.html
//参考资料2：https://juejin.im/entry/58d138a344d9040069175574