import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import { grey, red } from "@mui/material/colors";

export default function DataTable(props) {
    //Data---------------------------------------------------
    const data = props.data?props.data:[];
    const columns = props.columns?props.columns:[];
    const tableStyle = props.tableStyle ? props.tableStyle : {
        width: '400px',
        backgroundColor: grey[300],
        color: grey[600]
    };
    const selected = props.selected;//flag to open select hightlight
    const onClick = props.onClick;
    const selectIndex = props.selectIndex;
    const selectStyle = props.selectStyle ? props.selectStyle : {
        backgroundColor: grey[600],
        color: red['A100']
    };
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const clickEven = (rowIndex, row) => {
        onClick(rowIndex, row);
    }
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    const rowElement = data.map((row, rowIndex) => {
        let style = {};
        if (selected) {
            if (selectIndex === rowIndex) {
                style = {
                    tableStyle,
                    ...selectStyle
                }
            }
            else {
                style = {
                    tableStyle
                }
            }
        }
        let key = `row-${rowIndex}`;
        let rowElement = columns.map((column, columnIndex) => {
            let key = `row-${rowIndex}-column-${columnIndex}`;
            let value = row[column.field];
            return (
                <TableCell
                    key={key}
                    sx={style}
                >
                    {value}
                </TableCell>
            )
        });
        return (
            <TableRow
                key={key}
                onClick={clickEven.bind(this, rowIndex, row)}
            >
                {rowElement}
            </TableRow>
        );

    });

    const columnElement = () => {
        let columnsElement = columns.map((column, index) => {
            let key = `column-${index}`;
            let value = column.text;
            return (
                <TableCell
                    key={key}
                >
                    {value}
                </TableCell>
            );
        });
        return (
            <TableRow>
                {columnsElement}
            </TableRow>
        )
    }

    let element = (
        <TableContainer component={Box}>
            <Table
                sx={tableStyle}
            >
                <TableHead>
                    {columnElement()}
                </TableHead>
                <TableBody>
                    {rowElement}
                </TableBody>
            </Table>
        </TableContainer>    
    );
    return element;
    //-------------------------------------------------Render
}
