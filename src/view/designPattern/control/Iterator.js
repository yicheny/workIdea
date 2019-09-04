import React from 'react';

function Iterator(props) {
    //内部迭代器

    //外部迭代器
    var Iterator = function(arr){
        let current = 0;
        let next = ()=> arr[++current];
        let isDone = ()=> current>=arr.length;
        let getCurrentItem = ()=>arr[current];
        return {
            next,
            isDone,
            getCurrentItem:getCurrentItem,
            length:arr.length
        }
    };

    var iterator1 = Iterator([1,2,3,4]);
    var iterator2 = Iterator([4,5,7,6]);
    var iterator3 = Iterator([4,5,7,6,7]);
    // console.log(iterator1.getCurrentItem());
    // console.log(iterator1.next());
    // console.log(iterator1.next());
    // console.log(iterator1.next());

    var compare = function (iterator1,iterator2) {
        if(iterator1.length !== iterator2.length) return console.log('不相等');
        while(!iterator1.isDone()&&!iterator2.isDone()){
            if(iterator1.getCurrentItem() !== iterator2.getCurrentItem()){
                return console.log('不相等');
            }
            iterator1.next();
            iterator2.next();
        }
        console.log('相等');
    };

    compare(1,iterator2);
    compare(iterator2,iterator3);

    //es6的迭代器
    function* gen(list) {
        yield* list;
    }

    var iterator4 = gen([1,2,3]);
    console.log(iterator4.next().value);
    console.log(iterator4.next().value);
    console.log(iterator4.next().value);
    console.log(iterator4.next().value);
    console.log(iterator4.next().value);

    return (
        <div>迭代器模式</div>
    );
}

export default Iterator;