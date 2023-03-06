import { useState } from "react";

export default function CircleFork(props) {
    //Data---------------------------------------------------
    let boardData = [];
    for (let i = 0; i < 9; i++) {
        boardData.push(undefined);
    }
    const sign = ['X', 'O'];
    const [boardStatus, setboardStatus] = useState(boardData);
    const [cursor, setCursor] = useState(0);
    //---------------------------------------------------Data
    //Process------------------------------------------------
    const winnerPattern = (pattern, total) => {
        if (pattern.includes(0) && pattern.includes(1) && pattern.includes(2)) {
            return true;
        }
        if (pattern.includes(3) && pattern.includes(4) && pattern.includes(5)) {
            return true;
        }
        if (pattern.includes(6) && pattern.includes(7) && pattern.includes(8)) {
            return true;
        }
        if (pattern.includes(0) && pattern.includes(3) && pattern.includes(6)) {
            return true;
        }
        if (pattern.includes(1) && pattern.includes(4) && pattern.includes(7)) {
            return true;
        }
        if (pattern.includes(2) && pattern.includes(5) && pattern.includes(8)) {
            return true;
        }
        if (pattern.includes(0) && pattern.includes(4) && pattern.includes(8)) {
            return true;
        }
        if (pattern.includes(2) && pattern.includes(4) && pattern.includes(6)) {
            return true;
        }
        return false;
    };

    const judgeWinner = (boardStatus, playerSign) => {
        let result = [];
        let total = 0;
        boardStatus.forEach((item, index) => {
            if (item === playerSign) {
                result.push(index);
                total = total + index
            }
        });
        let isWinnerBorn = winnerPattern(result, total);
        if (isWinnerBorn) {
            return true;
        }
        else {
            return false;
        }
    };
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const clickEven = (index) => {
        let tempBoardStatus = Object.assign([], boardStatus);
        tempBoardStatus[index] = sign[cursor];
        setboardStatus(tempBoardStatus);
        //judge winner appear
        let isWinnerAppear = judgeWinner(tempBoardStatus, sign[cursor]);
        if (isWinnerAppear) {
            console.log('Winner is ' + cursor);
        }
        else {
            setCursor(value => {
                if (value === 0) {
                    return 1;
                }
                else
                    return 0;
            });
        }
    };
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    const boardElement = boardStatus.map((item, index) => {
        let key = `status-${index}`;
        let element = (
            <div
                key={key}
                style={{
                    float: 'left',
                    width: 40,
                    height: 40,
                    border: '1px solid #444',
                    boxSizing: 'border-box',
                    textAlign: 'center',
                    lineHeight: '40px'
                }}
                onClick={clickEven.bind(this, index)}
            >
                {item}
            </div>
        );
        return element;
    });
    let element = (
        <div
            style={{
                position: 'relative',
                width: 120
            }}
        >
            {boardElement}
        </div>
    );
    return element;
    //-------------------------------------------------Render
}