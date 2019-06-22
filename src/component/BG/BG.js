import React from 'react';
import './BG.less';
import Pic01 from "../../asset/img/BG01.jpg"
import Pic02 from "../../asset/img/BG02.jpg"
import Pic03 from "../../asset/img/BG03.jpg"
import Pic04 from "../../asset/img/BG04.png"
import Pic05 from "../../asset/img/BG05.png"

function Bg(props) {
    return (
        <div className='x_bg'>
            <img className='pic1' src={Pic01} alt=""/>
            <img className='pic2' src={Pic02} alt=""/>
            <img className='pic3' src={Pic03} alt=""/>
            <img className='pic4' src={Pic04} alt=""/>
            <img className='pic5' src={Pic05} alt=""/>
        </div>
    );
}

export default Bg;