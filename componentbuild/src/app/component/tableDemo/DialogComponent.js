import { DialogContent, DialogTitle, DialogContentText, Dialog, TextField, Button } from "@mui/material";

export default function DialogComponent(props) {
    //Data---------------------------------------------------
    const open = props.open;
    const label = props.label;
    const data = props.data;
    const onChange = props.onChange;
    const onCancel = props.onCancel;
    const onEdit = props.onEdit;
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const changeEven = (e) => {
        let type = e.target.value;
        onChange(type);
    }
    const cancelEven = () => {
        onCancel();
    }

    const editEven = () => {
        onEdit();
    }
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let element = (
        <Dialog
            open={open}
        >
            <DialogTitle>
                {label}
            </DialogTitle>
            <DialogContent>
                <span>
                    desc: <TextField
                        defaultValue={data.desc}
                        size="small"
                        onChange={changeEven.bind(this)}
                    />
                </span>
                <div>
                    <Button
                        onClick={cancelEven}
                    >
                        cancel</Button>
                    <Button
                        onClick={editEven}
                    >
                        edit
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
    return element;
    //-------------------------------------------------Render
}