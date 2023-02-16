import { red } from "@mui/material/colors";
import { useState } from "react";
import TableContainers from "../component/tableContainer/TableContainers";

export default function TableContainerDemoComponent() {
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
    const [data, setData] = useState(originData);

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

    const [selectedIndex, setSelectedIndex] = useState();

    let sx = {
        width: '30%'
    }
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const clickEven = (row, rowIndex) => {
        setSelectedIndex(rowIndex);

    };
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let selectedSx = {
        color: red[600]
    }

    let element = (
        <TableContainers
            data={data}
            columns={columns}
            sx={sx}
            selected
            onClick={clickEven}
            selectedIndex={selectedIndex}
            selectedSx={selectedSx}
        />
    );
    return element;
    //-------------------------------------------------Render
}