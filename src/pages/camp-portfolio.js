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

// tours
import imgcecbr from "../images/tourlist/cecbr.jpg"
import imgcheley from "../images/tourlist/cheley.jpg"
import imgramapo from "../images/tourlist/ramapo.jpg"
import imglochearn from "../images/tourlist/lochearn.jpg"
import imglindenmere from "../images/tourlist/lindenmere.jpg"
import imgistc from "../images/tourlist/istc.jpg"
import imgchipinaw from "../images/tourlist/chipinaw.jpg"
import imgbrantlake from "../images/tourlist/brantlake.jpg"
import imgwekeela from "../images/tourlist/wekeela.jpg"
import imggreystone from "../images/tourlist/greystone.jpg"
import imgtakajoui from "../images/tourlist/takajo.jpg"
import imgnockamixon from "../images/tourlist/nockamixon.jpg"
import imgspringlake from "../images/tourlist/springlake.jpg"
import imgromaca from "../images/tourlist/romaca.jpg"
import imgchestnutlake from "../images/tourlist/chestnutlake.jpg"
import imgbirchmontui from "../images/tourlist/birchmontui.jpg"
import imgramaquois from "../images/tourlist/ramaquois.jpg"
import imgweequahic from "../images/tourlist/weequahic.jpg"
import imglenox from "../images/tourlist/lenox.jpg"
import imgwatitoh from "../images/tourlist/watitoh.jpg"
import imgjefflake from "../images/tourlist/jefflake.jpg"
import imgpiercedaycamp from "../images/tourlist/piercedaycamp.jpg"
import imgbrynmawr from "../images/tourlist/brynmawr.jpg"
import imgwayneboys from "../images/tourlist/wayneboys.jpg"
import imgwaynegirls from "../images/tourlist/waynegirls.jpg"
import imghorseshoe from "../images/tourlist/horseshoe.jpg"
import imgcayuga from "../images/tourlist/cayuga.jpg"
import imgislandlake from "../images/tourlist/islandlake.jpg"
import imgtaconic from "../images/tourlist/taconic.jpg"
import imgkenmont from "../images/tourlist/kenmont.jpg"
import imgmanitou from "../images/tourlist/manitou.jpg"
import imgtrailsend from "../images/tourlist/trailsend.jpg"
import imgFriendship from "../images/tourlist/Friendship.jpg"
import imgtripplakeui from "../images/tourlist/tripplake.jpg"
import imglohikan from "../images/tourlist/lohikan.jpg"
import imgigc from "../images/tourlist/igc.jpg"
import imggreeley from "../images/tourlist/greeley.jpg"
import imgtowanda from "../images/tourlist/towanda.jpg"
import imgchenawanda from "../images/tourlist/caw.jpg"
import imgwinnebago from "../images/tourlist/winnebago.jpg"
import imghilltop from "../images/tourlist/hilltop.jpg"
import imgnjw from "../images/tourlist/njw.jpg"
import imgwinadu from "../images/tourlist/winadu.jpg"
import imgshoshanim from "../images/tourlist/shoshanim.jpg"
import imgrollinghills from "../images/tourlist/rollinghills.jpg"
import imglakeview from "../images/tourlist/lakeview.jpg"
import imgrobinhood from "../images/tourlist/robinhood.jpg"
import imgstarlight from "../images/tourlist/starlight.jpg"

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
    <SEO title="Summer Camp Virtual Tour Portfolio" keywords={[`cove creek productions`, `virtual tours`, `360 tours`, `virtual tour portfolio`]} />

    <section className="section-360 section">
    <div className="nopanoscroll">
      <div className="section-360__text">
          <h2>360° Virtual Tours </h2>
          <h3>Unmatched Quality &amp; Seamless VR Delivery</h3>
        </div>
      </div>
      <Pano xml="/krpano/tour.xml" />
    </section>

    <TextureSection>
      <h2>360° Tour Portfolio / VR Apps</h2>
      <TourGallery 
        heights={this.state.heights}
        columns={this.state.columns}
        margin={10}
        data={[
          {
            name: 'Equinunk / Blue Ridge',
            url: 'https://tours.americansummercamps.com/cecbr',
            image: imgcecbr,
            height: 250,
          },
          {
            name: 'Cheley',
            url: 'https://tours.americansummercamps.com/cheley',
            image: imgcheley,
            height: 250,
          },
          {
            name: 'Ramapo',
            url: 'https://tours.americansummercamps.com/ramapo_cc/',
            image: imgramapo,
            height: 250,
          },
          {
            name: 'Lochearn',
            url: 'https://tours.americansummercamps.com/lochearn',
            image: imglochearn,
            height: 250,
          },
          {
            name: 'Lindenmere',
            url: 'https://tours.americansummercamps.com/lindenmere',
            image: imglindenmere,
            height: 250,
          },
          {
            name: 'International Sports',
            url: 'https://tours.americansummercamps.com/istc',
            image: imgistc,
            height: 250,
          },
          {
            name: 'Chipinaw',
            url: 'https://tours.americansummercamps.com/chipinaw',
            image: imgchipinaw,
            height: 250,
          },
          {
            name: 'Brant Lake',
            url: 'https://tours.americansummercamps.com/brantlake',
            image: imgbrantlake,
            height: 250,
          },
          {
            name: 'Wekeela',
            url: 'https://tours.americansummercamps.com/wekeela',
            image: imgwekeela,
            height: 250,
          },
          {
            name: 'Greystone',
            url: 'http://covecreekproductions.com/tours/greystone/',
            image: imggreystone,
            height: 250,
          },
          {
            name: 'Takajo',
            url: 'https://tours.questvr.com/takajoui',
            image: imgtakajoui,
            height: 250,
          },
          {
            name: 'Nockamixon',
            url: 'https://tours.americansummercamps.com/nockamixon',
            image: imgnockamixon,
            height: 250,
          },
          {
            name: 'Spring Lake',
            url: 'https://tours.americansummercamps.com/springlake2019',
            image: imgspringlake,
            height: 250,
          },
          {
            name: 'Romaca',
            url: 'https://tours.americansummercamps.com/romaca',
            image: imgromaca,
            height: 250,
          },
          {
            name: 'Chestnut Lake',
            url: 'https://tours.americansummercamps.com/chestnutlake/',
            image: imgchestnutlake,
            height: 250,
          },
          {
            name: 'Birchmont',
            url: 'https://tours.americansummercamps.com/birchmontui',
            image: imgbirchmontui,
            height: 250,
          },
          {
            name: 'Ramaquois',
            url: 'https://tours.americansummercamps.com/ramaquois',
            image: imgramaquois,
            height: 250,
          },
          {
            name: 'Weequahic',
            url: 'https://tours.americansummercamps.com/weequahic',
            image: imgweequahic,
            height: 250,
          },
          {
            name: 'Lenox',
            url: 'https://tours.americansummercamps.com/lenox',
            image: imglenox,
            height: 250,
          },
          {
            name: 'Watitoh',
            url: 'https://tours.americansummercamps.com/watitoh',
            image: imgwatitoh,
            height: 250,
          },
          {
            name: 'Jeff Lake',
            url: 'https://tours.americansummercamps.com/jefflake',
            image: imgjefflake,
            height: 250,
          },
          {
            name: 'Pierce Day ',
            url: 'https://tours.americansummercamps.com/piercedaycamp',
            image: imgpiercedaycamp,
            height: 250,
          },
          {
            name: 'Bryn Mawr',
            url: 'https://tours.americansummercamps.com/brynmawr',
            image: imgbrynmawr,
            height: 250,
          },
          {
            name: 'Wayne Boys',
            url: 'https://tours.americansummercamps.com/wayneboys',
            image: imgwayneboys,
            height: 250,
          },
          {
            name: 'Wayne Girls',
            url: 'https://tours.americansummercamps.com/waynegirls',
            image: imgwaynegirls,
            height: 250,
          },
          {
            name: 'Horseshoe',
            url: 'https://tours.americansummercamps.com/horseshoe',
            image: imghorseshoe,
            height: 250,
          },
          {
            name: 'Cayuga',
            url: 'https://tours.americansummercamps.com/cayuga',
            image: imgcayuga,
            height: 250,
          },
          {
            name: 'Island Lake',
            url: 'https://tours.americansummercamps.com/islandlake',
            image: imgislandlake,
            height: 250,
          },
          {
            name: 'Taconic',
            url: 'https://tours.americansummercamps.com/taconic',
            image: imgtaconic,
            height: 250,
          },
          {
            name: 'Kenmont',
            url: 'https://tours.americansummercamps.com/kenmont',
            image: imgkenmont,
            height: 250,
          },
          {
            name: 'Manitou',
            url: 'https://tours.americansummercamps.com/manitou/',
            image: imgmanitou,
            height: 250,
          },
          {
            name: 'Trails End',
            url: 'https://tours.americansummercamps.com/trailsend',
            image: imgtrailsend,
            height: 250,
          },
          {
            name: 'Friendship',
            url: 'https://tours.americansummercamps.com/Friendship',
            image: imgFriendship,
            height: 250,
          },
          {
            name: 'Tripp Lake',
            url: 'https://tours.questvr.com/tripplakeui',
            image: imgtripplakeui,
            height: 250,
          },
          {
            name: 'Lohikan',
            url: 'https://tours.americansummercamps.com/lohikan_vtour',
            image: imglohikan,
            height: 250,
          },
          {
            name: 'International Gymnastics',
            url: 'https://tours.americansummercamps.com/igc',
            image: imgigc,
            height: 250,
          },
          {
            name: 'Greeley',
            url: 'https://tours.americansummercamps.com/greeley',
            image: imggreeley,
            height: 250,
          },
          {
            name: 'Towanda',
            url: 'https://tours.americansummercamps.com/towanda',
            image: imgtowanda,
            height: 250,
          },
          {
            name: 'Chenawanda',
            url: 'https://tours.americansummercamps.com/caw',
            image: imgchenawanda,
            height: 250,
          },
          {
            name: 'Winnebago',
            url: 'https://tours.americansummercamps.com/winnebago',
            image: imgwinnebago,
            height: 250,
          },
          {
            name: 'Hilltop',
            url: 'https://tours.americansummercamps.com/hilltop',
            image: imghilltop,
            height: 250,
          },
          {
            name: 'Nah Jee Wah',
            url: 'https://tours.americansummercamps.com/njw',
            image: imgnjw,
            height: 250,
          },
          {
            name: 'Windadu',
            url: 'https://tours.americansummercamps.com/winadu',
            image: imgwinadu,
            height: 250,
          },
          {
            name: 'Shoshanim',
            url: 'https://tours.americansummercamps.com/shoshanim',
            image: imgshoshanim,
            height: 250,
          },
          {
            name: 'Rolling Hills',
            url: 'https://tours.americansummercamps.com/rollinghills',
            image: imgrollinghills,
            height: 250,
          },
          {
            name: 'Lakeview',
            url: 'https://tours.americansummercamps.com/lakeview2',
            image: imglakeview,
            height: 250,
          },
          {
            name: 'Robinhood',
            url: 'https://tours.americansummercamps.com/robinhood',
            image: imgrobinhood,
            height: 250,
          },
          {
            name: 'Starlight',
            url: 'https://tours.americansummercamps.com/starlight',
            image: imgstarlight,
            height: 250,
          },
      ]
      } />

      {/* <a className="appButton" href="https://itunes.apple.com/us/app/cove-creek-vr-world-tour/id1191879176">
        <img src={imgAppIos}/>
      </a>
      <a className="appButton" href="https://play.google.com/store/apps/details?id=com.covecreekproductions.covecreekvr&hl=en_US">
        <img src={imgAppAndroid}/>
      </a> */}

    </TextureSection>

    <section className="section-video is-hidden-mobile">
      <TextSlider />
      <BackgroundVideo width='100%' height='90vh' url={'https://vimeo.com/335543303'} loadingBg={bgVirtualToursTextslider} />
    </section>

    <section className="section-video is-hidden-tablet">
      <TextSlider />
    </section>

    <TextureSection className="section-vr-production" bottom={false}>
      <h2>Full-scale VR Production</h2>
      <p>Our tours are built with a comprehensive approach to achieve highest quality.  Our process is detailed and has been finely tuned over many years. We strive to be a leader in the market and are committed to being ahead of the curve.</p>
      <ContactPopup buttonText={'Tell us about your project'}/>
    </TextureSection>
  </Layout></div>
  )}
}

export default VirtualToursPage
