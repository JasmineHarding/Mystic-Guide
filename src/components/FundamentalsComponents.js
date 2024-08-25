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
                    <p><strong>White:</strong> Purity, protection, and peace. Used for cleansing and healing.</p>
                    <p><strong>Red:</strong> Passion, love, and strength. Commonly used in rituals involving courage and vitality.</p>
                    <p><strong>Black:</strong> Banishing negativity, protection, and grounding. Helps in absorbing negativity and breaking hexes.</p>
                    <p><strong>Green:</strong> Prosperity, fertility, and abundance. Often used in money-drawing spells and growth rituals.</p>
                    <p><strong>Yellow:</strong> Communication, creativity, and confidence. Ideal for boosting intellect and focus.</p>
                    <p><strong>Blue:</strong> Calm, wisdom, and healing. Associated with emotional healing and peace.</p>
                    <p><strong>Purple:</strong> Spirituality, intuition, and power. Used for meditation and enhancing psychic abilities.</p>
                </div>
            </div>

            <div>
                <h2 onClick={() => toggleDropdown('herbs')}>Herbs</h2>
                <div className={`dropdown-content ${dropdown.herbs ? 'show' : ''}`}>
                    <p><strong>Sage:</strong> Used for cleansing spaces, removing negative energy, and protection.</p>
                    <p><strong>Lavender:</strong> Promotes relaxation, peace, and restful sleep. Often used in love spells and healing rituals.</p>
                    <p><strong>Rosemary:</strong> Enhances memory, provides protection, and is used in purification rituals.</p>
                    <p><strong>Basil:</strong> Attracts wealth, love, and good luck. Often used in money and prosperity spells.</p>
                    <p><strong>Chamomile:</strong> Calms the mind, aids in sleep, and brings in luck and prosperity. Commonly used in relaxation and meditation practices.</p>
                    <p><strong>Peppermint:</strong> Boosts energy, provides clarity, and enhances psychic abilities. Also used for healing and purification.</p>
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

                    <MoonPhase />
                </div>
            </div>

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
