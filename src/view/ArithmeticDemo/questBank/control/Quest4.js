import React from 'react';
import {Container} from "../../../../component";

function Quest4(props) {
    const x = 1534236469;

    console.log(reverse(x));
    return <Container header='整数反转'>

    </Container>;

    //解法1--速度极强，空间一般
    //这里应用了十进制数字是位置型数码系统的特性，关键词：位置量
    function reverse(x) {
        const MAX = Math.pow(2,31);

        if(x>=MAX || x <-MAX) return 0;

        let x2= Math.abs(x).toString();
        let res = 0;
        const len = x2.length;

        for(let i=0;i<len;i++){
            res += x2[i] * Math.pow(10, i);
        }

        if(res>=MAX || res <-MAX) return 0;
        return x>=0 ? res : res*-1;
    }
}

export default Quest4;