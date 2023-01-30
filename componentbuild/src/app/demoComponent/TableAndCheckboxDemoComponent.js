import { Box } from '@mui/material';
import { useState } from 'react';
import { CheckBox } from '../component/checkBox/CheckBox';
import TableContainers from '../component/tableContainer/TableContainers';
/**
 * TableAndCheckboxDemoComponent
 * 
 * @param {Object} props 
 * @returns 
 */
export default function TableAndCheckboxDemoComponent() {
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
    const label = 'checkAndTable';
    const checkboxList = ['A', 'B'];
    const [typeState, setTypeState] = useState([true, true]);
    const [data, setData] = useState(originData);
    const [checkboxDisable, setCheckboxDisable] = useState([true, true]);
    //---------------------------------------------------Data
    //Process------------------------------------------------
    /**
     * 
     * @param {boolean[]} typeState 
     */
    const filterData = (typeState) => {
        let showType = [];
        typeState.forEach((item, index) => {
            if (item) {
                showType.push(checkboxList[index]);
            }
        });
        return originData.filter((item) => {
            if (showType.includes(item.type)) {
                return true;
            } else {
                return false;
            }
        });
    };
    //------------------------------------------------Process
    //Event--------------------------------------------------
    let clickEvent = (index) => {
        let mockState = typeState;
        mockState[index] = !mockState[index];
        setTypeState(mockState);
        setData(filterData(mockState));
    }
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let element = (
        <Box>
            <CheckBox
                label={label}
                onClick={clickEvent}
                list={checkboxList}
                checked={typeState}
                disable={checkboxDisable}
            />
            <TableContainers
                data={data}
                columns={columns}
            />
        </Box>
    );
    return element;
    //-------------------------------------------------Render
}