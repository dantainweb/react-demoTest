import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Selector } from "../component/selector/Selector";

export default function SevenElevenSelectorComponent(props) {
    //Data---------------------------------------------------
    const [data, setData] = useState([]);
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    //取得資料
    useEffect(() => {

    }, []);
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let element = (
        <Box>
            <Selector
            />
        </Box>
    );
    return element;
    //-------------------------------------------------Render
}