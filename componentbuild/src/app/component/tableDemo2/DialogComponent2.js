import { Box, Button, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";

export default function DialogComponent2(props) {
    //Data---------------------------------------------------
    const title = props.title;
    const editData = props.editData;
    const open = props.open;
    const TextFieldSx = props.sx;
    const onChange = props.onChange;
    const onEdit = props.onEdit;
    const onCancel = props.onCancel;
    const columns = props.columns;
    //---------------------------------------------------Data
    //Process------------------------------------------------
    const setColumnDisabled = (field) => {
        let result = columns.filter(column => {
            return field === column.field;
        });
        if (result.length > 0) {
            return result[0].disabled;
        }
        else {
            return false;
        }
    };

    //------------------------------------------------Process
    //Event--------------------------------------------------
    const changeEven = (field, e) => {
        let value = e.target.value;
        onChange(field, value);
    };
    const editEven = () => {
        onEdit();
    };
    const cancelEven = () => {
        onCancel();
    };
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    const buildContent = () => {
        let contentElement = Object.keys(editData).map((field, index) => {
            let key = `row-${index}`;
            let element = (
                <span
                    key={key}
                >
                    <TextField
                        label={field}
                        defaultValue={editData[field]}
                        sx={TextFieldSx}
                        size="small"
                        onChange={changeEven.bind(this, field)}
                        disabled={setColumnDisabled(field)}
                    />
                </span>
            );
            return element;
        });
        return contentElement;
    };

    let element = (
        <Dialog
            open={open}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {buildContent()}
            </DialogContent>
            <Box
                sx={{ '& button': { m: 1 } }}
            >
                <Button
                    onClick={editEven}
                >
                    edit
                </Button>
                <Button
                    onClick={cancelEven}
                >
                    cancel
                </Button>
            </Box>
        </Dialog>
    );
    return element;
    //-------------------------------------------------Render
}