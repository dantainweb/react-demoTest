import { useState } from "react";
import { COUNTRY, REGION } from "./countryData";
import SelectComponent from "./SelectComponent";

export default function CountrySelect() {
    //Data---------------------------------------------------
    const country = COUNTRY;
    const regionList = REGION;
    const [region, setRegion] = useState([]);
    const [countryChoice, setCountryChoice] = useState('');
    const [regionChoice, setRegionChoice] = useState('');
    const [testContent, setTestContent] = useState("");
    const [disabledFlag, setDisabledFlag] = useState(true);
    //---------------------------------------------------Data
    //Process------------------------------------------------
    const getRegion = (coun) => {
        let result = [];
        regionList.forEach(obj => {
            if (obj.country === coun) {
                console.log('in');
                result = obj.region;
            }
        });
        return result;
    }
    const disableSubmit = () => {
        setDisabledFlag(true);
    };
    const undisableSubmit = () => {
        setDisabledFlag(false);
    };
    //------------------------------------------------Process
    //Event--------------------------------------------------
    const changeCountry = (country) => {
        setCountryChoice(country);
        let region = getRegion(country);
        setRegion(region);
        disableSubmit();
    }
    const changeRegion = (region) => {
        if (region === 'none') {
            disableSubmit();
        } else {
            setRegionChoice(region);
            undisableSubmit();
        }
    };
    const showContent = () => {
        let showContent = '住在' + countryChoice + '的' + regionChoice;
        setTestContent(showContent);
    };
    //--------------------------------------------------Event
    //Render-------------------------------------------------
    let element = (
        <div>
            <div>
                <SelectComponent
                    data={country}
                    onChange={changeCountry}
                />
                <SelectComponent
                    data={region}
                    onChange={changeRegion}
                />
                <button
                    style={{
                        height: '40px'
                    }}
                    disabled={disabledFlag}
                    onClick={showContent}
                >
                    確定
                </button>
            </div>
            {testContent}
        </div>
    );
    return element;
    //-------------------------------------------------Render
}