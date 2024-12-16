import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css'; // Import the CSS file

const EditBook = () => {
    const [book, setBook] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/books/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBookDetails(); // Call the function inside useEffect
    }, [id]); // This will run whenever the `id` changes

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedBook = { ...book };
        try {
            await axios.put(`http://localhost:5000/api/books/${id}`, updatedBook);
            alert('Book updated successfully');
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };

    if (!book) return <div className="loading-message">Loading...</div>;

    return (
        <div className="edit-book-container">
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={book.title}
                    onChange={(e) => setBook({ ...book, title: e.target.value })}
                    placeholder="Title"
                />
                <input
                    type="text"
                    value={book.author}
                    onChange={(e) => setBook({ ...book, author: e.target.value })}
                    placeholder="Author"
                />
                <input
                    type="text"
                    value={book.genre}
                    onChange={(e) => setBook({ ...book, genre: e.target.value })}
                    placeholder="Genre"
                />
                <input
                    type="number"
                    value={book.pages}
                    onChange={(e) => setBook({ ...book, pages: e.target.value })}
                    placeholder="Pages"
                />
                <input
                    type="date"
                    value={book.publishedDate}
                    onChange={(e) => setBook({ ...book, publishedDate: e.target.value })}
                />
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
};

export default EditBook;
