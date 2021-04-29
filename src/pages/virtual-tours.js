import React, { Component } from 'react';
import { Link } from "gatsby"
import "@fortawesome/fontawesome-free/css/all.css"
import Layout from "../components/layout"
import Image from "../components/image"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import BackgroundVideo from "../components/videoBackground"
import VimeoPopup from "../components/vimeoPopup"
import TextureSection from "../components/TextureSection"
import Section from "../components/Section"
import Button from "../components/Button"
import ContactPopup from "../components/ContactPopup"
import ContactSection from "../components/ContactSection"

import Pano from "../components/pano"
import TourGallery from "../components/TourGallery/index"
import { Grid } from 'mauerwerk'

import TextSlider from "../components/TextSlider"
import ServicesSlider from "../components/ServicesSlider"

import imgSchoolTour from "../images/tours/school_tour.jpg"
import imgWorld from "../images/tours/world.jpg"
import imgKentSchool from "../images/tours/kentschool.jpg"
import imgNyc from "../images/tours/nyc.jpg"
import imgCampFacility from "../images/tours/camp-facility.jpg"
import imgSuperbowl from "../images/tours/superbowl.jpg"
import imgCampTraditional from "../images/tours/camp-traditional.jpg"
import imgCheley from "../images/tours/cheley.jpg"
import imgRamapo from "../images/tours/ramapo.jpg"
import imgAztour from "../images/tours/aztour.jpg"
import imgASU from "../images/tours/asu.jpg"
import imgSPU from "../images/tours/spu.jpg"
import imgCalifornia from "../images/tours/california.jpg"

import imgManchester from "../images/tours/manchester.jpg"
import imgSierraCanyon from "../images/tours/sierracanyon.jpg"

import imgStateTech from "../images/tours/state_tech.jpg"
import imgBelmont from "../images/tours/belmont.jpg"


import "./virtual-tours.scss"

import bgVirtualToursTextslider from '../images/videos/bg-virtual-tours-textslider.jpg'

import imgAppIos from '../images/app-ios.png'
import imgAppAndroid from '../images/app-android.png'


class VirtualToursPage extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      columns: 3,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if(window.innerWidth < 760){
      this.setState({ columns: 2, heights: 250 });
    } else {
      this.setState({ columns: 3, heights: null });
    }
  }

  render() {
    return (
  <div>
    {this.state.showPopup ? 
      <VimeoPopup url="https://vimeo.com/305837704/d7fe54305c" closePopup={this.togglePopup.bind(this)}/>
      : null
    }
  
  <Layout className="virtual-tours-page">
    <SEO title="360° Virtual Tours Company | Virtual Reality Apps | Cove Creek Productions" keywords={[`cove creek productions`, `virtual tours`, `360 videos`]} />
    
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
      <div className="nopanoscroll">
        <div className="section-360__text">
          <h2>360° Virtual Tours </h2>
          <h3>Unmatched Quality <br className="is-hidden-tablet"/> &amp; Seamless VR Delivery</h3>
        </div>
      </div>
      <Pano xml="/krpano/tour_virtual_tours_page.xml" />
    </section>

    <TextureSection style={{paddingBottom: '5px'}}>
      <h2>360° Tour Portfolio / VR Apps</h2>
      <TourGallery
        heights={this.state.heights}
        columns={this.state.columns}
        margin={10}
        data={[
          {
            name: 'School Portfolio',
            url: 'https://tours.covecreekproductions.com/2020tour/index.html',
            image: imgSchoolTour,
            height: 250,
          },
          {
            name: 'Seattle Pacific University',
            url: 'https://tours.covecreekproductions.com/spu/index.html',
            image: imgSPU,
            height: 250,
          },
          
          // {
          //   name: 'World Tour',
          //   url: 'https://tours.covecreekproductions.com/portfolio/index.html',
          //   image: imgWorld,
          //   height: 250,
          // },
          // {
          //   name: 'Arizona State',
          //   url: 'https://tours.covecreekproductions.com/asu/index.html',
          //   image: imgASU,
          //   height: 250,
          // },
          {
            name: 'Super Bowl LII',
            url: 'https://tours.covecreekproductions.com/2017/Superbowl/index.html',
            image: imgSuperbowl,
            height: 250,
          },
          {
            name: 'Sierra Canyon',
            url: 'https://tours.covecreekproductions.com/sierra_canyon_cc/index.html',
            image: imgSierraCanyon,
            height: 250,
          },
          {
            name: 'Manchester',
            url: 'https://tours.covecreekproductions.com/manchester_cc/index.html',
            image: imgManchester,
            height: 250,
          },
          {
            name: 'NYC Tourism',
            url: 'https://tours.covecreekproductions.com/ny/index.html',
            image: imgNyc,
            height: 250,
          },
          {
            name: 'California Schools',
            url: 'https://tours.covecreekproductions.com/california/index.html',
            image: imgCalifornia,
            height: 250,
            disableMobile: true,
          },
          {
            name: 'Arizona State',
            url: 'https://tours.covecreekproductions.com/asu/index.html',
            image: imgASU,
            height: 250,
            disableMobile: true,
          },
          // {
          //   name: 'Camp Ramapo',
          //   url: 'https://tours.americansummercamps.com/ramapo/',
          //   image: imgRamapo,
          //   height: 250,
          //   disableMobile: true,
          // },
          {
            name: 'State Tech',
            url: 'https://tours.covecreekproductions.com/state_tech_cc/index.html',
            image: imgStateTech,
            height: 250,
            disableMobile: true,
          },
      ]} 
      />

      {/* <a className="appButton" href="https://itunes.apple.com/us/app/cove-creek-vr-world-tour/id1191879176">
        <img src={imgAppIos}/>
      </a>
      <a className="appButton" href="https://play.google.com/store/apps/details?id=com.covecreekproductions.covecreekvr&hl=en_US">
        <img src={imgAppAndroid}/>
      </a> */}


    <div className="section-vr-production" style={{margin: '50px 0 25px 0'}}>
      <h2>Full-scale VR Production</h2>
      <p>Our tours are built with a comprehensive approach to achieve highest quality.  Our process is detailed and has been finely tuned over many years. We strive to be a leader in the market and are committed to being ahead of the curve.</p>
      {/* <ContactPopup buttonText={'Tell us about your project'}/> */}
    </div>

    </TextureSection>

    {/* <section className="section-video is-hidden-mobile">
      <TextSlider />
      <BackgroundVideo width='100%' height='90vh' url={'https://vimeo.com/335543303'} loadingBg={bgVirtualToursTextslider} />
    </section> */}

    {/* <section className="section-video is-hidden-tablet">
      <TextSlider />
    </section> */}


    <Section style={{background:'rgb(22 32 52)', padding: '150px 0 100px 0', zIndex: '1' }}>
        <ContactSection/>
    </Section>
  </Layout></div>
  )}
}

export default VirtualToursPage
