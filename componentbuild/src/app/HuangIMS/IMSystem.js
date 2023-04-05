import { Grid } from "@mui/material";
import { useState } from "react";
import DataTable from "../common/DataTable";
import TableDialog from "../common/TableDialog";
import Tabs from "../common/Tabs";
import { USER, USERCOLUMN } from "./UserDataClass";

export default function IMSystem() {
    //Data---------------------------------------------------
    const [tabName, setTabName] = useState('user');
    const [userSelectIndex, setUserSelectIndex] = useState(1);
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const changeValueEven = (tabName) => {
        setTabName(tabName);
    };
    const changeUserEven = (rowIndex, row) => {
        setUserSelectIndex(rowIndex);
    };
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let userDataTable = (
        <DataTable
            data={USER}
            columns={USERCOLUMN}
            onClick={changeUserEven}
            selectIndex={userSelectIndex}
            selected
        />
    );

    let typeDataTable = (
        <TableDialog

        />
    );

    let productDataTable = (
        <DataTable 
            
        />
    );

    const tabsData = [
        {
        value: 'user',
        label: 'USER',
        component: userDataTable
    }, {
        value: 'type',
        label: 'TYPE',
        component: typeDataTable
        }, {
        value: 'product',
        label: 'PRODUCT',
        component: productDataTable
        }
    ];

    let tabsElement = (
        <Tabs
            value={tabName}
            data={tabsData}
            changeValue={changeValueEven}
        />
    );

    let element = (
        <Grid container>
            <Grid>
                {tabsElement}
            </Grid>
        </Grid>
    );
    return element;
    //-------------------------------------------------Render
}