import { Scanner } from '@yudiel/react-qr-scanner';
import {useState} from "react";
import styleName from "./QRCodeScaner.module.css";

import {SCAN_DATA} from "../constants";

const QRCodeScanner = () => {
    const[scanned,setScanned] = useState(null);



    const scanHandler = (result) =>{
        setScanned(result[0].rawValue);

        // работа с localStorage
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData,result[0].rawValue]));
     
    };

   

    const settings = {
        audio:false,
        finder:false,
    };
    const styleSettings = {
        container:{
            width:350
        }
    };

    


    return(
        <>
        <div className={styleName.container}>
            <h1 className={styleName.title}>QR Code Scanner</h1>
            <p className={styleName.output}>Вывод: {scanned}</p>
            <div className={styleName.scannerContainer}>
                <Scanner
                    // allowMultiple
                    onScan={scanHandler}
                    components={settings}
                    styles={styleSettings}
                    className={styleName.scanner}
                />
            </div>
        </div>
        </>
    )
}

export {QRCodeScanner};