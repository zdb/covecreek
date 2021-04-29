import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoSlider from "../components/VideoSlider"
import VideoMobileSlider from "../components/VideoMobileSlider"



import thumbComeAlive from '../images/videos/thumb-come-alive.jpg'
import thumbGolfDigest from '../images/videos/thumb-golf-digest.jpg'
import thumbManhattan   from '../images/videos/thumb-manhattan.jpg'
import thumbOlympics    from '../images/videos/thumb-olympics.jpg'
import thumbSummerFades from '../images/videos/thumb-summer-fades.jpg'
import thumbSuperbowls  from '../images/videos/thumb-superbowl.jpg'
import thumbAnything  from '../images/videos/thumb-anything-is-possible.jpg'
import thumbOxc  from '../images/videos/thumb-oxc.jpg'

import bgComeAlive from '../images/videos/bg-come-alive.jpg'
import bgGolfDigest from '../images/videos/bg-golf-digest.jpg'
import bgManhattan   from '../images/videos/bg-manhattan.jpg'
import bgOlympics    from '../images/videos/bg-olympics.jpg'
import bgSummerFades from '../images/videos/bg-summer-fades.jpg'
import bgSuperbowls  from '../images/videos/bg-superbowl.jpg'
import bgAnything  from '../images/videos/bg-anything-is-possible.jpg'
import bgOxc  from '../images/videos/bg-oxc.jpg'

import mobileComeAlive from '../images/videos/mobile/come-alive.jpg'
import mobileGolfDigest from '../images/videos/mobile/golf-digest.jpg'
import mobileManhattan   from '../images/videos/mobile/manhattan.jpg'
import mobileOlympics    from '../images/videos/mobile/olympics.jpg'
import mobileSummerFades from '../images/videos/mobile/summer-fades.jpg'
import mobileSuperbowls  from '../images/videos/mobile/superbowl.jpg'
import mobileAnything  from '../images/videos/mobile/anything-is-possible.jpg'
import mobileOxc  from '../images/videos/mobile/oxc.jpg'

const videos = [
  {
    id: 1,
    title: 'Anything Is Possible',
    description: 'Cove Creek began creating commercial video spots in 2008.   We have slowly shifted our company to virtual tour development, but still take pride in working with a small number of video clients each year.',
    url: 'https://vimeo.com/335540928',
    bgUrl: 'https://vimeo.com/335540928',
    image: thumbAnything,
    imageBg: bgAnything,
    mobileImage: mobileAnything,
  },

  {
    id: 2,
    title: 'Superbowl 49',
    description: 'We helped capture downtown Phoenix\'s transformation for the NFL and Bluemedia.',
    url: 'https://vimeo.com/118312051',
    bgUrl: 'https://vimeo.com/118312051',
    image: thumbSuperbowls,
    imageBg: bgSuperbowls,
    mobileImage: mobileSuperbowls,
  },

  {
    id: 3,
    title: 'Summer Camp',
    description: 'Our passion for video started at summer camp.  We\'ve developed a craft for portraying the essence of camp, in turn helping summer camps across the country.',
    url: 'https://vimeo.com/105904767',
    bgUrl: 'https://vimeo.com/105904767',
    image: thumbSummerFades,
    imageBg: bgSummerFades,
    mobileImage: mobileSummerFades,
  },
  
  {
    id: 4,
    title: 'Rio Olympics 360',
    description: 'In partnership with Adobe and Golf Digest, we produced a 360 video for the Olympic Golf Course.',
    url: 'https://vimeo.com/238847824',
    bgUrl: 'https://vimeo.com/238847824',
    image: thumbOlympics,
    imageBg: bgOlympics,
    disableVideo: true,
    mobileImage: mobileOlympics,
  },
  {
    id: 5,
    title: 'Come Alive',
    description: 'Summer camp turned into a dramatic production.',
    url: 'https://vimeo.com/299389504',
    bgUrl: 'https://vimeo.com/338975442',
    image: thumbComeAlive,
    imageBg: bgComeAlive,
    mobileImage: mobileComeAlive,
  },
  {
    id: 6,
    title: 'Golf Digest',
    description: 'Weekly Golf Challenge for Golf Digest TV.',
    url: 'https://vimeo.com/85530969',
    bgUrl: 'https://vimeo.com/85530969',
    image: thumbGolfDigest,
    imageBg: bgGolfDigest,
    mobileImage: mobileGolfDigest,
  },
  {
    id: 7,
    title: 'Manhattan Transportation',
    description: 'We partnered with Pierce Day Camp to highlight their unique transportation infrastructure from NYC to Long Island.',
    url: 'https://vimeo.com/141135621',
    bgUrl: 'https://vimeo.com/141135621',
    image: thumbManhattan,
    imageBg: bgManhattan,
    mobileImage: mobileManhattan,
  },
  {
    id: 8,
    title: 'OXC ',
    description: 'Charitable event race that has raised millions of dollars.',
    url: 'https://vimeo.com/236029636',
    bgUrl: 'https://vimeo.com/236029636',
    image: thumbOxc,
    imageBg: bgOxc,
    mobileImage: mobileOxc,
  },
];

const VideosPage = () => (
  
  <Layout>
    <SEO title="Commercial Video Production | Cove Creek Productions" />
    <VideoSlider className="is-hidden-mobile" videos={videos}/>
    <VideoMobileSlider className="is-hidden-tablet" videos={videos}/>
  </Layout>
)

export default VideosPage

export const query = graphql`
  query ImagesQuery {
      # the filter is usefull if you have multiple source-filesystem instances
      # the name "images" is set in the gatsby-config
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
            childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            resolutions(width: 125, height: 125) {
              ...GatsbyImageSharpResolutions
            }
          }
      }
    }
  }
}
`;

