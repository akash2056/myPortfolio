import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isSuccess: false,
    isError: false,
    isSubmitting: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields.',
        isSuccess: false,
        isError: true,
        isSubmitting: false
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: 'Please enter a valid email address.',
        isSuccess: false,
        isError: true,
        isSubmitting: false
      });
      return;
    }

    // Simulate form submission
    setFormStatus({
      message: 'Sending message...',
      isSuccess: false,
      isError: false,
      isSubmitting: true
    });

    // In a real application, you would send the form data to a server here
    // For example, using fetch or axios to submit to a backend API
    setTimeout(() => {
      setFormStatus({
        message: 'Your message has been sent successfully! I will get back to you soon.',
        isSuccess: true,
        isError: false,
        isSubmitting: false
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name <span className="required">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email <span className="required">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="form-control"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject of your message"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message <span className="required">*</span></label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="submit-btn"
          disabled={formStatus.isSubmitting}
        >
          {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        
        {formStatus.message && (
          <div className={`form-message ${formStatus.isSuccess ? 'success' : ''} ${formStatus.isError ? 'error' : ''}`}>
            {formStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
