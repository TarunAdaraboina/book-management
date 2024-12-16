import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Home from './components/Home/Home'
import AddBook from './components/AddBook/AddBook'
import BookDetails from './components/BookDetails/BookDetails';
import EditBook from './components/EditBook/EditBook'
import Contact from './components/Contact';
import About from './components/About';



const App = () => {
  return (
    <Router>
        <div>
            <Navbar/>
      <Routes>
        {/* Define each route and associate it with a component */}
        <Route path="/" element={<Home />} />
        <Route path ='/about' element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
