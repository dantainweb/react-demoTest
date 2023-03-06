import { Box, Button } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import DataTable from "./DataTable";
import EditDialog from "./EditDialog";
import HiddenDialog from "./HiddenDialog";

export default function Practice() {
    //Data---------------------------------------------------
    const [data, setData] = useState([
        { id: 1, type: 'A', desc: 'abc' },
        { id: 2, type: 'B', desc: 'beg' },
        { id: 3, type: 'C', desc: 'cat' },
        { id: 4, type: 'A', desc: 'apple' },
        { id: 5, type: 'B', desc: 'banana' },
        { id: 6, type: 'C', desc: 'controller' },
    ]);
    const columns = [
        { name: '#', field: 'id', disabled: true },
        { name: 'type', field: 'type', disabled: false },
        { name: 'desc', field: 'desc', disabled: false },
    ]
    const tableSx = {
        width: 400
    }
    const selectSx = {
        color: red['A100']
    }

    const [selectIndex, setSelectIndex] = useState();
    const [open, setOpen] = useState(false);
    const [oHidden, setOHidden] = useState(false);
    const [editData, setEditData] = useState({});
    const [hidden, setHidden] = useState([false, false, false, false]);
    //---------------------------------------------------Data
    //Process------------------------------------------------
    const closeDialog = () => {
        setOpen(false);
    };
    const openDialog = () => {
        setOpen(true);
    };
    const openHiddenDialog = () => {
        setOHidden(true);
    };
    const closeHiddenDialog = () => {
        setOHidden(false);
    }
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const clickEven = (row, rowIndex) => {
        setSelectIndex(rowIndex);
        setEditData(row);
        openDialog();
    }
    const changeEven = (field, value) => {
        let updateData = Object.assign({}, editData);
        updateData[field] = value;
        setEditData(updateData);
    }
    const editEven = () => {
        let tempData = data;
        tempData[selectIndex] = editData;
        setData(tempData);
        closeDialog();
    }
    const cancelEven = () => {
        closeDialog()
    }
    const hiddenEven = () => {
        openHiddenDialog();
    };
    const submitEven = () => {
        closeHiddenDialog();
    };
    const checkEven = () => {
        setHidden();
    };
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let element = (
        <Box>
            <Button
                onClick={hiddenEven}
            >
                Hidden column
            </Button>
            <DataTable
                data={data}
                columns={columns}
                sx={tableSx}
                selected
                selectIndex={selectIndex}
                selectSx={selectSx}
                onClick={clickEven}
                hidden={hidden}
            />
            <EditDialog
                open={open}
                editData={editData}
                columns={columns}
                onClick={clickEven}
                onChange={changeEven}
                onEdit={editEven}
                onCancel={cancelEven}
                hidden={hidden}
            />
            <HiddenDialog
                open={oHidden}
                columns={columns}
                onSubmit={submitEven}
                hidden={hidden}
                onCheck={checkEven}
            />
        </Box>
    );
    return element;
    //-------------------------------------------------Render
}