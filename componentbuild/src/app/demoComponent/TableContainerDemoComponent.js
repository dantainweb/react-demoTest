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
            text: 'type',
            value: 'type'
        }, {
            text: 'desc',
            value: 'desc'
        }, {
            text: '#',
            value: 'id'
        }
    ];

    let sx = {
        width: '30%'
    }
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let element = (<>
        <TableContainers
            data={data}
            columns={columns}
            sx={sx}
        />
    </>);
    return element;
    //-------------------------------------------------Render
}