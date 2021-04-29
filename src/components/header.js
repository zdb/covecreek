import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <div>
    <header className="header-top is-hidden-mobile">
    
    <nav className="navbar" role="navigation">
      <div className="navbar-start">
        <div className="navbar-item">
          {/* <Link className="navbar-link is-arrowless" to={'videos'}>
            Video
          </Link> */}
          <Link className="navbar-link is-arrowless" to="/virtual-tours">
            Virtual Tours
          </Link>
        </div>
      </div>
      {/* <a className="navbar-item is-logo" href="./">
        <img src={logo} alt="Cove Creek Productions" width="200" />
      </a> */}
      <div className="navbar-end">
        <div className="navbar-item">
          {/* <Link className="navbar-link is-arrowless" to="tel:615-739-4583"> */}
          <a href="tel:615-739-4583" className="navbar-link is-arrowless">
          <i className="fa fa-phone fa-flip-horizontal"/> 615-739-4583
          </a>
          
        </div>
      </div>
      <div className="navbar-line"></div>
    </nav>
    <div className="logo">
      <Link className="navbar-item is-logo" to="/">
        <img src={logo} alt="Cove Creek Productions" width="200" />
      </Link>
    </div>

    <div className="logo-after">
      <div className="shape"></div>
    </div>
  </header>
  <div className="clear-header-top"></div>

  <header className="header-top-mobile is-hidden-tablet">
    <nav className="navbar is-mobile" role="navigation">
      <div className="navbar-start">
      <div className="navbar-item">
      </div>
      </div>

        {/* <a className="navbar-item is-logo" href="./">
          <img src={logo} alt="Cove Creek Productions" width="200" />
        </a> */}

        <div className="navbar-end">
        <div className="navbar-item">
          {/* <div className="navbar-burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div> */}
        </div>
      </div>
      <div className="navbar-line"></div>
    </nav>

    <div className="logo">
      <a className="navbar-item is-logo" href="./">
        <img src={logo} alt="Cove Creek Productions" width="200" />
      </a>
    </div>
    
    <div className="logo-after">
      <div className="shape"></div>
    </div>

    <div className="navbar-menu" id="navMenu">
        <div className="navbar-item">
          <a className="navbar-link" href="./contact.html">
            Contact
          </a>
        </div>
      </div>
  </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
