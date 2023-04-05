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
    const winnerPattern = (pattern) => {
        let xSign = [];
        let oSign = [];
        for (let i = 0; i < pattern.length; i++) {
            let val = pattern[i];
            if (val == 'X') {
                xSign.push(i);
            }
            if (val == 'O') {
                oSign.push(i);
            }
            // 需要至少一方有三筆才需要比對
            if (xSign.length < 3 && oSign.length < 3) {
                continue;
            }

            if (xSign[0] === 0 || oSign[0] === 0) {

            }
        }
        return false;
    };

    const judgeWinner = (boardStatus) => {
        let result = [];
        boardStatus.forEach((item, index) => {
            result.push(item);
        });
        let isWinnerBorn = winnerPattern(result);
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