import React, {useState, useEffect} from 'react';

export const useLocalStorage = (key, defaultValue = null) => {
    const [value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem(key);
            if (saved !== null) {
                return JSON.parse(saved);
            }
            return defaultValue;
        } catch {
            return defaultValue;
        }
    });
    useEffect(() => {
        const saveConfig = JSON.stringify(value);
        localStorage.setItem(key, saveConfig);
    }, [key, value]);

    return [value, setValue];
}