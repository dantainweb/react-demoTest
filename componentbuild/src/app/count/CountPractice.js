import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function CountPractice() {
    //Data---------------------------------------------------
    const [count, setCount] = useState(0);
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    useEffect(() => {
        let id = setInterval(() => {
            let newCount = count + 1;
            setCount(newCount);
        }, 1000);
        return function () {
            clearInterval(id);
        };
    }, [count]);

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