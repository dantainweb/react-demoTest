import {
    TableContainer,
    Box,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow
} from "@mui/material";
import { grey } from "@mui/material/colors";

export default function DataTable(props) {
    //Data---------------------------------------------------
    const columns = props.columns;
    const data = props.data;
    const sx = props.sx;
    const selected = props.selected;// 點擊時是否變色
    const selectIndex = props.selectIndex;
    const selectSx = props.selectSx;
    const onClick = props.onClick;

    //default style setting
    const cellStyle = {
        backgroundColor: grey[500],
        color: grey[300]
    }
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const clickEven = (row, rowIndex) => {
        if (selected) {
            onClick(row, rowIndex);
        }
    }
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    const headElement = () => {
        let cells = columns.map((column, index) => {
            let key = `column-${index}`;
            let value = column.name;
            return (
                <TableCell
                    key={key}
                >
                    {value}
                </TableCell>
            );
        });
        let element = (
            <TableRow>
                {cells}
            </TableRow>
        );
        return element;
    };

    const bodyElement = data.map((row, rowIndex) => {
        let style = cellStyle;
        if (selected) {
            if (selectIndex === rowIndex) {
                style = {
                    cellStyle,
                    ...selectSx
                }
            }
        }
        let rowKey = `item-${rowIndex}`;
        let cells = columns.map((column, colIndex) => {
            let cellKey = `item-${rowIndex}-column-${colIndex}`;
            let value = row[column.field];
            return (
                <TableCell
                    key={cellKey}
                    sx={style}
                >
                    {value}
                </TableCell >
            );
        });
        return (
            <TableRow
                key={rowKey}
                onClick={clickEven.bind(this, row, rowIndex)}
            >
                {cells}
            </TableRow>
        );
    });

    let element = (
        <TableContainer component={Box}>
            <Table sx={sx}>
                <TableHead>
                    {headElement()}
                </TableHead>
                <TableBody>
                    {bodyElement}
                </TableBody>
            </Table>
        </TableContainer>
    );
    return element;
    //-------------------------------------------------Render
}