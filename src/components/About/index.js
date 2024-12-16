import React from 'react';
import './index.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Book Management Application</h1>
      <p>Welcome to our Book Management Application! Our mission is to provide an easy way for users to manage their books.</p>
      <p>We believe in the power of books and aim to create a user-friendly experience for all book enthusiasts. Whether you're an avid reader, a librarian, or a casual book collector, our app allows you to seamlessly store, search, and manage your book collection.</p>
      <p>The application allows you to:</p>
      <ul>
        <li>Add, update, and remove books from your collection</li>
        <li>Search for books by title, author, or genre</li>
        <li>Track the number of pages, genres, and publication dates of your books</li>
        <li>Stay organized with detailed book records and easy-to-navigate interface</li>
      </ul>
      <p>Our goal is to make managing your books as simple and enjoyable as possible!</p>
    </div>
  );
};

export default About;
