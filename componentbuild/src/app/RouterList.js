import { Grid } from "@mui/material";
import { useState } from "react";
import { Selector } from "./component/selector/Selector";

export function RouterList(props) {
  const [value, setValue] = useState("");
  const changeValue = (value) => {
    setValue(value);
  };
  let element = (
    <Grid container>
      <Grid item xs={2} marginLeft={10}>
        <Selector
          onChange={changeValue}
          label="testSelect"
          list={["one", "two", "three"]}
          value={value}
        />
      </Grid>
      <Grid item xs={2} marginLeft={-10}></Grid>
    </Grid>
  );
  return element;
}
