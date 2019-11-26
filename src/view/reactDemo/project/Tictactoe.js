import React, {useState,useMemo} from 'react';
import {Button, Container} from "../../../component";
import {last} from "../../../utils/publicFun";
import './Tictactoe.less';

function Tictactoe(props) {
    const chessMap = useMemo(()=>({
        '玩家1':'X',
        '玩家2':'O'
    }),[]);
    const initialValues = useMemo(()=>Array(9).fill(null),[]);
    const initialPlayer = '玩家1';
    const initialWinner = null;
    const initialRecord = [];

    const [values,setValues] = useState(initialValues);
    const [currPlayer,setCurrPlayer] = useState(initialPlayer);
    const [winner,setWinner] = useState(initialWinner);
    const [records,setRecords] = useState(initialRecord);

    return <Container header='井字棋'>
        <div className="tictactoe">
            <div>
                <Button type='primary' onClick={reset}>再来一局</Button>
                <Button type='primary' onClick={toPrev} style={{marginLeft:12}}>悔棋</Button>
            </div>
            <div>胜利者：<span className='tictactoe_winner'>{winner}</span></div>
            <div>当前玩家：{currPlayer}</div>
            <div>当前玩家执子：{chessMap[currPlayer]}</div>
            <div className="flex">
                <div className="tictactoe_board">
                    {
                        values.map((v,i)=><Button key={i} onClick={()=>handleClick(i)}>{v}</Button>)
                    }
                </div>
            </div>
        </div>
    </Container>;

    function handleClick(i) {
        if(winner) return;
        const newValues = [...values];
        if(newValues[i]) return;
        newValues[i] = chessMap[currPlayer];
        setValues(newValues);
        setRecords(records.concat([newValues]));
        if(isWinner(newValues)) return setWinner(currPlayer);
        setCurrPlayer(curr=>curr==='玩家1'?'玩家2':'玩家1');
    }

    function reset() {
        setValues(initialValues);
        setCurrPlayer(initialPlayer);
        setWinner(initialWinner);
        setRecords(initialRecord);
    }

    function toPrev() {
        if(!records.length) return;
        records.pop();
        setValues(last(records) || initialValues);
        if(!winner) return setCurrPlayer(curr=>curr==='玩家1'?'玩家2':'玩家1');
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