import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = ({ searchQuery }) => {
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Define fetchBooks function inside useEffect to avoid undefined errors
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/books', {
                    params: {
                        search: searchQuery.query,
                        genre: searchQuery.genre,
                        author: searchQuery.author,
                        page,
                    },
                });
                setBooks(response.data.books);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks(); // Fetch books inside useEffect
    }, [searchQuery, page]); // Re-run when `searchQuery` or `page` changes

    const handleDelete = async (bookId) => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            try {
                await axios.delete(`http://localhost:5000/api/books/${bookId}`);
                // After deletion, the books list is re-fetched automatically by the useEffect hook
            } catch (error) {
                console.error('Error deleting book:', error);
            }
        }
    };

    return (
        <div>
            <div className="book-grid">
                {books.map((book) => (
                    <div key={book.id} className="book-item">
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <p>{book.genre}</p>
                        <p>{book.pages} pages</p>
                        <p>Published: {book.publishedDate}</p>
                        <div>
                            <Link to={`/book/${book.id}`}>Details</Link>
                            <Link to={`/edit/${book.id}`}>Edit</Link>
                            <button onClick={() => handleDelete(book.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {page > 1 && <button onClick={() => setPage(page - 1)}>Previous</button>}
                {page < totalPages && <button onClick={() => setPage(page + 1)}>Next</button>}
            </div>
        </div>
    );
};

export default BookList;
