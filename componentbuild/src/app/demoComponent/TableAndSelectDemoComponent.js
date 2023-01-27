import { Box } from "@mui/material";
import { useState } from "react";
import { Selector } from "../component/selector/Selector";
import TableContainers from "../component/tableContainer/TableContainers";

export default function TableAndSelectDemoComponent() {
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
            text: '#',
            value: 'id'
        }, {
            text: 'type',
            value: 'type'
        }, {
            text: 'desc',
            value: 'desc'
        }
    ];

    const [value, setValue] = useState('all');
    const [data, setData] = useState(originData);

    const list = ['all', 'A', 'B', 'C'];
    const title = 'select';
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //filter selector's choice
    const filterData = (value) => {
        if (value == '') {
            return originData;
        }
        else {
            return originData.filter((item) => {
                let row = item
                if (row.type == value) {
                    return true;
                }
                return false;
            });
        }
    }
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const selectorChange = (e) => {
        let value = e.target.value;
        if (value == 'all') { value = '' }
        let newData = filterData(value, originData);
        setData(newData);
        setValue(value);
    };
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let element = (<>
        <Box>
            <Selector
                list={list}
                value={value}
                label={title}
                onChange={selectorChange}
            />
        </Box>
        <Box>
            <TableContainers
                data={data}
                columns={columns}
            />
        </Box>
    </>);
    return element;
    //-------------------------------------------------Render
}