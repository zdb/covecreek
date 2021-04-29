/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import BurgerMenu from "./burgerMenu"

import Header from "./header"
import "../preloader.scss"
import "./layout.css"

import favicon from "../images/favicon.ico"
import PortraitLock from "./PortraitLock";


const Layout = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div id="outer-container" className={className}>
        <PortraitLock/>

        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Oswald|Roboto|Raleway|Raleway:700|Raleway:900" rel="stylesheet"/>
          <link rel="shortcut icon" type="image/png" href={favicon}/>
        </Helmet>
        <BurgerMenu />
      <div id="page-wrap">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
      </div></div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
