import React from 'react';
import {Container} from "../../../../component";

function Quest6(props) {
    const board = [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];

    console.log(isValidSudoku(board));
    return <Container header='有效的数独'/>;

    //速度极快_S,空间差_E
    //代码太多了，想办法简化下...
    function isValidSudoku(board) {
        if (!boardCheck(board)) return false;
        if (!boardCheck(genVBoard())) return false;
        if (!boardCheck(genNineGrid())) return false;
        return true;

        function genNineGrid() {
            const res = [];
            let newBoard = board.reduce((acc,el)=>acc.concat(el),[]);
            newBoard = chunk(newBoard,3);

            for(let i=0;i<9;i++){
                const index =i + 6 * Math.floor(i/3);
                res.push([...newBoard[index],...newBoard[index+3],...newBoard[index+6]])
            }

            return res;

            function chunk(arr, size = 1) {
                let oriArr = [...arr],
                    newArr = [];

                while (oriArr.length) {
                    newArr.push(oriArr.splice(0, size))
                }
                return newArr;
            }
        }

        function genVBoard() {
            const res = Array.from(Array(9), () => []);
            board.forEach((el, i) => {
                el.forEach((el2, i2) => {
                    res[i2].push(el2);
                })
            });
            return res;
        }

        function boardCheck(board) {
            return board.every(item => isRepetition(item));
        }

        function isRepetition(array) {
            array = array.filter(item => item !== '.');
            const array2 = [];

            for (let i = 0; i < array.length; i++) {
                if (array2.includes(array[i])) return false;
                array2.push(array[i]);
            }

            return true;
        }
    }
}

export default Quest6;