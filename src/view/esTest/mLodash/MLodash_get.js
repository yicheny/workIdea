import React from 'react';

const mockData = {
    'age':123,
    'friend':{
        'a':4,
        'b':[5,6,7]
    }
};

function l_get(obj,path) {
    // console.log(obj, path);
}

function MLodash_get(props) {
    l_get(mockData,'friend["b"][0]');

    return (
        <div>
            <h2>实现get方法</h2>
        </div>
    );
}

export default MLodash_get;