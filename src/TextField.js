import React, { useState } from 'react';

function TextField({ label, onSave }) {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSave = () => {
        if (onSave) {
            onSave(text);
        }
    };

    return (
        <div className="text-field">
            <label>{label}</label>
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Write your notes here..."
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default TextField;