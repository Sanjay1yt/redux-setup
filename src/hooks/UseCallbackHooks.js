import React, { useState, useCallback } from 'react';

export const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleQueryChange = useCallback(event => {
        console.log("use call back function called")
        setQuery(event.target.value);
    }, [query]);

    return (
        <input type="text" value={query} onChange={handleQueryChange} />
    );
}