import React, { Component } from 'react';

class About extends Component {
  render(){
    return(
      <div className="app">
        <h1 className="about-title">About</h1>
        <div className="about row">
            <div className="about1">
              <div className="about-text1">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Excepturi, debitis.</h3>
              </div>
              <div className="frame3"><img src="https://res.cloudinary.com/prwlr84/image/upload/v1615874393/resized-image-Promo_fg0i43.jpg" alt="Photo in a suit" /></div>
              <div className="frame3"><img src="https://res.cloudinary.com/prwlr84/image/upload/v1607610545/f67fwf2e07stxitmpmfv0gfu3ui8.jpg" alt="Sunny casual photo" /></div>
            </div>
            <div className="about2">
              <div className="frame3"><img src="https://res.cloudinary.com/prwlr84/image/upload/v1615874393/IMG_20190908_224113_zrth35.jpg" alt="Budapest" /></div>
              <div className="about-text2">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Excepturi, debitis.</h3>
              </div>
              <div className="frame3"><img src="https://res.cloudinary.com/prwlr84/image/upload/v1615874393/IMG_20181010_085053_owroqb.jpg" alt="Amsterdam" /></div>
            </div>
            <div className="about3">
              <div className="about-text3">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Excepturi, debitis.</h3>
              </div>
              <div className="frame3"><img src="https://res.cloudinary.com/prwlr84/image/upload/v1615874393/resized-image-Promo_1_s9hky3.jpg" alt="Holland" /></div>
              <div className="frame3"><img src="https://res.cloudinary.com/prwlr84/image/upload/v1615874393/IMG_20210102_153256_wfwk3u.jpg" alt="Mountain" /></div>
              <div className="frame3"><video autoPlay loop src="https://res.cloudinary.com/prwlr84/video/upload/v1615825455/vlc-record-2021-03-15-17h07m54s-GOPR0685.MP4-_convert-video-online.com_1_kd3qwx.mp4" alt="Mountain bike ride" /></div>
            </div>
        </div>
          <h2 className='button0'>0</h2>
          <h2 className='button2'>2</h2>
          <h2 className='button3'>3</h2>
      </div>
    )
  }
}

export default About;
