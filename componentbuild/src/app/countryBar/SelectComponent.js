export default function SelectComponent(props) {
    //Data---------------------------------------------------
    const data = props.data ? props.data : [];
    const onChange = props.onChange;
    //---------------------------------------------------Data
    //Process------------------------------------------------
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const changeEven = (e) => {
        let val = e.target.value;
        onChange(val);
    }
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    const selectStyle = {
        
    };
    const emptyOptionElement = (
        <option
            value="none"
        >

        </option>
    );
    const optionElement = data.map((item, index) => {
        let key = `item-${index}`;
        return  (
            <option
                key={key}
                value={item}
            >
                {item}
            </option>
        );

    });
    
    let element = (
        <select
            style={{
                width: '400px',
                height: '40px'
            }}
            onChange={changeEven.bind(this)}
        >
            {emptyOptionElement}
            {optionElement}
        </select>
    );
    return element;
    //-------------------------------------------------Render
}