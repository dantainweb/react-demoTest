import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { CheckBox } from "./component/checkBox/CheckBox";
import SelectDemoComponent from "./demoComponent/SelectDemoComponent";

export function RouterList(props) {
  let SelectElement = <SelectDemoComponent />;

  let checkBoxElement = (
    <Grid container>
      <Grid item xs={3} marginLeft={10}>
        <CheckBox label="A" />
      </Grid>
    </Grid>
  );

  return (
    <Routes>
      <Route path="/testSelect" element={SelectElement} />
      <Route path="/testCheckBox" element={checkBoxElement} />
    </Routes>
  );
}
