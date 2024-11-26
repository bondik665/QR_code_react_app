

import {Routes,Route} from 'react-router-dom';
import {Navigation} from './Components/Navigation/Navigation';
import {QRGenerator} from './Components/Generate/QRGenerator';
import {QRCodeScanner } from './Components/Scan/QRCodeScaner';

import { GenerateHystory } from './Components/GenerateHystory';
import { ScanHystory } from './Components/ScanHystory';



const Layout =() =>{
    return(
        <>
        <Navigation/>
        <Routes>
            <Route path="/" element={<h1>Главная страница</h1>}/>
            <Route path="/generate" element={<QRGenerator/>}/>
            <Route path="/scan" element={<QRCodeScanner/>}/>
            <Route path="/ScanHystory" element={<ScanHystory/>}/>
            <Route path="/GenerateHystory" element={<GenerateHystory/>}/>
        </Routes>




       </>
    )
}


export  {Layout} ;