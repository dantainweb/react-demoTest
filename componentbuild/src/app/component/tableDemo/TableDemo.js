import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import DataTable from "./DataTable";
import DialogComponent from "./DialogComponent";

export default function TableDemo(props) {
    //Data---------------------------------------------------
    let originData = [{
        id: 1,
        type: 'A',
        desc: 'Apple'
    }, {
        id: 2,
        type: 'B',
        desc: 'Bed'
    }, {
        id: 3,
        type: 'A',
        desc: 'Add'
    }, {
        id: 4,
        type: 'A',
        desc: 'Age'
    }, {
        id: 5,
        type: 'B',
        desc: 'Bear'
    }];
    let columns = [
        {
            name: '#',
            field: 'id'
        }, {
            name: 'type',
            field: 'type'
        }, {
            name: 'desc',
            field: 'desc'
        }
    ];
    const tableSx = {
        width: 200
    }
    const [data, setData] = useState(originData);
    const [selectIndex, setSelectIndex] = useState();
    const [open, setOpen] = useState(false);
    const [rowData, setRowData] = useState({});
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const closeDialog = () => {
        setOpen(false);
    };
    const openDialog = () => {
        setOpen(true);
    };

    const clickEven = (row, rowIndex) => {
        openDialog();
        setRowData(row);
        setSelectIndex(rowIndex);
    };

    const changeEven = (desc) => {
        let tempRowData = Object.assign({}, rowData);
        tempRowData.desc = desc;
        setRowData(tempRowData);
    };

    const editEven = () => {
        let tempData = data;
        tempData[selectIndex] = rowData;
        setData(tempData);
        closeDialog();
    }

    const cancelEven = () => {
        closeDialog();
    }
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    const selectedSx = {
        color: red['A100']
    };

    let element = (
        <Box>
            <DataTable
                data={data}
                columns={columns}
                tableSx={tableSx}
                onClick={clickEven}
                selected
                selectIndex={selectIndex}
                selectedSx={selectedSx}
            />
            <DialogComponent
                open={open}
                label='modified'
                data={rowData}
                onChange={changeEven}
                onEdit={editEven}
                onCancel={cancelEven}
            />
        </Box>
    );
    return element;
    //-------------------------------------------------Render
}