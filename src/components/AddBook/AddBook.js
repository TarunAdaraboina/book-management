import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [pages, setPages] = useState('');
    const [publishedDate, setPublishedDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = { title, author, genre, pages, publishedDate };
        try {
            await axios.post('http://localhost:5000/api/books', newBook);
            alert('Book added successfully');
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    return (
        <div>
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Pages"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                    required
                />
                <input
                    type="date"
                    placeholder="Published Date"
                    value={publishedDate}
                    onChange={(e) => setPublishedDate(e.target.value)}
                    required
                />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
