import React from 'react';
import { Link } from 'react-router-dom';
import CrystalOfTheDay from './CrystalOfTheDay';

function Home() {
    return (
        <div className="Home">
            <h1>Mystic Guide</h1>

            {/* Crystal of the Day Component */}
            <CrystalOfTheDay />

            <nav>
                <ul>
                    <li>
                        <Link to="/psychic-abilities">
                            <button className="custom-button">Exploring Psychic Abilities</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/basic-spells">
                            <button className="custom-button">Basic Spells</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/fundamentals-components">
                            <button className="custom-button">Fundamentals and Components</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
