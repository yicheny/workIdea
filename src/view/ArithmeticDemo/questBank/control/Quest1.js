import React from 'react';
import {Container} from "../../../../component";

function Quest1(props) {
    const nums = [2, 7, 11, 15];
    const target = 9;

    console.log(towSum1(nums, target));
    console.log(towSum2(nums, target));
    console.log(towSum3(nums, target));
    console.log(towSum4(nums, target));
    return <Container header='两数之和'>

    </Container>;

    //暴力解法--forEach管道
    function towSum1(nums,target) {
        let indexList = null;

        nums.forEach((el,i)=>{
            const another = target - el;
            if(nums.includes(another)){
                const anotherIndex = nums.indexOf(another);
                if(i!==anotherIndex) return indexList = [i,anotherIndex];
            }
        });

        return indexList;
    }

    //暴力解法--for循环--速度较管道循环有所提升
    function towSum2(nums,target) {
        let indexList = null;

        for(let i=0;i<=(nums.length-1);i++){
            const another = target - nums[i];
            if(nums.includes(another)){
                const anotherIndex = nums.indexOf(another);
                if(i!==anotherIndex) return indexList = [i,anotherIndex];
            }
        }

        return indexList;
    }

    //两遍哈希表--哈希表以空间换取速度，速度较暴力法有较大提升
    function towSum3(nums,target) {
        let hashMap = {};
        for(let i=0;i<nums.length;i++){
            hashMap[nums[i]] = i;
        }
        for(let i=0;i<nums.length;i++){
            let another = target - nums[i];
            let anotherIndex = hashMap[another];
            if( anotherIndex>=0 && anotherIndex !==i)return [i,anotherIndex]
        }
    }

    //一遍哈希表--速度较两遍哈希表提升较小，空间使用更少
    //思路是生成哈希表的同时进行查询
    function towSum4() {
        let hashMap = {};
        for(let i=0;i<nums.length;i++){
            let another = target - nums[i];
            let anotherIndex = hashMap[another];
            if( anotherIndex>=0 && anotherIndex !== i) return [anotherIndex,i];
            hashMap[nums[i]] = i;
        }
    }
}

export default Quest1;