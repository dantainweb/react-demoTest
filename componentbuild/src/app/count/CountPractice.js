import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function CountPractice() {
    //Data---------------------------------------------------
    // array匹配復值
    // const [c, e, d] = [10, 11, (val) => {
    //     return val + 1;
    // }];

    const countStatus = useState(0);
    const test = countStatus[0];
    const setTest = (val) => {
        countStatus[0] = val;
    };
    console.log('test: ' + test);
    setTest(10);
    console.log('newTest: ' + test)
    // // 物件匹配賦值
    // let { b, a } = { a: 10, b: 20 };
    // console.log(a, b);

    // const abc = (v) => {
    //     let tt = v;
    //     return [tt, (fn) => {
    //         tt = fn(b);
    //     }];
    // };
    // const [a, b] = abc(10);
    // b((value) => {
    //     console.log(value + a);
    //     return value;
    // });
    // console.log(a);

    const [count, setCount] = useState(0);
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    useEffect(() => {
        setInterval(() => {
            setCount(val => val + 1);
        }, 1000);
    }, []);

    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let element = (
        <>
            計數器：{count}
        </>
    );
    return element;
    //-------------------------------------------------Render
}