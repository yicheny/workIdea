import React from 'react';
import {Container} from "../../../../component";

function Quest2(props) {
    const str = "dvdf";

    console.log(lengthOfLongestSubstring(str));
    return <Container header='无重复字符的最长字串'>

    </Container>;

    //滑动窗口法--速度极快,并且空间使用极少
    function lengthOfLongestSubstring(s) {
        let longest = 0;
        let currentStrs = [];
        const strs = s.split('');

        strs.forEach((el, i) => {
            if (currentStrs.includes(el)) {
                const index = currentStrs.indexOf(el);
                currentStrs.splice(0,index+1);
            }
            currentStrs.push(el);

            if (currentStrs.length > longest) {
                longest = currentStrs.length;
            }
        });

        return longest;
    }
}

export default Quest2;