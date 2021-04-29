import React, { Component } from 'react';
import { Link } from "gatsby"
import "@fortawesome/fontawesome-free/css/all.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BackgroundVideo from "../components/videoBackground"
import VimeoPopup from "../components/vimeoPopup"
import TextureSection from "../components/TextureSection"
import Button from "../components/Button"
import ContactPopup from "../components/ContactPopup"

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


import "./youvisit.scss"

import bgVirtualToursTextslider from '../images/videos/bg-virtual-tours-textslider.jpg'

import imgAppIos from '../images/app-ios.png'
import imgAppAndroid from '../images/app-android.png'


class YouvisitPage extends Component {
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
  
  <Layout className="youvisit-page">
    <SEO title="YouVisit Pricing" keywords={[`cove creek productions`, `virtual tours`, `360 tours`, `youvisit alternatives`, `youvisit pricing`]} />

    <section className="section-360 section">
    <div className="nopanoscroll">
        <div className="section-360__text">
          <h2>Cove Creek vs. YouVisit</h2>
          <h3>See what makes us stand out</h3>
          <Button type="primary" url="https://tours.covecreekproductions.com/2020tour/index.html">Open Tour</Button>
        </div>
      </div>
      <Pano xml="/krpano/tour_schools.xml" />
    </section>

    <TextureSection className="section-youvisit-compare" bottom={false}>
      <div className={'section-intro'}>
        <h2>Unmatched Quality</h2>
        <p>Cove Creek is focused on creating the highest quality tour to showcase your school.</p>
      </div>

      <div className={'section-container'}>
        <h2>Attention To Detail</h2>
        <p>All aspects of production are finely tuned. Our owner is onsite for every project, ensuring your campus is captured to its full potential.</p>
        
        <h2>Custom Development</h2>
        <p>Your school will look unique, not the cookie cutter look of other schools. We integrate your brand into your tour.</p>
        
        <h2>Clean Design</h2>
        <p>We've spent 10 years creating a clean and intuitive interface</p>
        
        <h2>Price</h2>
        <p>Our tours are reasonably priced and our hosting fees are low. </p>
        
        <h2>You own the Content</h2>
        <p>When you partner with Cove Creek, you own the content. </p>
        
        <h2>No Multi-Year Contract</h2>
        <p>We do not believe in locking our clients into long term contracts.</p>
        
        <h2>Our Commitment</h2>
        <p>We are committed to delivering the very best in virtual reality. We are confident in our ability to showcase your school to its full potential.</p>


        {/* <div className="section-contact">
        <h2>Connect with us</h2>
        <ul>
          <li><span>Contact:</span> Brad Magill</li>
          <li>615.739.4583</li>
          <li>info@covecreekproductions.com</li>
        </ul>
      </div> */}
      </div>

      

      <h2>360° VR Tour Samples</h2>

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
            name: 'World Tour',
            url: 'https://tours.covecreekproductions.com/portfolio/index.html',
            image: imgWorld,
            height: 250,
          },
          {
            name: 'NYC Tourism',
            url: 'https://tours.covecreekproductions.com/ny/index.html',
            image: imgNyc,
            height: 250,
          },
          {
            name: 'Super Bowl LII',
            url: 'https://tours.covecreekproductions.com/2017/Superbowl/index.html',
            image: imgSuperbowl,
            height: 250,
          },
          {
            name: 'Kent School',
            url: 'https://tours.covecreekproductions.com/kentschoolfull2/index.html',
            image: imgKentSchool,
            height: 250,
          },
          {
            name: 'Camp Facility Portfolio',
            url: 'https://tours.covecreekproductions.com/portfolio_facility/index.html',
            image: imgCampFacility,
            height: 250,
          },
          {
            name: 'Ramapo (NY)',
            url: 'https://tours.covecreekproductions.com/ramapo_cc/index.html',
            image: imgRamapo,
            height: 250,
            disableMobile: true,
          },
  
          {
            name: 'Cheley (CO)',
            url: 'https://tours.covecreekproductions.com/cheley/index.html',
            image: imgCheley,
            height: 250,
            disableMobile: true,
          },
  
          {
            name: 'AZ Tourism',
            url: 'https://tours.covecreekproductions.com/az_tour/index.html',
            image: imgAztour,
            height: 250,
            disableMobile: true,
          },
      ]} 
      />

      <a className="appButton" href="https://itunes.apple.com/us/app/cove-creek-vr-world-tour/id1191879176">
        <img src={imgAppIos}/>
      </a>
      <a className="appButton" href="https://play.google.com/store/apps/details?id=com.covecreekproductions.covecreekvr&hl=en_US">
        <img src={imgAppAndroid}/>
      </a>

    </TextureSection>

  </Layout></div>
  )}
}

export default YouvisitPage
