import React, { useEffect, useState } from 'react';
import CrystalChart from './CrystalChart';
import crystals from './Crystals';

const CrystalOfTheDay = () => {
    const [crystal, setCrystal] = useState(null);
    const [popularityData, setPopularityData] = useState([]);

    useEffect(() => {
        const getCrystalOfTheDay = () => {
            const savedCrystal = localStorage.getItem('crystalOfTheDay');
            const savedTimestamp = localStorage.getItem('crystalOfTheDayTimestamp');
            const currentTimestamp = new Date().getTime();

            if (savedCrystal && savedTimestamp) {
                const timeDiff = currentTimestamp - parseInt(savedTimestamp, 10);
                const hoursDiff = timeDiff / (1000 * 60 * 60);

                if (hoursDiff < 24) {
                    return JSON.parse(savedCrystal);
                }
            }

            const randomIndex = Math.floor(Math.random() * crystals.length);
            const newCrystal = crystals[randomIndex];

            localStorage.setItem('crystalOfTheDay', JSON.stringify(newCrystal));
            localStorage.setItem('crystalOfTheDayTimestamp', currentTimestamp.toString());

            return newCrystal;
        };

        const loadPopularityData = () => {
            const savedData = localStorage.getItem('crystalPopularityData');
            return savedData ? JSON.parse(savedData) : new Array(crystals.length).fill(10);
        };

        setPopularityData(loadPopularityData());
        const crystalOfTheDay = getCrystalOfTheDay();
        setCrystal(crystalOfTheDay);
    }, []);

    const handleCrystalClick = (index) => {
        const newPopularityData = [...popularityData];
        newPopularityData[index] += 1;
        setPopularityData(newPopularityData);

        // Save updated popularity data to localStorage
        localStorage.setItem('crystalPopularityData', JSON.stringify(newPopularityData));
    };

    if (!crystal) return null;

    return (
        <div className="crystal-of-the-day">
            <h2>Crystal of the Day</h2>
            <img src={crystal.image} alt={crystal.name} />
            <h3>{crystal.name}</h3>
            <p>{crystal.description}</p>
            
            {/* Centered Chart */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <CrystalChart popularityData={popularityData} handleCrystalClick={handleCrystalClick} chartType="bar" />
            </div>
        </div>
    );
};

export default CrystalOfTheDay;
