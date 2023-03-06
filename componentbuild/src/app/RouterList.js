import { Route, Routes } from "react-router-dom";
import CircleFork from "./circleFork/CircleFork";
import TableDemo from "./component/tableDemo/TableDemo";
import TableDemo2 from "./component/tableDemo2/TableDemo2";
import CountPractice from "./count/CountPractice";
import Practice from "./dataTablePractice/Practice";
import CheckBoxDemoComponent from "./demoComponent/CheckBoxDemoComponent";
import SelectDemoComponent from "./demoComponent/SelectDemoComponent";
import SevenElevenSelectorComponent from "./demoComponent/SevenElevenSelectorComponent";
import TableAndCheckboxDemoComponent from "./demoComponent/TableAndCheckboxDemoComponent";
import TableAndSelectDemoComponent from "./demoComponent/TableAndSelectDemoComponent";
import TableContainerDemoComponent from "./demoComponent/TableContainerDemoComponent";
import PracticeNestList from "./nestList/PracticeNestList";

export function RouterList() {
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

  let tableAndCheckboxDemoComponent = (
    <TableAndCheckboxDemoComponent />
  );

  let sevenElevenSelector = (
    <SevenElevenSelectorComponent />
  );

  let tableDemo = (
    <TableDemo />
  );

  let tableDemo2 = (
    <TableDemo2 />
  );

  let practice = (
    <Practice />
  );

  let countPractice = (
    <CountPractice />
  );

  let nestList = (
    <PracticeNestList />
  );

  let circleFork = (
    <CircleFork />
  );

  return (
    <Routes>
      <Route path="/testSelect" element={SelectElement} />
      <Route path="/testCheckBox" element={checkBoxElement} />
      <Route path="/testTable" element={tableContainerDemoComponent} />
      <Route path="/testTableAndSelect" element={tableAndSelectDemoComponent} />
      <Route path="/testTableAndCheckbox" element={tableAndCheckboxDemoComponent} />
      <Route path="/findSevenElevenShop" element={sevenElevenSelector} />
      <Route path="/tableDemo" element={tableDemo} />
      <Route path="/tableDemo2" element={tableDemo2} />
      <Route path="/practice" element={practice} />
      <Route path="/countPractice" element={countPractice} />
      <Route path="/nestList" element={nestList} />
      <Route path="/circleFork" element={circleFork} />
    </Routes>
  );
}
