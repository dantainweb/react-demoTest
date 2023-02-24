import { Button, Checkbox } from "@mui/material";
import CheckBox from "./CheckBox";
import DialogComp from "./DialogComp";

export default function HiddenDialog(props) {
    //Data---------------------------------------------------
    const columns = props.columns;
    const open = props.open;
    const onSubmit = props.onSubmit;
    const hidden = props.hidden;
    const onCheck = props.onCheck;
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const clickEven = () => {
        onSubmit();
    };
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    const checkboxElement = () => {
        return columns.map((column, index) => {
            let key = `checkCol-${index}`;
            let element = (
                <span
                    key={key}
                >
                    < CheckBox
                        title={column.name}
                        direct="right"
                    />
                </span>
            );
            return element;
        });
    };
    let element = (
        <DialogComp
            title="Hidden column"
            open={open}
        >
            <CheckBox
                title="All"
                direct="left"
            />
            {checkboxElement()}
            <div>
                <Button
                    onClick={clickEven}
                >
                    submit
                </Button>
            </div>
        </DialogComp>
    );
    return element;
    //-------------------------------------------------Render
}