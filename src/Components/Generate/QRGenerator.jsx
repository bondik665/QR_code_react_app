import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import s from "./QRGenerator.module.css";

import { GENERATE_DATA } from "../constants";

const QRGenerator = () => {

    const [value, setValue] = useState('');
    // Add this line to manage the input value.
    const [result, setResult] = useState('');



    const onClickHandler = () => {
        // работа с localStorage
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');


        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value]));



        setResult(value);
        setValue('');

    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };
    console.log("result:", result)


    return (
        <div className={s.container}>
            <h3>QR-код:</h3>
            {result !== "" && (
                <QRCodeSVG value={result} />
            )}

            <input
                type="text"
                value={value}
                onChange={onChangeHandler}
                className={s.input}
                placeholder="Введите значение QRCode"
            />
            <button
                type="button"
                className={s.button}
                onClick={onClickHandler}>
                сгенерить qr-код
            </button>
        </div>
    )
}

export { QRGenerator };