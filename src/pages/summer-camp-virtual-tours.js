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

import imgWorld from "../images/tours/world.jpg"
import imgKentSchool from "../images/tours/kentschool.jpg"
import imgNyc from "../images/tours/nyc.jpg"
import imgCampFacility from "../images/tours/camp-facility.jpg"
import imgSuperbowl from "../images/tours/superbowl.jpg"
import imgCampTraditional from "../images/tours/camp-traditional.jpg"
import imgCheley from "../images/tours/cheley.jpg"
import imgRamapo from "../images/tours/ramapo.jpg"
import imgAztour from "../images/tours/aztour.jpg"

import imgChipinaw from "../images/tours/chipinaw.jpg"
import imgJeffLake from "../images/tours/jefflake.jpg"
import imgLochearn from "../images/tours/lochearn.jpg"
import imgCECBR from "../images/tours/cecbr.jpg"
import imgWekeela from "../images/tours/wekeela.jpg"
import imgBrantLake from "../images/tours/brantlake.jpg"
import imgHorseshoe from "../images/tours/horseshoe.jpg"

import "./summer-camp-virtual-tours.scss"

import bgVirtualToursTextslider from '../images/videos/bg-virtual-tours-textslider.jpg'

import imgAppIos from '../images/app-ios.png'
import imgAppAndroid from '../images/app-android.png'


class SummerCampVirtualToursPage extends Component {
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
  
  <Layout className="summercamps-page">
    <SEO title="Summer Camp Virtual Tours" keywords={[`cove creek productions`, `virtual tours`, `360 tours`, `summer camp tours`, `summer camp virtual tours`]} />

    <section className="section-360 section">
    <div className="nopanoscroll">
        <div className="section-360__text">
          <h2>Cove Creek 360 Tours</h2>
          <h3>The ultimate platform to showcase your camp</h3>
        </div>
      </div>
      <Pano xml="/krpano/tour_summer_camps.xml" />
    </section>

    <TextureSection className="section-youvisit-compare" bottom={false}>
      <div className={'section-intro'}>
        <h2>Unmatched Quality</h2>
        <p>Cove Creek is focused on creating the highest quality tour to showcase your camp.</p>
        <br/>
      </div>

      <h2>360° VR Tour Samples</h2>

      <TourGallery 
        heights={this.state.heights}
        columns={this.state.columns}
        margin={10}
        data={[
          {
            name: 'Ramapo (NY)',
            description: '#a8edea → #fed6e3',
            css: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
            url: 'https://tours.americansummercamps.com/ramapo/',
            image: imgRamapo,
            height: 250,
          },
          {
            name: 'Cheley (CO)',
            description: '#f5f7fa → #c3cfe2',
            css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            url: 'https://tours.americansummercamps.com/cheley/',
            image: imgCheley,
            height: 250,
          },
          {
            name: 'Chipinaw (NY)',
            description: '#e0c3fc → #8ec5fc',
            css: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
            url: 'https://tours.americansummercamps.com/chipinaw/',
            image: imgChipinaw,
            height: 250,
          },
          {
            name: 'Jeff Lake (NJ)',
            description: '#f093fb → #f5576c',
            css: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
            url: 'https://tours.americansummercamps.com/jefflake/',
            image: imgJeffLake,
            height: 250,
          },
          {
            name: 'Lochearn (VT)',
            description: '#fdfbfb → #ebedee',
            css: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)',
            url: 'https://tours.americansummercamps.com/lochearn/',
            image: imgLochearn,
            height: 250,
          },
          {
            name: 'CECBR (PA)',
            description: '#5ee7df → #b490ca',
            css: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
            url: 'https://tours.americansummercamps.com/cecbr/',
            image: imgCECBR,
            height: 250,
          },
  
          {
            name: 'Wekeela (ME)',
            description: '#5ee7df → #b490ca',
            css: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
            url: 'https://tours.americansummercamps.com/wekeela/',
            image: imgWekeela,
            height: 250,
          },
  
          {
            name: 'Brant Lake (NY)',
            description: '#5ee7df → #b490ca',
            css: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
            url: 'http://tours.americansummercamps.com/brantlake/',
            image: imgBrantLake,
            height: 250,
          },
  
          {
            name: 'Horseshoe (WI)',
            description: '#5ee7df → #b490ca',
            css: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
            url: 'http://tours.americansummercamps.com/horseshoe/',
            image: imgHorseshoe,
            height: 250,
          },
          {
            name: 'Camp Facility Portfolio',
            description: '#5ee7df → #b490ca',
            css: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
            url: 'https://covecreekproductions.com/tours/portfolio_facility/',
            image: imgCampFacility,
            height: 250,
          },

          {
            name: 'Traditional Camp Portfolio',
            description: '#5ee7df → #b490ca',
            css: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
            url: 'https://covecreekproductions.com/tours/portfolio_traditional/',
            image: imgCampTraditional,
            height: 250,
          },

          {
            name: 'World Tour',
            description: '#5ee7df → #b490ca',
            css: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
            url: 'https://covecreekproductions.com/tours/portfolio/new.html',
            image: imgWorld,
            height: 250,
          }
      ]} 
      />

      <a className="appButton" href="https://itunes.apple.com/us/app/cove-creek-vr-world-tour/id1191879176">
        <img src={imgAppIos}/>
      </a>
      <a className="appButton" href="https://play.google.com/store/apps/details?id=com.covecreekproductions.covecreekvr&hl=en_US">
        <img src={imgAppAndroid}/>
      </a>

      <div className={'section-container'}>
        <h2>Attention to detail</h2> 
        <p>All aspects of production are finely tuned. Our owner is onsite for every project, ensuring every detail is noticed.</p>

        <h2>Custom Development</h2> 
        <p>Our tours have a clean look and are easy to navigate. We build and maintain our platform in-house.</p>

        <h2>Summer Camp Experience</h2> 
        <p>We have helped showcase over 100 camps across the country.</p>

        <h2>VR Ready</h2> 
        <p>Your tour will be VR ready, able to further showcase your tour. </p>

        <div className="section-contact">
        <h2>Connect with us</h2>
        <ul>
          <li><span>Contact:</span> Brad Magill</li>
          <li>615.739.4583</li>
          <li>info@covecreekproductions.com</li>
        </ul>
      </div>
      </div>

    </TextureSection>



  </Layout></div>
  )}
}

export default SummerCampVirtualToursPage
