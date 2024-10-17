import React, { useState, useEffect } from 'react';

const Theme = () => {

    const [theme, setTheme] = useState({
        theme : localStorage.getItem('theme') || ''
    });

    const [isChecked, setIsChecked] = useState('');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light'; 
        const isChecked = (savedTheme === 'dark') ? 'true' : '';
        setTheme(savedTheme);
        document.body.className = savedTheme; 
        setIsChecked(isChecked);

    }, []);

    const updateTheme = (e) => {
        const { name, checked } = e.target;
        const theme = checked ? 'dark' : 'light'; 
        setTheme((prevState) => ({
            prevState, 
            [name] : theme,
        }));

        localStorage.setItem(name, theme); 
        document.body.className = theme;
        setIsChecked(checked);
    }

    return (
        <>
            <div className="bg-black text-white text-center py-4">
                <input name="theme" id="theme" type="checkbox" value={theme} checked={isChecked} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={updateTheme} />
                <label htmlFor="theme" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Click checkbox for  dark theme</label>
            </div>
        </>
    )
}

export default Theme;