import { useEffect, useState } from 'react';

function useNote(key) {
    const [note, setNote] = useState('');

    useEffect(() => {
        const savedNote = localStorage.getItem(key);
        if (savedNote) {
            setNote(savedNote);
        }
    }, [key]);

    const saveNote = () => {
        localStorage.setItem(key, note);
        alert('Note saved!');
    };

    return [note, setNote, saveNote];
}

export default useNote;
