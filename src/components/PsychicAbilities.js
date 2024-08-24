import React from 'react';
import { Link } from 'react-router-dom';
import useNote from '../hooks/useNote';

function PsychicAbilities() {
    const [note, setNote, saveNote] = useNote('psychicAbilitiesNote');

    const handleChange = (event) => {
        setNote(event.target.value);
    };

    return (
        <div className="PsychicAbilities">
            <h1>Exploring Psychic Abilities</h1>
            <Link to="/">
                <button className="custom-button">Home</button>
            </Link>

            <div className="spell-card">
                <h2>Clairaudience (Clear Hearing)</h2>
                <p><strong>Explanation:</strong> The ability to hear voices, sounds, or music not audible to the normal ear, perceived internally, often conveying messages from the spiritual realm.</p>
                <p><strong>Recognition:</strong> Frequent internal voices or sounds, or intuitive spoken messages.</p>
            </div>

            <div className="spell-card">
                <h2>Claircognizance (Clear Knowing)</h2>
                <p><strong>Explanation:</strong> Instantly knowing something to be true without logical basis, with knowledge arriving spontaneously.</p>
                <p><strong>Recognition:</strong> Having a persistent sense of 'just knowing' without a clear origin.</p>
            </div>

            <div className="spell-card">
                <h2>Clairempathy (Clear Emotional Feeling)</h2>
                <p><strong>Explanation:</strong> The ability to experience others' emotions as one's own, including those of spirits.</p>
                <p><strong>Recognition:</strong> Deep empathy or unexplained emotional experiences.</p>
            </div>

            <div className="spell-card">
                <h2>Clairgustance (Clear Tasting)</h2>
                <p><strong>Explanation:</strong> The ability to taste substances psychically without physical ingestion.</p>
                <p><strong>Recognition:</strong> Experiencing unlinked tastes that may convey messages.</p>
            </div>

            <div className="spell-card">
                <h2>Clairsalience (Clear Smelling)</h2>
                <p><strong>Explanation:</strong> Smelling odors without a physical source, which may be associated with entities.</p>
                <p><strong>Recognition:</strong> Detecting unexplained fragrances or stenches.</p>
            </div>

            <div className="spell-card">
                <h2>Clairsentience (Clear Feeling)</h2>
                <p><strong>Explanation:</strong> Feeling the physical and emotional states of others and receiving messages through sensations.</p>
                <p><strong>Recognition:</strong> Physical sensations providing insights about people or spirits.</p>
            </div>

            <div className="spell-card">
                <h2>Clairtangency (Clear Touching)</h2>
                <p><strong>Explanation:</strong> Also known as psychometry, it's receiving information about objects or people by touch.</p>
                <p><strong>Recognition:</strong> Gaining knowledge about something's history through physical contact.</p>
            </div>

            <div className="spell-card">
                <h2>Clairvoyance (Clear Seeing)</h2>
                <p><strong>Explanation:</strong> Seeing things invisible to the normal eye, like future visions, spirits, or symbols.</p>
                <p><strong>Recognition:</strong> Experiencing visions, seeing auras, or observing apparitions unseen by others.</p>
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

export default PsychicAbilities;
