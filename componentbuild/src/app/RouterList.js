import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { CheckBox } from "./component/checkBox/CheckBox";
import CheckBoxDemoComponent from "./demoComponent/CheckBoxDemoComponent";
import SelectDemoComponent from "./demoComponent/SelectDemoComponent";

export function RouterList(props) {
  let SelectElement = (
    <SelectDemoComponent />
  );

  let checkBoxElement = (
    <CheckBoxDemoComponent />
  );

  return (
    <Routes>
      <Route path="/testSelect" element={SelectElement} />
      <Route path="/testCheckBox" element={checkBoxElement} />
    </Routes>
  );
}
