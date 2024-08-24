import React, { useEffect, useState } from 'react';

const MoonPhase = () => {
    const [phase, setPhase] = useState('Testing...');

    useEffect(() => {
        console.log("Component Mounted");

        const getMoonPhase = () => {
            let year = new Date().getFullYear(); 
            let month = new Date().getMonth() + 1; 
            let day = new Date().getDate(); 

            let c = 0; 
            let e = 0; 
            let jd = 0; 
            let b = 0; 

            if (month < 3) {
                year--; 
                month += 12; 
            }

            month++; 
            c = 365.25 * year;
            e = 30.6 * month;
            jd = c + e + day - 694039.09; 
            jd /= 29.5305882; 
            b = Math.floor(jd); 
            jd -= b; 
            b = Math.round(jd * 8); 

            if (b >= 8) b = 0; 

            return b;
        };

        const phaseNames = [
            "New Moon",
            "Waxing Crescent",
            "First Quarter",
            "Waxing Gibbous",
            "Full Moon",
            "Waning Gibbous",
            "Last Quarter",
            "Waning Crescent"
        ];

        const currentPhaseIndex = getMoonPhase();
        let currentPhase = phaseNames[currentPhaseIndex];

        console.log("Calculated Moon Phase:", currentPhase);
        setPhase(currentPhase);
    }, []);

    const imageSource = () => {
        switch (phase) {
            case "New Moon":
                return "/images/new-moon.jpg";
            case "Waxing Crescent":
                return "/images/waxing-crescent.jpg";
            case "First Quarter":
                return "/images/first-quarter.jpg";
            case "Waxing Gibbous":
                return "/images/waxing-gibbous.jpg";
            case "Full Moon":
                return "/images/full-moon.jpg";
            case "Waning Gibbous":
                return "/images/waning-gibbous.jpg";
            case "Last Quarter":
                return "/images/last-quarter.jpg";
            case "Waning Crescent":
                return "/images/waning-crescent.jpg";
            default:
                return "/images/default-moon.jpg";
        }
    };

    return (
        <div className="moon-phase">
            <h2>Current Moon Phase: {phase}</h2>
            <img src={imageSource()} alt={phase} />
        </div>
    );
};

export default MoonPhase;
