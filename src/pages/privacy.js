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

import "./privacy.scss"

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

    <Section style={{background:'rgb(22 32 52)', padding: '150px 0 100px 0', zIndex: '1' }} className='privacy'>
      <h1>CoveCreek Productions Privacy Policy</h1>
<p>This Privacy Policy governs the manner in which CoveCreek Productions collects, uses, maintains and discloses information collected from users (each, a “User”) of the https://covecreekproductions.com/ website (“Site”). This privacy policy applies to the Site and all products and services offered by CoveCreek Productions.</p>
<h3>Personal identification information</h3>
<p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>
<h3>Non-personal identification information</h3>
<p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>
<h3>Web browser cookies</h3>
<p>Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>
<h3>How we use collected information</h3>
<p>CoveCreek Productions may collect and use Users personal information for the following purposes:</p>
<ul>
<li><em>To improve customer service:</em><br/>
Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
<li><em>To personalize user experience:</em><br/>
We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
<li><em>To send periodic emails:</em><br/>
We may use the email address to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.</li>
</ul>
<h3>How we protect your information</h3>
<p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
<h3>Sharing your personal information</h3>
<p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.We may use third party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.</p>
<h3>Third party websites</h3>
<p>Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website’s own terms and policies.</p>
<h3>Children’s Guidelines</h3>
<p>Children under age 13 may not use this website without parental consent. If we learn that any personal information about any Minor has been collected without parental consent, then we will take reasonable steps to delete any such information.</p>
<h3>Changes to this privacy policy</h3>
<p>CoveCreek Productions has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>
<h3>Your acceptance of these terms</h3>
<p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
<h3>Contacting us</h3>
<p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:</p>
<p>CoveCreek Productions<br/>
<a href="https://covecreekproductions.com">https://covecreekproductions.com</a><br/>
<a href="mailto:brad@covecreekproductions.com">brad@covecreekproductions.com</a></p>
<br/>
<p>This document was last updated on January 12, 2021</p>
    </Section>

    {/* <Section style={{background:'rgb(22 32 52)', padding: '150px 0 100px 0', zIndex: '1' }}>
        <ContactSection/>
    </Section> */}
  </Layout></div>
  )}
}

export default VirtualToursPage
