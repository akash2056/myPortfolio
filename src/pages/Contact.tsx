import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <main>
      <section className="contact-header">
        <div className="container">
          <div className="section-title">
            <h1>Contact Me</h1>
            <p>Feel free to reach out if you have any questions or would like to work together.</p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email</h3>
                <p><a href="mailto:ay2@fordham.edu">ay2@fordham.edu</a></p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h3>Phone</h3>
                <p><a href="tel:+13475918012">(347) 591-8012</a></p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Location</h3>
                <p>New York, NY 10458</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fab fa-linkedin"></i>
                </div>
                <h3>LinkedIn</h3>
                <p><a href="https://linkedin.com/in/akash-yadav-66b211180" target="_blank" rel="noopener noreferrer">Connect with me</a></p>
              </div>
            </div>
            <div className="contact-form-container">
              <h2>Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
