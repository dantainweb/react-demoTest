import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export default function TableContainers(props) {
    //Data---------------------------------------------------
    const data = props.data;
    const columns = props.columns;
    const sx = (props.sx !== undefined) ? props.sx : { width: '50%' };
    //---------------------------------------------------Data
    //Process------------------------------------------------
    /**
     * 
     * @param {object} row 
     * @returns 
     */
    const buildBodyRow = (row) => {
        // 比對columns
        let bodyRowElement = columns.map((item, index) => {
            let dataId = item.value;
            let key = `row-ele-${index}`;
            let cellElement = () => {
                switch (dataId) {
                    case 'id':
                        return row.id;
                    case 'type':
                        return row.type;
                    case 'desc':
                        return row.desc;
                }
            }
            return (
                <TableCell
                    key={key}
                >
                    {cellElement()}
                </TableCell>

            )
        });
        return bodyRowElement;
    }
    //------------------------------------------------Process
    //Event--------------------------------------------------
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    const tableHeadCell = columns.map((column, index) => {
        let key = `table-headcell-${index}`;
        let element = (
            <TableCell
                key={key}
            >
                {column.text}
            </TableCell>
        );
        return element;
    });

    const tableBodyCell = data.map((value, index) => {
        let row = value;
        let key = `tableRow-${index}`;
        let element = buildBodyRow(row);
        return (
            <TableRow
                key={key}
            >
                {element}
            </TableRow>
        )
    });

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
                    {tableBodyCell}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
    return element;
    //-------------------------------------------------Render
}