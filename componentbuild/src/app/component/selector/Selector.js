import { MenuItem, Select } from "@mui/material";
import { BaseCell } from "../BaseCell";

export function Selector(props) {
  //Data-----------------------------
  const list = props.list;
  const value = props.value;
  const title = props.label;
  const disable = props.disable;
  const errorFlag = props.errorFlag;
  const onChange = props.onChange;
  //-----------------------------Data
  //Process-----------------------------

  //-----------------------------Process
  //Event-----------------------------
  const chagneEvent = (e) => {
    let value = e.target.value;
    onChange(value);
  };
  //-----------------------------Event
  //Render----------------------------
  /**
   *
   * @param {array} list
   */
  const ListElement = list.map((item, index) => {
    let key = `select-${index}-list`;
    let text = item;
    let value = item;
    let element = (
      <MenuItem value={value} key={key}>
        {text}
      </MenuItem>
    );
    return element;
  });

  let element = (
    <BaseCell selectTitle={title}>
      <Select
        disabled={disable}
        error={errorFlag}
        value={value}
        onChange={chagneEvent}
      >
        {ListElement}
      </Select>
    </BaseCell>
  );
  return element;
  //----------------------------Render
}
