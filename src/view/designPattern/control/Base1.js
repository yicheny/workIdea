import React from 'react';

function Base1(props) {

    //多态
    const duck = {
        sound:()=>'嘎嘎嘎'
    };
    const chicken = {
        sound:()=>'咯咯咯'
    };
    const makeSound = (animal)=>animal.sound();

    return (
        <div>
            {makeSound(duck)}<br/>
            {makeSound(chicken)}
        </div>
    );
}

export default Base1;