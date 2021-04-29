import React from 'react';
import './ContactSection.scss';
import Button from './Button' 

export default function ContactArea(props) {
	return (
    <div className="contact-section">
      <div className="description">
        <h2>Request more information about creating a tour for your campus.</h2>
        <p><a href="mailto:info@covecreekproductions.com">info@covecreekproductions.com</a></p>
        <p><a href="tel:615-739-4583">615-739-4583</a></p>
      </div>
      <div className="form-area">
        <form method="POST" action="https://formspree.io/brad@covecreekproductions.com">
          <input type="text" name="name" placeholder="Your Name" required/>
          <input type="hidden" name="_subject" value="Cove Creek Inquiry" />
          <input type="email" name="_replyto" placeholder="Your email" required/>
          <input type="tel" name="phone" placeholder="Your Phone Number" required/>
          <textarea name="message" placeholder="Please tell us about your project." required></textarea>
          <div style={{ textAlign: 'center'}}>
            <Button 
              type="primary" 
              isSubmit={true} 
              style={{
                display: 'block', 
                width: '100%', 
                margin: 'auto', 
                marginTop: '1em' }}
            >
              Request Information
            </Button>
          </div>
        </form>
      </div>
    </div>
	);
}