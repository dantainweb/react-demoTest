import { Checkbox } from "@mui/material";
import { BaseCell } from "../BaseCell";

export function CheckBox(props) {
  const title = props.label;

  let element = (
    <BaseCell Title={title}>
      <Checkbox></Checkbox>
    </BaseCell>
  );

  return element;
}
