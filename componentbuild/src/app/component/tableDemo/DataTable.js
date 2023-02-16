import {
    TableContainer,
    Box,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from "@mui/material";
import { grey, red } from "@mui/material/colors";

export default function DataTable(props) {
    //Data---------------------------------------------------
    const data = props.data;
    const columns = props.columns;
    const tableSx = props.tableSx;
    const selectedSx = props.selectedSx;
    const onClick = props.onClick;
    const selected = props.selected;
    const selectIndex = props.selectIndex;
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const clickEven = (row, rowIndex) => {
        if (selected) {
            onClick(row, rowIndex);
        }
    };
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    const buildRow = (row, rowIndex) => {
        let style = {};
        if (selected) {
            if (selectIndex === rowIndex) {
                style = {
                    backgroundColor: grey[600],
                    color: grey[200],
                    ...selectedSx
                };
            }
        }
        return columns.map((cell, cellIndex) => {
            let key = `row-${rowIndex}-cell-${cellIndex}`;
            let value = row[cell.field];
            let element = (
                <TableCell
                    key={key}
                    sx={style}
                >
                    {value}
                </TableCell>
            )
            return element;
        });
    };

    const buildRows = () => {
        let element = [];
        data.forEach((row, rowIndex) => {
            let cells = buildRow(row, rowIndex);
            let key = `row-${rowIndex}`;
            let rowElement = (
                <TableRow
                    key={key}
                    onClick={clickEven.bind(this, row, rowIndex)}
                >
                    {cells}
                </TableRow>
            );
            element.push(rowElement);
        });
        return element;
    };

    const buildColumns = () => {
        return columns.map((column, index) => {
            let key = `column-${index}`;
            let value = column.name;
            let element = (
                <TableCell
                    key={key}
                >
                    {value}
                </TableCell>
            );
            return element;
        });
    };

    let element = (
        <TableContainer component={Box}>
            <Table sx={tableSx}>
                <TableHead>
                    <TableRow>
                        {buildColumns()}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {buildRows()}
                </TableBody>
            </Table>
        </TableContainer>
    );
    return element;
    //-------------------------------------------------Render
}