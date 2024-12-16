import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [genre, setGenre] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ query, genre, author });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search by title"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <input
                type="text"
                placeholder="Search by genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Search by author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
