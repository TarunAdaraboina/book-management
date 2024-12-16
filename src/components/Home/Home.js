import React, { useState } from 'react';

import Search from '../Search/Search'
import BookList from '../BookList/BookList';

import './home.css'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <div>
            <h1>Book Management</h1>
            <Search onSearch={handleSearch} />
            <BookList searchQuery={searchQuery} />
        </div>
    );
};

export default Home;
