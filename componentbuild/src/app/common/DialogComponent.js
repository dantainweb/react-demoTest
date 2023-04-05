import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export default function DialogComponent(props) {
    //Data---------------------------------------------------
    const open = props.open;
    const title = props.title;
    const children = props.children;
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let element = (
        <Dialog
            open={open}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
        );
    return element;
    //-------------------------------------------------Render
}