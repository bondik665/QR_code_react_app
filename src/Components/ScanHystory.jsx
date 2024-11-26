import { SCAN_DATA } from "./constants";
import { QRCodeSVG } from "qrcode.react";
import s from "./ScanHystory.module.css";

export const ScanHystory = () => {
    // работа с localStorage
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div className={s.container}>
            <h1 className={s.title}>История сканирования</h1>
            {data.map((text, index) => (
                <div key={index} className={s.scanItem}>
                    <p className={s.scanText}>{text}</p>
                    <div className={s.qrcode}>
                        <QRCodeSVG value={text} size={80} />
                    </div>
                </div>
            ))}
        </div>
    );
}