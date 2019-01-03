import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Modal from 'react-modal';

const appElement = document.getElementById('app');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-20%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '3px',
    border                : 'none',
    width                 : '400px',
    height                : '300px',
    boxShadow             : '0px 3px 8px -2px #000000',
    backgroundColor       : 'rgba(255,255,255,0.8)'
  },
  overlay : {
    backgroundColor:'rgba(0,0,0,0.5)'
  }
};


class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
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
        <button onClick={this.openModal}>Open Modal</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <div>履歴表示予定地</div>
          <button onClick={this.closeModal}>close</button>

        </Modal>
      </div>
    );
  }
}

export default Header;
