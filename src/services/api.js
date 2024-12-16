import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books'; // Backend API URL

// Fetch all books with optional search query parameters
export const getBooks = async (searchParams = {}) => {
    try {
        const response = await axios.get(API_URL, { params: searchParams });
        return response.data; // { books: [...], totalPages: X }
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

// Fetch a single book by ID
export const getBookById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; // { book: {...} }
    } catch (error) {
        console.error('Error fetching book details:', error);
        throw error;
    }
};

// Add a new book
export const addBook = async (newBook) => {
    try {
        const response = await axios.post(API_URL, newBook);
        return response.data; // { book: {...} }
    } catch (error) {
        console.error('Error adding book:', error);
        throw error;
    }
};

// Update an existing book
export const updateBook = async (id, updatedBook) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedBook);
        return response.data; // { book: {...} }
    } catch (error) {
        console.error('Error updating book:', error);
        throw error;
    }
};

// Delete a book by ID
export const deleteBook = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; // { message: 'Book deleted successfully' }
    } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
    }
};
