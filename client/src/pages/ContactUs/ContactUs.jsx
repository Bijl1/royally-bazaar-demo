import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      
      <div className="contact-info">
        <p><strong>Royally Bazaar</strong></p>
        <p><strong>Phone:</strong> 754-226-9101</p>
        <p><strong>Email:</strong> <a href="mailto:Contact@royallybazaar.com">Contact@royallybazaar.com</a></p>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">First/Last Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
