import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { grey } from "@mui/material/colors";

/**
 * data: row data.  
 * columns: data header.  
 *   
 * @param {Object} props 
 * @returns 
 */
export default function TableContainers(props) {
    //Data---------------------------------------------------
    const data = props.data;
    const columns = props.columns;
    const sx = (props.sx !== undefined) ? props.sx : { width: '50%' };
    const onClick = props.onClick;
    const selected = props.selected;
    const selectedIndex = props.selectedIndex;
    const selectedSx = props.selectedSx;
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
    /**
     * 
     * @param {object} row 
     * @returns 
     */
    const buildCells = (row, rowIndex) => {
        let style = {};
        if (selected) {
            if (selectedIndex === rowIndex) {
                style = {
                    backgroundColor: grey[400],
                    color: grey['A100'],
                    ...selectedSx
                }
            }
        }
        // 比對columns
        let bodyRowElement = columns.map((cell, cellIndex) => {
            let key = `row-${rowIndex}-cell-${cellIndex}`;
            let value = row[cell.field];
            let element = (
                <TableCell
                    key={key}
                    sx={style}
                >
                    {value}
                </TableCell>
            );
            return element;
        });
        return bodyRowElement;
    }

    const tableHeadCell = columns.map((column, index) => {
        let key = `table-headcell-${index}`;
        let element = (
            <TableCell
                key={key}
            >
                {column.name}
            </TableCell>
        );
        return element;
    });

    const buildRows = () => {
        let element = [];
        data.forEach((row, rowIndex) => {
            let key = `row-${rowIndex}`;
            let cells = buildCells(row, rowIndex);
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

    let element = (<>
        <TableContainer
            component={Paper}
            sx={sx}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        {tableHeadCell}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {buildRows()}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
    return element;
    //-------------------------------------------------Render
}