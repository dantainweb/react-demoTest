import { Route, Routes } from "react-router-dom";
import CheckBoxDemoComponent from "./demoComponent/CheckBoxDemoComponent";
import SelectDemoComponent from "./demoComponent/SelectDemoComponent";
import TableAndSelectDemoComponent from "./demoComponent/TableAndSelectDemoComponent";
import TableContainerDemoComponent from "./demoComponent/TableContainerDemoComponent";

export function RouterList(props) {
  let SelectElement = (
    <SelectDemoComponent />
  );

  let checkBoxElement = (
    <CheckBoxDemoComponent />
  );

  let tableContainerDemoComponent = (
    <TableContainerDemoComponent />
  );

  let tableAndSelectDemoComponent = (
    <TableAndSelectDemoComponent />
  );

  return (
    <Routes>
      <Route path="/testSelect" element={SelectElement} />
      <Route path="/testCheckBox" element={checkBoxElement} />
      <Route path="/testTable" element={tableContainerDemoComponent} />
      <Route path="/testTableAndSelect" element={tableAndSelectDemoComponent} />
    </Routes>
  );
}
