import React, { Component } from 'react';

class About extends Component {
  render(){
    return(
      <div className="app">
        <h1>About</h1>
        <div className="about row">
            <div className="frame2"><img style={{width: '15vw'}} src="https://res.cloudinary.com/prwlr84/image/upload/v1607610545/f67fwf2e07stxitmpmfv0gfu3ui8.jpg" alt="Sunny casual photo" /></div>
            <h3 style={{width: '45vw'}}>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Excepturi, debitis.</h3>
            <div className="frame2"><img style={{width: '25vw'}} src="https://res.cloudinary.com/prwlr84/image/upload/v1615826371/IMG_20180413_143432_un7dgm.jpg" alt="Photo in a suit" /></div>
            <div className="frame2"><img style={{width: '22vw'}} src="https://res.cloudinary.com/prwlr84/image/upload/v1615826393/IMG_20190908_224113_iujc11.jpg" alt="Budapest" /></div>
            <div className="frame2"><img style={{width: '22vw'}} src="https://res.cloudinary.com/prwlr84/image/upload/v1615826370/IMG_20181010_085053_p7cnf7.jpg" alt="Amsterdam" /></div>
            <h3 style={{width: '25vw'}}>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Excepturi, debitis.</h3>
            <h3 style={{width: '55vw'}}>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Excepturi, debitis.</h3>
            <div className="frame2"><img style={{width: '17vw'}} src="https://res.cloudinary.com/prwlr84/image/upload/v1615826393/IMG_20180626_151418_ulhc9y.jpg" alt="Holland" /></div>
            <div className="frame2"><img style={{width: '17vw'}} src="https://res.cloudinary.com/prwlr84/image/upload/v1615826371/IMG_20210102_153256_e7hjic.jpg" alt="Mountain" /></div>
            <div className="frame2"><video style={{width: '17vw'}} autoPlay loop src="https://res.cloudinary.com/prwlr84/video/upload/v1615825455/vlc-record-2021-03-15-17h07m54s-GOPR0685.MP4-_convert-video-online.com_1_kd3qwx.mp4" alt="Mountain bike ride" /></div>
        </div>
          <h2 className='button0'>0</h2>
          <h2 className='button2'>2</h2>
          <h2 className='button3'>3</h2>
      </div>
    )
  }
}

export default About;
