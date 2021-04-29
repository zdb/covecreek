import React, { Component } from 'react'
import loadScript from 'load-script';
import arrowLeft from '../images/arrow-left.svg';
import arrowRight from '../images/arrow-right.svg';

class Pano extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.prevPano = this.prevPano.bind(this);
    this.nextPano = this.nextPano.bind(this);
  }

  static defaultProps = { 
    xml: null,
    target: 'pano',
    swf: '/krpano/krpano.swf',
    id: 'krpanoSWFObject',
    bgcolor: "#000000",
    html5:"auto",
    flash: null,
    wmode: null,
    localfallback:"http://localhost:8090",
    vars: {},
    initvars: {},
    basepath: null,
    consolelog: false,
    mwheel: true,
    capturetouch: true,
    focus: false,
    webglsettings:{
      preserveDrawingBuffer:false, depth:false, stencil:false
    },
    mobilescale: 0.5,
    fakedevice: null,
    onready: null,
    onerror: null
  }

  prevPano (e) {
    const krpano = document.getElementById(this.props.id);
    krpano.call('prevslide');
  }
  
  nextPano(e) {
    const krpano = document.getElementById(this.props.id);
    krpano.call('nextslide');
  }

  createPano() {
    const {embedpano} = window;
    if (!(embedpano)) {
      console.log(window);
        throw new Error("krpano player is required");
    }

    if (!this.createLock && !this.krpanoObj) {
        this.createLock = true;
        const vm = this;

        embedpano({
          target: this.props.target,
          xml: this.props.xml,
          swf: this.props.swf,
          id: this.props.id,
          bgcolor: this.props.bgcolor,
          html5: this.props.html5,
          flash: this.props.flash,
          wmode: this.props.wmode,
          localfallback: this.props.localfallback,
          vars: this.props.vars,
          initvars: this.props.initvars,
          basepath: this.props.basepath,
          consolelog: this.props.consolelog,
          mwheel: this.props.mwheel,
          capturetouch: this.props.capturetouch,
          focus: this.props.focus,
          webglsettings: this.props.webglsettings,
          mobilescale: this.props.mobilescale,
          fakedevice: this.props.fakedevice,
          onready: this.props.onready,
          onerror: this.props.onerror
      });
    }
  }
  
  componentDidMount () {
    loadScript('/krpano/krpano.js',
      (error, script) => {
        if(!error) {
          this.createPano();
        }
      }
    )
    
  } 

  render () {
    return <div>
        <div className="pano-prev" onClick={this.prevPano}>
          <img src={arrowLeft}/>
        </div>
        <div className="pano-next" onClick={this.nextPano}>
          <img src={arrowRight}/>
        </div>

        <div id="pano" className="pano" style={{ background: '#000', width: '100%', height: '100%', minHeight: '100px'}}></div>
      </div>
  }
}

export default Pano