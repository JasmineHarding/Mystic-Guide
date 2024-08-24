import React from 'react';
import { Link } from 'react-router-dom';
import useNote from '../hooks/useNote';

function BasicSpells() {
    const [note, setNote, saveNote] = useNote('basicSpellsNote');

    const handleChange = (event) => {
        setNote(event.target.value);
    };

    return (
        <div className="BasicSpells">
            <h1>Basic Spells</h1>
            <Link to="/">
                <button className="custom-button">Home</button>
            </Link>

            <div className="spell-card">
                <h2>Banishing Spell</h2>
                <a href="https://magickalspot.com/banishing-spells/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/images/banishing-spells.jpg`} alt="Banishing Spell" />
                </a>
                <p><strong>Explanation:</strong> To ward off negative influences or energies.</p>
                <p><strong>Ingredients:</strong> Black candle, salt, garlic, paper, and pen, banishing oil (optional).</p>
                <p><strong>Setup:</strong> Write what you wish to banish on the paper. Place salt in a circle around your workspace. Light the black candle and focus on the negative energies dissipating. Burn the paper safely in a fireproof container.</p>
            </div>

            <div className="spell-card">
                <h2>Money Spell</h2>
                <a href="https://magickalspot.com/wiccan-money-spells/?gad_source=1&gclid=CjwKCAjw8fu1BhBsEiwAwDrsjOJnNceiOdpDfaErtSt1EZCnAKyvyuTe5pJFuuUmJNi44lTKMTZgxhoCPKkQAvD_BwE" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/images/money-spells.jpg`} alt="Money Spell" />
                </a>
                <p><strong>Explanation:</strong> To attract financial prosperity and abundance.</p>
                <p><strong>Ingredients:</strong> Green candle, cinnamon, coins, bay leaves, green pouch.</p>
                <p><strong>Setup:</strong> Carve symbols of wealth into the candle. Place coins and bay leaves around it. Sprinkle cinnamon for fast action. Light the candle focusing on your intentions for prosperity.</p>
            </div>

            <div className="spell-card">
                <h2>Protection Spell</h2>
                <a href="https://magickalspot.com/protection-spells-guide/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/images/protection-spells.jpg`} alt="Protection Spell" />
                </a>
                <p><strong>Explanation:</strong> For safeguarding oneself or spaces from harm.</p>
                <p><strong>Ingredients:</strong> White candle, protective herbs (e.g., rosemary, sage), black tourmaline or obsidian, salt.</p>
                <p><strong>Setup:</strong> Cast a circle with salt. Place the candle in the center surrounded by the herbs and stone. Light the candle envisioning a protective shield.</p>
            </div>

            <div className="spell-card">
                <h2>Honey Jar Spell</h2>
                <a href="https://magickalspot.com/honey-jar-spells/" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/images/honey-jar-spells.jpg`} alt="Honey Jar Spell" />
                </a>
                <p><strong>Explanation:</strong> A spell focusing on sweetening relationships or situations.</p>
                <p><strong>Ingredients:</strong> Honey, small jar, pink candle, rose petals, paper, and pen.</p>
                <p><strong>Setup:</strong> Write names or intentions on the paper, fold and place in the jar. Fill the jar with honey covering the paper. Seal with wax from the pink candle.</p>
            </div>

            {/* Text field for taking notes */}
            <div className="text-field">
                <label htmlFor="notesInput">Your Notes</label>
                <textarea
                    id="notesInput"
                    name="notes"
                    value={note}
                    onChange={handleChange}
                    placeholder="Write your notes here..."
                />
                <button onClick={saveNote}>Save</button>
            </div>
        </div>
    );
}

export default BasicSpells;
