import { Checkbox } from "@mui/material";
import DirectTitle from "./DirectTitle";

export default function CheckBox(props) {
    //Data---------------------------------------------------
    const checked = props.checked;
    const title = props.title;
    const direct = props.direct;
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let element = (
        <DirectTitle
            title={title}
            direct={direct}
        >
            <Checkbox
                checked={checked}
            />
        </DirectTitle>
    );
    return element;
    //-------------------------------------------------Render
}