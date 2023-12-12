import React from 'react';
import { Form } from 'react-bootstrap';

const FontFamiliesList = () => {
    const fontFamilies = [
        "Arial, sans-serif",
        "Helvetica, sans-serif",
        "Times New Roman, serif",
        "Times, serif",
        "Courier New, monospace",
        "Courier, monospace",
        "Verdana, sans-serif",
        "Georgia, serif",
        "Comic Sans MS, sans-serif",
        "Impact, sans-serif",
        "Arial Black, sans-serif",
        "Roboto, sans-serif",

        // Add more font families as needed
    ];

    return (
        <>
            {fontFamilies.map((font, index) => (
                <option key={index} value={font} style={{ fontFamily: font }}>{font.split(',')[0]}</option>
            ))}
        </>
    );
};

export default FontFamiliesList;
