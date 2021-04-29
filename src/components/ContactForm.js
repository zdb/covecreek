import React from 'react';
import './ContactForm.scss';
import Button from './Button' 

export default function ContactForm(props) {
	return (
    <div className="contact-form">
      <h2>Take the Journey with Us</h2>
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
            Send
          </Button>
        </div>
      </form>
    </div>
	);
}