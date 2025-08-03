import React from 'react';
import appLayoutStyles from '../App.module.css';

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Thank you for your message! This is a dummy form.');
    
  };

  return (
    <section className={appLayoutStyles.contentSection}>
      <h2>Contact Us</h2>
      <p>Have questions or feedback? Reach out to us!</p>
      <address>
        Email: <a href="mailto:info@example.com">info@example.com</a><br />
        Phone: (123) 456-7890<br />
        Address: 123 Theme St, React City, TX 78901
      </address>
      <form className={appLayoutStyles.contactForm} onSubmit={handleSubmit}>
        <div className={appLayoutStyles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={appLayoutStyles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={appLayoutStyles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={5} required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactPage;
