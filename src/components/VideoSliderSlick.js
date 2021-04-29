// import React, { Component } from 'react';
// import Slider from "react-slick";
// import './VideoSlider.scss'

// class VideoSlider extends Component {
  
//   handleClick() {
//     console.log('click')
//   }

//   render() {
//     const videos = [
//       {
//         title: 'Some Video Title',
//         thumb: 'https://placeimg.com/640/360/any',
//       },

//       {
//         title: 'Some Video Title',
//         thumb: 'https://placeimg.com/640/360/any',
//       },

//       {
//         title: 'Some Video Title',
//         thumb: 'https://placeimg.com/640/360/any',
//       },

//       {
//         title: 'Some Video Title',
//         thumb: 'https://placeimg.com/640/360/any',
//       },

//       {
//         title: 'Some Video Title',
//         thumb: 'https://placeimg.com/640/360/any',
//       },

//       {
//         title: 'Some Video Title',
//         thumb: 'https://placeimg.com/640/360/any',
//       },

//       {
//         title: 'Some Video Title',
//         thumb: 'https://placeimg.com/640/360/any',
//       },

//       {
//         title: 'Some Video Title',
//         thumb: 'https://placeimg.com/640/360/any',
//       }

//     ];


//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "50px",
//       slidesToShow: 5,
//       slidesToScroll: 5,
//       speed: 500,
//       focusOnSelect: true
//     };

//     return (
//       <div>
//         <Slider {...settings}>
//           {videos.map((video, index) => (
//             <div>
//               <div class="slide-container">
//                 <img class="video-thumb" src={video.thumb} alt="" />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     );
//   }
// }

// export default VideoSlider;