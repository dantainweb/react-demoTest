import { Route, Routes } from "react-router-dom";
import CheckBoxDemoComponent from "./demoComponent/CheckBoxDemoComponent";
import SelectDemoComponent from "./demoComponent/SelectDemoComponent";
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
  )

  return (
    <Routes>
      <Route path="/testSelect" element={SelectElement} />
      <Route path="/testCheckBox" element={checkBoxElement} />
      <Route path="/testTable" element={tableContainerDemoComponent} />
    </Routes>
  );
}
