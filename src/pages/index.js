import React, { Component } from 'react';
import { Link } from "gatsby"
import "@fortawesome/fontawesome-free/css/all.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import BackgroundVideo from "../components/videoBackground"
import VimeoPopup from "../components/vimeoPopup"
import TextureSection from "../components/TextureSection"
import Button from "../components/Button"
import Pano from "../components/pano"
import ContactPopup from '../components/ContactPopup';
import ContactSection from "../components/ContactSection"
import "./index.scss"
import bgIndexIntro from '../images/videos/bg-index-intro.jpg'
import bgIndexIntroMobile from '../images/videos/bg-index-intro.jpg'


class IndexPage extends Component {
  constructor() {
    super();
  }

  render() {
    const vimeoPopupButton = (
      <span>
        <i className="fa fa-play"></i> Anything is Possible
      </span>
    )

    return (
  <div>
  <Layout className="index-page">
    <SEO title="Cove Creek Productions | Video Production &amp; 360° Virtual Reality Tours" keywords={[`cove creek productions`, `video production`, `virtual tours`, `creative`]} />

    <Helmet>
    {/* <!-- OPENGRAPH --> */}
    {/* <!--  Essential META Tags --> */}
    <meta property="og:title" content="Video Production &amp; 360° Virtual Reality Tours"/>
    <meta property="og:description" content="Our tours are built with a comprehensive approach to achieve highest quality. Our process is detailed and has been fined tuned over many years."/>
    <meta property="og:image" content="https://covecreekproductions.com/tours/2020tour/og.jpg"/>
    <meta property="og:url" content="https://covecreekproductions.com/"/>
    <meta name="twitter:card" content="summary_large_image"/>
    {/* <!--  Non-Essential, But Recommended --> */}
    <meta property="og:site_name" content="Cove Creek Productions"/>
    {/* <!-- ENDOPENGRAPH --> */}
    </Helmet>

    <section className="section-360 section">
      <div className="flex-container">
        <div className="vcenter">
          {/* <h2>Immersive 360° <br className="is-hidden-tablet"/> Tours</h2> */}
          <h2>360° Virtual Tours </h2>
          <h3>Unmatched Quality <br className="is-hidden-tablet"/> &amp; Seamless VR Delivery</h3>
          <Button type="primary" url="/virtual-tours">Explore VR Tours</Button>
        </div>
      </div>
      <Pano xml="/krpano/tour.xml" />
    </section>
    

    <TextureSection className="section-mission-statement">
      <h2>The ultimate virtual visit! </h2>
      <p>Since 2008, Cove Creek has created visually stunning virtual tours, custom made to show and tell your story.</p>
      <ContactPopup buttonText={'Schedule a demo'}/>
      {/* <Button type="primary" url="/videos">Video Production</Button> */}
      {/* <Button type="primary" url="/virtual-tours">VR Tours</Button> */}
    </TextureSection>
    
    <section className="intro">
      <BackgroundVideo width='100%' height='80vh' url={'https://vimeo.com/335528786'} mobileUrl={'https://vimeo.com/335544084'} loadingBg={bgIndexIntro} mobileLoadingBg={bgIndexIntroMobile} />
      <div className="intro-text">
        <h2>"Anything is Possible"</h2>
        <h3>Our approach to every project</h3>
      </div>
      <div className="button-group">
        <VimeoPopup url="https://vimeo.com/335540928" buttonText={vimeoPopupButton} buttonStyle="primary" />
        <Button type="primary" url="/virtual-tours">360° VR Tours</Button>
        <Button type="primary" url="/videos">Video Portfolio</Button>
      </div>
    </section>

    <TextureSection className="section-contact" bottom={false}>
      {/* <h2>Take the Journey with Us</h2>
      <ul>
        <li>615.739.4583</li>
        <li>info@covecreekproductions.com</li>
      </ul>
      <ContactPopup buttonText={'Work with us'}/> */}
      <ContactSection/>
    </TextureSection>
  </Layout></div>
  )}
}

export default IndexPage
