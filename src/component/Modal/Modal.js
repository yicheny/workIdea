import React, {createRef} from 'react';
import './Modal.less';
import {Button} from "../index";

function Modal(props) {
    let {children, header, confirm, cancel, confirmText, cancelText, width, height, style, layout, cancelVisible} = props;
    style = {...style, width, height};
    const cn = ['x_modal_wrapper', layout === 'center' ? 'center' : ''].join(' ');

    let oriOffset = null;
    let preOffset = {x: 0, y: 0};
    const modalRef = createRef();

    return <div className={cn}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}>
        <div ref={modalRef} className="x_modal" style={style}>
            <div className="x_modal_header"
                 onMouseDown={handleMouseDown}>
                {header}
            </div>
            <div className="x_modal_main">
                {children}
            </div>
            <div className="x_modal_footer">
                <Button type='primary' onClick={confirm}>{confirmText}</Button>
                {cancelVisible && <Button onClick={cancel}>{cancelText}</Button>}
            </div>
        </div>
    </div>;

    function handleMouseDown(e) {
        oriOffset = {
            x: e.clientX,
            y: e.clientY
        };
    }

    function handleMouseMove(e) {
        if(oriOffset){
            const {x, y} = getOffset(e);
            modalRef.current.style.transform = `translate(${x}px,${y}px)`
        }
    }

    function handleMouseUp(e) {
        if(getOffset(e)){
            preOffset = getOffset(e);
        }
        oriOffset = null
    }

    function getOffset(e) {
        if(!oriOffset) return;
        const x = e.clientX - oriOffset.x + preOffset.x;
        const y = e.clientY - oriOffset.y + preOffset.y;
        return {x, y}
    }
}

Modal.defaultProps = {
    children: '',
    header: '标题',
    confirm: () => {},
    cancel: () => {},
    confirmText: '确认',
    cancelText: '取消',
    cancelVisible: true,
    width: 420,
    height: 240,
    layout: '',
};

export default Modal;
//拖拽：
//1.在header部分按下鼠标触发mouseDown事件,记录下当前坐标位置oriOffset
//2.鼠标移动，触发mouseMove事件,通过e.clientX - oriOffset.x + priOffset.x 获取当前位移【注，priOffset代表上一次位移】
//3.通过modalRef.current.style.transform = `translate(${x}px,${y}px)`设置组件位移
//4.鼠标松开，触发mouseUp事件