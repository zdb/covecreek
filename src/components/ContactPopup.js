import React, { Component } from 'react';
import Modal from 'react-modal';
import ContactForm from './ContactForm'
import './ContactPopup.scss'
import Button from './Button' 

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 99999
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#___gatsby')

class ContactPopup extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.openModal}>{this.props.buttonText ? this.props.buttonText : 'Contact'}</Button>
        <Modal
          className="contact-popup"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Take the Journey with Us"
        >
          <button className="closeButton" onClick={this.closeModal}>
            <i className="fa fa-times"></i>
          </button>
          <ContactForm/>
        </Modal>
      </div>
    );
  }
}

export default ContactPopup;