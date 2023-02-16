import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function DataTable2(props) {
    //Data---------------------------------------------------
    const tableSx = props.tableSx;
    const selectSx = props.selectSx;
    const selectIndex = props.selectIndex;
    const data = props.data;
    const columns = props.columns;
    const selected = props.selected;
    const onClick = props.onClick;
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
    const buildCells = (row, rowIndex) => {
        let style = {};
        if (selected) {
            if (selectIndex === rowIndex) {
                style = {
                    backgroundColor: grey[600],
                    color: grey[300],
                    ...selectSx
                }
            }
        }

        return columns.map((cell, cellIndex) => {
            let cellKey = `cell-${cellIndex}`;
            let value = row[cell.field];
            return (
                <TableCell
                    key={cellKey}
                    onClick={clickEven.bind(this, row, rowIndex)}
                    sx={style}
                >
                    {value}
                </TableCell>
            );
        });

    };

    const cellElement = data.map((row, rowIndex) => {
        let rowKey = `row-${rowIndex}`;
        let cellElement = buildCells(row, rowIndex);
        return (
            <TableRow
                key={rowKey}
            >
                {cellElement}
            </TableRow>
        );
    });

    const columnElement = columns.map((column, index) => {
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
        <TableContainer component={Box}>
            <Table
                sx={tableSx}
            >
                <TableHead>
                    <TableRow>
                        {columnElement}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cellElement}
                </TableBody>
            </Table>

        </TableContainer>
    );
    return element;
    //-------------------------------------------------Render
}