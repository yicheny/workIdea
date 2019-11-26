import React, {useState,useMemo} from 'react';
import {Button, Container} from "../../../component";
import './Tictactoe.less';

function Tictactoe(props) {
    const chessMap = useMemo(()=>({
        '小明':'X',
        '小华':'O'
    }),[]);
    const initialValues = useMemo(()=>Array(9).fill(null),[]);
    const initialPlayer = '小明';
    const initialWinner = null;

    const [values,setValues] = useState(initialValues);
    const [currPlayer,setCurrPlayer] = useState(initialPlayer);
    const [winner,setWinner] = useState(initialWinner);

    return <Container header='井字棋'>
        <div className="tictactoe">
            <div><Button type='primary' onClick={reset}>再来一局</Button></div>
            <div>胜利者：<span className='tictactoe_winner'>{winner}</span></div>
            <div>当前玩家：{currPlayer}</div>
            <div>当前玩家执子：{chessMap[currPlayer]}</div>
            <div className="tictactoe_board">
                {
                    values.map((v,i)=><Button key={i} onClick={()=>handleClick(i)}>{v}</Button>)
                }
            </div>
        </div>
    </Container>;

    function handleClick(i) {
        if(winner) return;
        const newValues = [...values];
        if(newValues[i]) return;
        newValues[i] = chessMap[currPlayer];
        setValues(newValues);
        if(isWinner(newValues)) return setWinner(currPlayer);
        setCurrPlayer(curr=>curr==='小明'?'小华':'小明');
    }

    function reset() {
        setValues(initialValues);
        setCurrPlayer(initialPlayer);
        setWinner(initialWinner);
    }

    function isWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}

export default Tictactoe;