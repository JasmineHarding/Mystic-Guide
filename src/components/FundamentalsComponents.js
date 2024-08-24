import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useNote from '../hooks/useNote';
import '../styles/GlobalStyles.css';
import MoonPhase from './MoonPhase';

function FundamentalsComponents() {
    const [note, setNote, saveNote] = useNote('fundamentalsComponentsNote');
    const [dropdown, setDropdown] = useState({
        candles: false,
        herbs: false,
        moonPhases: false,
    });

    const handleChange = (event) => {
        setNote(event.target.value);
    };

    const toggleDropdown = (section) => {
        setDropdown(prevState => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div className="FundamentalsComponents">
            <h1>Fundamentals and Components</h1>
            <Link to="/">
                <button className="custom-button">Home</button>
            </Link>

            <div>
                <h2 onClick={() => toggleDropdown('candles')}>Candles</h2>
                <div className={`dropdown-content ${dropdown.candles ? 'show' : ''}`}>
                    {/* Candle content */}
                </div>
            </div>

            <div>
                <h2 onClick={() => toggleDropdown('herbs')}>Herbs</h2>
                <div className={`dropdown-content ${dropdown.herbs ? 'show' : ''}`}>
                    {/* Herbs content */}
                </div>
            </div>

            <div>
                <h2 onClick={() => toggleDropdown('moonPhases')}>Moon Phases</h2>
                <div className={`dropdown-content ${dropdown.moonPhases ? 'show' : ''}`}>
                    <p>New Moon: Symbolizes new beginnings, setting intentions, and personal development. It's a period for self-reflection and letting go of what no longer serves you.</p>
                    <p>Waxing Crescent: Represents growth and planning. It's a time to organize and take actionable steps towards goals.</p>
                    <p>First Quarter: Marks a time for action and decision-making, overcoming obstacles, and demonstrating courage.</p>
                    <p>Waxing Gibbous: Indicates the final stages of growth, a period for refinement, and aligning with one's higher self.</p>
                    <p>Full Moon: The most potent phase for abundance, manifestation, and realizing desires. It's a time to celebrate achievements and release limitations.</p>
                    <p>Waning Gibbous: A phase for harvest, gratitude, and letting go, preparing for the new that the next cycle brings.</p>
                    <p>Last Quarter: Represents releasing, surrendering, and emotional healing. It's a time for clarity and purpose.</p>
                    <p>Waning Crescent: The final phase for rest, reflection, and preparation for the new cycle, reflecting on achievements and planning ahead.</p>

                    {/* Add the MoonPhase component here */}
                    <MoonPhase />
                </div>
            </div>

            {/* Text field for taking notes */}
            <div className="text-field">
                <label>Your Notes</label>
                <textarea
                    value={note}
                    onChange={handleChange}
                    placeholder="Write your notes here..."
                />
                <button onClick={saveNote}>Save</button>
            </div>
        </div>
    );
}

export default FundamentalsComponents;
