import React from 'react';
import "./index.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-info">If you have any questions or feedback, feel free to reach out!</p>
      <form className="contact-form">
        <div className="contact-form-group">
          <label htmlFor="name" className="contact-label">Name:</label>
          <input type="text" id="name" name="name" className="contact-input" required />
        </div>
        <div className="contact-form-group">
          <label htmlFor="email" className="contact-label">Email:</label>
          <input type="email" id="email" name="email" className="contact-input" required />
        </div>
        <div className="contact-form-group">
          <label htmlFor="message" className="contact-label">Message:</label>
          <textarea id="message" name="message" className="contact-textarea" required></textarea>
        </div>
        <button type="submit" className="contact-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
