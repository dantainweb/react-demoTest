import { Box, Checkbox } from "@mui/material";

export default function DirectTitle(props) {
    //Data---------------------------------------------------
    const child = props.children;
    const title = props.title;
    const direct = props.direct;
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    const directTitleElement = () => {
        switch (direct) {
            case 'right':
                return (
                    <Box>
                        {child}{title}
                    </Box>
                );
            case 'left':
                return (
                    <Box>
                        {title}{child}
                    </Box>
                );
            case 'top':
                return (
                    <Box>
                        <Box>{title}</Box>
                        {child}
                    </Box>
                );
            case 'bottom':
                return (
                    <Box>
                        {child}
                        <Box>{title}</Box>
                    </Box>
                );
            default:
                return (
                    <Box>
                        {title}{child}
                    </Box>
                );
        }
    }

    let element = (
        <span>
            {directTitleElement()}
        </span>
    );
    return element;
    //-------------------------------------------------Render
}