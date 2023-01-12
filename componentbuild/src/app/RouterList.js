import { Grid } from "@mui/material";
import { BaseCell } from "./component/BaseCell";
import { Selector } from "./component/selector/Selector";

export function RouterList(props) {
  let selectHandle = {
    selectTitle: "testSelect",
    selectList: ["one", "two", "three"],
    disable: false,
    errorFlag: false,
  };

  let element = (
    <Grid container>
      <Grid item xs={2} marginLeft={10}>
        <Selector {...selectHandle} />
      </Grid>
      <Grid item xs={2} marginLeft={-10}>
        <Selector {...selectHandle} />
      </Grid>
    </Grid>
  );
  return element;
}
