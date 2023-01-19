import { Grid } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CheckBox } from "./component/checkBox/CheckBox";
import { Selector } from "./component/selector/Selector";

export function RouterList(props) {
  const [value, setValue] = useState("");
  const changeValue = value => {
    setValue(value);
  };

  let SelectElement = (
    <Grid container>
      <Grid item xs={2} marginLeft={10}>
        <Selector
          onChange={changeValue}
          label="testSelect"
          list={["one", "two", "three"]}
          value={value}
        />
      </Grid>
      <Grid item xs={2} marginLeft={-10}>
        <Selector
          onChange={changeValue}
          label="testSelect"
          list={["four", "five", "six"]}
          value={value}
        />
      </Grid>
    </Grid>
  );

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
