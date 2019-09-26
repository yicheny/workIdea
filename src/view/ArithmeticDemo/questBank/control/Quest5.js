import React from 'react';
import {Container} from "../../../../component";

function Quest5(props) {
    const n = 121;

    console.log(isPalindrome(n));
    return <Container header='回文数'>

    </Container>;

    //速度极强_S，空间一般_C
    function isPalindrome(x) {
        if(x<0) return false;

        let x2= Math.abs(x).toString();
        let res = 0;
        const len = x2.length;

        for(let i=0;i<len;i++){
            res += x2[i] * Math.pow(10, i);
        }

        return x===res;
    }
}

export default Quest5;