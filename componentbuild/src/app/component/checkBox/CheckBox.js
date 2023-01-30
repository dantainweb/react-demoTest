import { Checkbox } from "@mui/material";
import { BaseCell } from "../BaseCell";

/**
 * {String} label : checkbox-group title   
 * {Array} list : checkbox list  
 * {Array[boolean]} checked : every checkbox state  
 * onClick : event
 * 
 * @param {Object} props 
 * @returns 
 */
export function CheckBox(props) {
  //Data----------------------------------------------
  const title = props.label;
  const list = props.list;
  const checkList = props.checked;
  const onClick = props.onClick;
  const disableList = props.disable;
  //----------------------------------------------Data
  //Event---------------------------------------------
  //---------------------------------------------Event
  //Render--------------------------------------------
  //checked state by checkList
  let checkboxElement = () => {
    return checkList.map((item, index) => {
      let key = `checkbox-${index}-key`;
      return (
        <span
          key={key}
        >
          {list[index]}
          <Checkbox
            checked={item}
            disabled={disableList[index]}
            onClick={onClick.bind(this, index)}
          />
        </span>
      );
    });
  }; 

  let element = (
    <BaseCell Title={title}>
      {checkboxElement()}
    </BaseCell>
  );

  return element;
  //--------------------------------------------Render
}
