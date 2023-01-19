import { Grid } from "@mui/material";
import { useState } from "react";
import { CheckBox } from "../component/checkBox/CheckBox";

export default function CheckBoxDemoComponent(props) {
    //Data---------------------------------------------------
    const [checkState, setCheckState] = useState(true);
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const clickEvent = (e) => {
        setCheckState(e.target.checked);
    }
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let element = (
        <Grid container>
            <Grid
                item xs={3}
                marginLeft={10}>
                <CheckBox
                    label="A"
                    checked={checkState}
                    onClick={clickEvent}
                />
            </Grid>
        </Grid>
    );
    return element;
    //-------------------------------------------------Render
}