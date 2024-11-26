import { Link } from 'react-router-dom';
import styleName from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={styleName.nav}>
            <Link to="/" className={styleName.link}>Главная</Link>
            <Link to="/generate" className={styleName.link}>Генерация QR</Link>
            <Link to="/scan" className={styleName.link}>Сканирование QR</Link>
            <Link to="/ScanHystory" className={styleName.link}>ScanHystory</Link>
            <Link to="/GenerateHystory" className={styleName.link}>GenerateHystory</Link>
        </nav>
    );
}

export { Navigation };