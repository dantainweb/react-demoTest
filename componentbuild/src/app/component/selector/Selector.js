import { MenuItem, Select } from "@mui/material";
import { BaseCell } from "../BaseCell";

/**
 * list: option list.  
 * value: 初始值.  
 * title: selector's title.  
 * disable: control disable this element.  
 * errorFlag: control show the error on this element.  
 * onChange: control onChange event.  
 *   
 * @param {Object} props 
 * @returns 
 */
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
    <BaseCell Title={title}>
      <Select
        disabled={disable}
        error={errorFlag}
        value={value}
        onChange={onChange.bind(this)}
      >
        {ListElement}
      </Select>
    </BaseCell>
  );
  return element;
  //----------------------------Render
}
