import React from 'react';
import './Layout.less'

function Layout1(props) {
    return (
        <div className='x_layout'>
            <div className="x_layout_block1">
                预期效果：两个模块总体占满整个高度，第一个模块高度定死200px,第二个高度占满剩余高度【当其内部超出高度时，仅在内部出现滚动条】
            </div>
            {/*<div className="x_layout_block2"></div>*/}
            <div className="x_layout_block3">
                <div className="x_layout_block3_inner">
                    {
                        Array.from(Array(3000),()=>"测试").join('')
                    }
                </div>
            </div>
        </div>
    );
}

export default Layout1;