import { Box } from "@mui/material";

export function BaseCell(props) {
  //Data======================================
  let title = props.selectTitle;
  let child = props.children;

  //======================================Data

  let element = (
    <Box>
      <Box>{title}</Box>
      <Box>{child}</Box>
    </Box>
  );

  return element;
}
