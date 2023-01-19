import { Checkbox } from "@mui/material";
import { BaseCell } from "../BaseCell";

export function CheckBox(props) {
  const title = props.label;
  const check = props.checked;
  const onClick = props.onClick;

  let element = (
    <BaseCell Title={title}>
      <Checkbox
        checked={check}
        onClick={onClick.bind(this)}
      />
    </BaseCell>
  );

  return element;
}
