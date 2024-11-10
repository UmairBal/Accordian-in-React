import React, { useState } from 'react';
import './style.css'

const RandomColor = () => {
    
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    function generateRandomRGBColor() {
        let a = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let c = Math.floor(Math.random() * 255);
        let hexColor = `rgb(${a}, ${b}, ${c})`;
        let typeColor = 'rgb';
        setTypeOfColor(typeColor)
        setColor(hexColor)
        console.log("-----------------")
        console.log(hexColor)
        console.log(typeColor)
    }

    function generateRandomHEXColor() {
        const hex = [1,2,3,4,5,6,7,8,9,'A','B',"C", "D", 'E', 'F'];

        let hexColor = '#';

        for (let i = 0; i<6; i++){
            hexColor += hex[Math.floor(Math.random() * 14)];
        }
        setColor(hexColor)
    }

    return (
     
            <div 
            style={{
                background: color,
                
            }} className='container-color wrapper'>
                <div className='color-btns'>
                    <button onClick={typeOfColor === 'hex' ? generateRandomHEXColor: generateRandomRGBColor}>Generate Random Color</button>
                    <button 
                    onClick={()=>{
                        setTypeOfColor('rgb')
                    }}>Create RGB Color</button>
                    <button 
                    onClick={()=>{
                        setTypeOfColor('hex')
                    }}>Create HEX Color</button>
                </div>
                <div className='color-text'>
                    <h3>{color}</h3>
                </div>
        </div>
    )};
export default RandomColor;