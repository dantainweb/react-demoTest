import {
    ExpandLess,
    ExpandMore
} from "@mui/icons-material";
import {
    Box,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";

export default function NestList(props) {
    //Data---------------------------------------------------
    const data = props.data;
    const openStatus = props.openStatus;
    const onClick = props.onClick;
    const onShow = props.onShow;
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const collapseEven = (openIndex) => {
        onClick(openIndex);
    };
    const showEven = (url) => {
        onShow(url);
    };
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    const childHasElement = (list, listIndex, openSta) => {
        let text = list.text;
        let icon = list.icon;
        let value = list.child.map((item, itemIndex) => {
            let key = `item-${itemIndex}`;
            let childIcon = item.icon;
            let childText = item.text;
            let childUrl = item.url;
            return (
                <ListItemButton
                    key={key}
                    sx={{ pl: 4 }}
                    onClick={showEven.bind(this, childUrl)}
                >
                    <ListItemIcon>
                        {childIcon}
                    </ListItemIcon>
                    <ListItemText primary={childText} />
                </ListItemButton>
            );
        });
        return (
            <Box>
                <ListItemButton onClick={collapseEven.bind(this, listIndex)}>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={text}
                    />
                    {openSta ? <ExpandMore /> : <ExpandLess />}
                </ListItemButton>
                <Collapse in={openSta} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {value}
                    </List>
                </Collapse>
            </Box>
        );
    };

    const nestListElement = () => {
        return data.map((list, listIndex) => {
            let key = `list-${listIndex}`;
            let text = list.text;
            let icon = list.icon;
            let isChild = list.child;
            let url = list.url;
            let openSta = openStatus[listIndex];
            let ListItemButtonElement = (
                <ListItemButton
                    onClick={showEven.bind(this, url)}
                >
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={text}
                    />
                </ListItemButton>
            );

            if (isChild) {
                let childElement = childHasElement(list, listIndex, openSta);
                return (
                    <Box
                        key={key}
                    >
                        {childElement}
                    </Box>
                );
            }
            else {
                return (
                    <Box
                        key={key}
                    >
                        {ListItemButtonElement}
                    </Box>
                );
            }
        });


    };

    let element = (
        <Box>
            <List>
                {nestListElement()}
            </List>
        </Box>
    );
    return element;
    //-------------------------------------------------Render
}