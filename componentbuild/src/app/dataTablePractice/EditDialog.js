import {
    Button,
    TextField
} from "@mui/material";
import DialogComp from "./DialogComp";

export default function EditDialog(props) {
    //Data---------------------------------------------------
    const open = props.open;
    const title = (props.title) ? props.title : 'Modified Data';
    const editData = props.editData;
    const onChange = props.onChange;
    const onEdit = props.onEdit;
    const onCancel = props.onCancel;
    const columns = props.columns; //判斷是否disabled textField
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const changeEvent = (field, e) => {
        let value = e.target.value;
        onChange(field, value);
    };
    const editEven = () => {
        onEdit();
    };
    const cancelEven = () => {
        onCancel();
    };
    const isDisabled = (field) => {
        let result = columns.filter(column => {
            return column.field === field;
        });
        if (result.length > 0) {
            return result[0].disabled;
        }
        else {
            return false;
        }
    };
    //--------------------------------------------------Event
    //Render-------------------------------------------------

    const rowElement = () => {
        let element = Object.keys(editData).map((field, index) => {
            let key = `field-${index}`;
            let value = editData[field];
            return (
                <TextField
                    key={key}
                    label={field}
                    defaultValue={value}
                    onChange={changeEvent.bind(this, field)}
                    sx={{
                        margin: 1,
                        width: 100
                    }}
                    disabled={isDisabled(field)}
                />
            );
        });
        return element;
    }

    const buttonElement = () => {
        return (
            <div>
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
            </div>
        );
    }

    const editElement = () => {
        return (
            <span>
                {rowElement()}
                {buttonElement()}
            </span>
        );
    }

    let element = (
        <DialogComp
            title={title}
            open={open}
        >
            {editElement()}
        </DialogComp>
    );
    return element;
    //-------------------------------------------------Render
}