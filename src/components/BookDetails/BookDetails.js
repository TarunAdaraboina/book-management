import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css'; // Import the CSS file

const BookDetails = () => {
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

        fetchBookDetails();
    }, [id]);

    if (!book) return <div className="loading-message">Loading...</div>;

    return (
        <div className="book-details-container">
            <h1>{book.title}</h1>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Pages:</strong> {book.pages}</p>
            <p><strong>Published Date:</strong> {book.publishedDate}</p>
        </div>
    );
};

export default BookDetails;
