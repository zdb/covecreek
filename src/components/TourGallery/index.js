import './styles.scss'
import React, { Component, Fragment } from 'react'
import lodash from 'lodash'
import data from './data'
// import Header from './Header'
import { Grid, Slug, Fade } from 'mauerwerk'

const Cell = ({ toggle, name, url, height, description, css, maximized, image }) => (
  <a
    className="cell"
    style={{ backgroundImage: 'url('+image+')', cursor: !maximized ? 'pointer' : 'auto' }}
    href={url}
    target="_blank"
    >
    {/* onClick={!maximized ? toggle : undefined}> */}
    
    <div className="hover">
      <div className="hover__content">Click to View Tour</div>
    </div>
    <div className="name">{name}</div>
    


    {/* <Fade show={maximized} delay={maximized ? 400 : 0}>
      <div className="details">
        <Slug delay={600}>
          <div className="circle" style={{ background: css }} />
          <div className="close">
            <Icon type="close" style={{ cursor: 'pointer' }} onClick={toggle} />
          </div>
          <h1>{name}</h1>
          <p>{description}</p>
        </Slug>
      </div>
    </Fade>
    <Fade
      show={!maximized}
      from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
      enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
      leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
      delay={maximized ? 0 : 400}>
      <div className="name">{name}</div>
    </Fade> */}
  </a>
)

class TourGallery extends Component {
  constructor(props){
    super(props);

    this.state = {
      rawData: this.props.data.filter(
        d => d.name.toLowerCase().indexOf(this.state.filter) != -1
      ),
      data: []
    }

    this.state.data = this.state.rawData;
  }

  state = { data, columns: 2, margin: 10, filter: '', height: true }
  search = e => this.setState({ filter: e.target.value })
  shuffle = () => this.setState(state => ({ data: lodash.shuffle(state.data) }))

  componentDidMount(){
    this.state.data = []
    window.addEventListener("resize", this.handleMobileDisabled.bind(this));
    this.handleMobileDisabled();
  }
  
  handleMobileDisabled(){
    if(window.innerWidth < 760){
      this.state.data = this.state.rawData.filter(
        d => d.disableMobile !== true
      )
    } else {
      this.state.data = this.state.rawData
    }
  }

  render() {
    return (
      <div className="tour-gallery">
        <Grid
          className="grid"
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={this.state.data}
          // Key accessor, instructs grid on how to fet individual keys from the data set
          keys={d => d.name}
          // Can be a fixed value or an individual data accessor
          heights={this.props.heights ? this.props.heights : d => d.height }
          // Number of columns
          columns={this.props.columns}
          // Space between elements
          margin={this.props.margin}
          // Removes the possibility to scroll away from a maximized element
          lockScroll={false}
          // Delay when active elements (blown up) are minimized again
          closeDelay={400}>
          {(data, maximized, toggle) => (
            <Cell {...data} maximized={maximized} toggle={toggle} />
          )}
        </Grid>
      </div>
    )
  }
}

export default TourGallery
