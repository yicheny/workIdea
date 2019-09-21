import React from 'react';
import {Container} from "../../../../component";

function Quest3(props) {
    const str = "abac";

    console.log(longestPalindrome(str));
    return <Container header='最长回文字串'>

    </Container>;

    //中心扩散法--速度和空间使用都很一般
    function longestPalindrome(s) {
        let longestStr = '';
        for (let i = 0; i < s.length; i++) {
            const el = s[i];
            // setLongest(el);
            check('even', el, i);
            check('odd', el, i);
        }

        function check(type = 'even', el, i) {
            let index = 0;
            let currentStr = type === 'even' ? '' : el;
            let leftStr = leftStrFor();
            let rightStr = rightStrFor();

            while (leftStr !== '' && leftStr === rightStr) {
                currentStr = leftStr + currentStr + rightStr;
                setLongest(currentStr);
                index++;
                leftStr = leftStrFor();
                rightStr = rightStrFor();
            }

            function leftStrFor() {
                if (type === 'even') return s.slice(i - index, i - index + 1);
                if (type === 'odd') return s.slice(i - index - 1, i - index);
            }

            function rightStrFor() {
                return s.slice(i + index + 1, i + index + 2);
            }
        }

        function setLongest(str) {
            if (str.length >= longestStr.length) {
                longestStr = str;
            }
        }

        return longestStr;
    }
}

export default Quest3;