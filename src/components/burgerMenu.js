import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu'
import { Link } from "gatsby"
import './burgerMenu.scss'
import logoSimple from '../images/logo-simple.png'

class BurgerMenu extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right>
        <Link id="home" className="menu-item" to="/">Home</Link>
        <Link id="virtual-tours" className="menu-item" to="/virtual-tours">Virtual Tours</Link>
        <Link id="videos" className="menu-item" to="/videos">Video</Link>
        <img className="logo" src={logoSimple} />
        <a href="tel:615-739-4583" className="bm-contact"><i className="fa fa-phone fa-flip-horizontal"/> 615-739-4583</a>
        <a href="mailto:info@covecreekproductions.com" className="bm-contact"><i className="fa fa-envelope"/> info@covecreekproductions.com</a>
      </Menu>
    );
  }
}

export default BurgerMenu;