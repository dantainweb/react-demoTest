import { useEffect, useState } from "react";
import { TEXTCONTENT } from "./DataClass";

export default function Calculator(props) {
    //Data---------------------------------------------------
    const [value, setValue] = useState([]);
    const [valueString, setValueString] = useState('0');
    const [sign, setSign] = useState('');
    //---------------------------------------------------Data
    //Process------------------------------------------------
    const generNewValue = (val) => {
        if (sign === '') {
            setValue(val);
        } 
        else {
            switch (sign) {
                case '+':
                    let tempVal1 = parseInt(value) + parseInt(val) ;
                    setValue(tempVal1);
                    break;
                case '-':
                    let tempVal2 = parseInt(value) - parseInt(val);
                    setValue(tempVal2);
                    break;
                case 'x':
                    let tempVal3 = parseInt(value) * parseInt(val);
                    setValue(tempVal3);
                    break;
                case '÷':
                    let tempVal4 = parseInt(value) / parseInt(val);
                    setValue(tempVal4);
                    break;
                default:
                    break;
            }
        }
    };

    //------------------------------------------------Process
    //Event--------------------------------------------------
    const clickEven = (e) => {
        let val = e.target.textContent;
        if (e !== '=') {
            let tempVal = Object.assign([], value);
            tempVal.push(val);
            setValue(tempVal);
        }
        

        // switch (val) {
        //     case 'CE':
        //         setValue(0);
        //         setSign('');
        //         break;
        //     case '+':
        //         setSign('+');
        //         break;
        //     case '-':
        //         setSign('-');
        //         break;
        //     case 'x':
        //         setSign('x');
        //         break;
        //     case '÷':
        //         setSign('÷');
        //         break;
        //     default:
        //         generNewValue(val);
        //         setSign('');
        //         break;
        // }
    }
    useEffect(() => {
        // setValueString();
    }, []);
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    

    const moniterStyle = {
        width: '400px',
        height: '40px',
        border: '1px solid #444',
        float: 'left',
        boxSizing: 'border-box',
        textAlign: 'center',
        lineHeight: '40px'
    }

    const computedButtonElement = TEXTCONTENT.map((item, index) => {
        let key = `item-${index}`;
        let text = item.text;
        let value = item.value;
        let style = item.style;
        return (
            <div
                key={key}
                defaultValue={value}
                style={style}
                onClick={clickEven.bind(this)}
            >
                {text}
            </div>
        );
    });

    let element = (
        <div
            style={{
                position: 'relative',
                width: '400px',
                caretColor: 'white'
            }}>
            <div
                style={moniterStyle}
            >
                {valueString}
            </div>
            { computedButtonElement}
        </div>
    );
    return element;
    //-------------------------------------------------Render
}