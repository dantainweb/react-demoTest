import { MenuItem, Select } from "@mui/material";
import { BaseCell } from "../BaseCell";

export function Selector(props) {
  //Data============================================
  let selectList = props.selectList;
  let selectTitle = props.selectTitle;
  let disable = props.disable;
  let errorFlag = props.errorFlag;
  //============================================Data
  //Process=========================================
  /**
   *
   * @param {array} list
   */
  const readSelectList = (list) => {
    return list.map((value, index) => {
      let uniquekey = `select-${index}-list`;
      let option = (
        <MenuItem value={value} key={uniquekey}>
          {value}
        </MenuItem>
      );
      return option;
    });
  };
  //=========================================Process
  //Event===========================================
  //===========================================Event

  let element = (
    <BaseCell selectTitle={selectTitle}>
      <Select disabled={disable} error={errorFlag}>
        {readSelectList(selectList)}
      </Select>
    </BaseCell>
  );
  return element;
}
