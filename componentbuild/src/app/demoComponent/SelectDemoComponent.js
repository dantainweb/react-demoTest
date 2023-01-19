import { Grid } from "@mui/material";
import { useState } from "react";
import { Selector } from "../component/selector/Selector";

export default function SelectDemoComponent(props) {
  //Data---------------------------------------------------
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  //---------------------------------------------------Data
  //Process------------------------------------------------
  const changeValue1 = value => {
    setValue1(value);
  };
  const changeValue2 = value => {
    setValue2(value);
  };
  //------------------------------------------------Process
  //Event--------------------------------------------------
  //--------------------------------------------------Event
  //Render-------------------------------------------------
  let element = (
    <Grid container>
      <Grid item xs={2} marginLeft={10}>
        <Selector
          onChange={changeValue1}
          label="testSelect"
          list={["one", "two", "three"]}
          value={value1}
        />
      </Grid>
    </Grid>
  );
  return element;
  //-------------------------------------------------Render
}
