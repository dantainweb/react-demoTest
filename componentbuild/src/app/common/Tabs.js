import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material';

export default function Tabs(props) {
    //Data---------------------------------------------------
    const value = props.value;
    const data = props.data;
    const changeValue = props.changeValue;
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const changeEven = (e, tabName) => {
        changeValue(tabName);
    }
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    const tabElement = data.map((tab, index) => {
        let key = `tab-${index}`;
        let value = tab.value;
        let label = tab.label;
        return (
            <Tab
                key={key}
                label={label}
                value={value}
            />
        );

    });

    const panelElement = data.map((panel, index) => {
        let key = `panel-${index}`;
        let value = panel.value;
        let component = panel.component;
        return (
            <TabPanel
                key={key}
                value={value}
            >
                {component}
            </TabPanel>
        );
    });

    let element = (
        <TabContext value={value}>
            <Box>
                <TabList onChange={changeEven}>
                    {tabElement}
                </TabList>
            </Box>
            { panelElement}
        </TabContext>
    );
    return element;
    //-------------------------------------------------Render
}