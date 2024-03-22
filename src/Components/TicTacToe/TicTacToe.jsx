import React, { useState, useEffect } from 'react';
import "./TicTacToe.css";
import Circle_icon from "../Assets/circle.png";
import Cross_icon from "../Assets/cross.png";

const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [winner, setWinner] = useState('');
    const [data, setData] = useState(Array(9).fill(""));

    const toggle = (e, num) => {
        if (lock || e.target.innerHTML !== '') {
            return;
        }
        const newData = [...data];
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${Cross_icon}'/>`;
            newData[num] = "x";
            setCount(count + 1);
        } else {
            e.target.innerHTML = `<img src='${Circle_icon}'/>`;
            newData[num] = "o";
            setCount(count + 1);
        }
        setData(newData);
    };

    const resetGame = () => {
        setCount(0);
        setLock(false);
        setWinner('');
        setData(Array(9).fill(""));
        const boxes = document.querySelectorAll(".boxes");
        boxes.forEach(box => {
            box.innerHTML = "";
        });
    };

    useEffect(() => {
        checkWin();
    }, [data]);

    const checkWin = () => {
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
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                setWinner(data[a]);
                setLock(true);
                break;
            }
        }
        if (count === 9 && !winner) {
            setWinner('Draw');
            setLock(true);
        }
    };

    return (
        <div className='container'>
            <h1 className="title">Tic Tac Toe <span> By Aj </span></h1>
            {winner && (
    <div className="result">
        {winner === 'Draw' ? 'It\'s a Draw!' : <span dangerouslySetInnerHTML={{ __html: `Player <span>${winner.toUpperCase()}</span> wins!` }} />}
    </div>
)}

            
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e) => { toggle(e, 0) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 1) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 2) }}></div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e) => { toggle(e, 3) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 4) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 5) }}></div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e) => { toggle(e, 6) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 7) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>

            <button className="reset" onClick={resetGame}>Reset</button>
        </div>
    );
};

export default TicTacToe;
