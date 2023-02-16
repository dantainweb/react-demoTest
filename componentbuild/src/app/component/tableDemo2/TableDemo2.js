import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import DataTable2 from "./DataTable2";
import DialogComponent2 from "./DialogComponent2";

export default function TableDemo2() {
    //Data---------------------------------------------------
    const [data, setData] = useState([{
        id: 1,
        type: 'A',
        desc: 'apple'
    }, {
        id: 2,
        type: 'B',
        desc: 'bed'
    }, {
        id: 3,
        type: 'C',
        desc: 'cat'
    }, {
        id: 4,
        type: 'B',
        desc: 'beg'
    }]);
    const columns = [{
        name: '#',
        field: 'id',
        disabled: true,
        hidden: false
    }, {
        name: 'type',
        field: 'type',
        disabled: true,
        hidden: false
    }, {
        name: 'desc',
        field: 'desc',
        disabled: false,
        hidden: true
    }, {
        name: 'hide',
        field: 'hide',
        disabled: false,
        hidden: true
    }];

    const tableSx = {
        width: 400
    };
    const selectSx = {
        color: red['A100']
    }
    const textFieldSx = {
        width: 100,
        marginTop: 0.5,
        marginLeft: 1.5
    }

    const [selectIndex, setSelectIndex] = useState();
    const [editData, setEditData] = useState({});
    const [open, setOpen] = useState(false);
    //---------------------------------------------------Data
    //Process------------------------------------------------
    const openDialog = () => {
        setOpen(true);
    }
    const closeDialog = () => {
        setOpen(false);
    }
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const clickEven = (row, rowIndex) => {
        setSelectIndex(rowIndex);
        setEditData(row);
        openDialog();
    };
    const changeEven = (field, value) => {
        let updateData = Object.assign({}, editData);
        updateData[field] = value
        setEditData(updateData);
    };

    const editEven = () => {
        let tempData = data;
        tempData[selectIndex] = editData;
        setData(tempData);
        closeDialog();
    };

    const cancelEven = () => {
        closeDialog();
    };
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let element = (
        <Box>
            <DataTable2
                data={data}
                columns={columns}
                selected
                selectIndex={selectIndex}
                tableSx={tableSx}
                selectSx={selectSx}
                onClick={clickEven}
            />
            <DialogComponent2
                editData={editData}
                open={open}
                sx={textFieldSx}
                title="Modified Data"
                onChange={changeEven}
                onEdit={editEven}
                onCancel={cancelEven}
                columns={columns}
            />
        </Box>
    );
    return element;
    //-------------------------------------------------Render
}