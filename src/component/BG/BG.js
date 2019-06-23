import React from 'react';
import './BG.less';
import Pic01 from "../../asset/img/BG01.jpg"
import Pic02 from "../../asset/img/BG02.jpg"
import Pic03 from "../../asset/img/BG03.jpg"
import Pic04 from "../../asset/img/BG04.png"
import Pic05 from "../../asset/img/BG05.png"
import Pic06 from "../../asset/img/BG06.jpg"

function Bg(props) {
    const picArr = [Pic01,Pic02,Pic03,Pic04,Pic05,Pic06];

    return (
        <div className='x_bg'>
            {
                picArr.map((el,i,thisArg)=> {
                    return <span key={i} style={{backgroundImage:`url(${el})`,animationDelay:`${6*i}s`}}></span>
                })
            }
        </div>
    );
}

export default Bg;