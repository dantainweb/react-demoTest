import { Box } from "@mui/material";
import DataTable from "./DataTable";
import DialogComponent from "./DialogComponent";

export default function TableDialog(props) {
    //Data---------------------------------------------------
    const data = props.data?props.data: [];
    const open = props.open?props.open: false;
    const columns = props.columns?props.columns: [];
    const onClick = props.onClick;
    const title = props.title;
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const clickEven = (rowIndex, row) => {
        onClick(rowIndex, row);
    };
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let element = (
        <Box>
            <DataTable
                data={data}
                columns={columns}
                onClick={clickEven}
            />
            <DialogComponent
                open={open}
                title={title}
            >
                test
            </DialogComponent>
        </Box>
    );
    return element;
    //-------------------------------------------------Render
}