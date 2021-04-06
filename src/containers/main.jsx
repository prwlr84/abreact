import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { setLang } from '../actions';
import Menu from './menu';
import game from './game';

class Main extends Component {


  componentDidMount(){
    async function redirect(keycode){
      switch(keycode){
        case 49:
        document.querySelector('.chBox').click();
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/about';
        break;
        case 50:
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/work';
        break;
        case 51:
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/connect';
        break;
        case document.querySelector('.opt1'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/about';
        break;
        case document.querySelector('.opt2'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/work';
        break;
        case document.querySelector('.opt3'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/connect';
        break;
      default:
        return null;
      }
    }

    window.addEventListener("keydown", e => {redirect(e.keyCode), false});

    window.addEventListener('click', e => {redirect(e.target), false });

    this.props.setLang(this.props.ip);

    setTimeout(()=>{document.querySelector('.x').addEventListener('mouseover', () => {document.querySelector('.x').style.opacity = '0.5'})}, 10000);
    setTimeout(()=>{document.querySelector('.x').addEventListener('mouseout', () => {document.querySelector('.x').style.opacity = '1'})}, 10000);
    setTimeout(()=>{document.querySelector('.x').addEventListener('click', () => {document.querySelector('.egg').style.display = 'flex'})}, 10000);
  }

  render() {
    return (
      <div><input className="chBox" type="checkbox"  style={{display: 'none'}}/>
        <div className="app row screen">
          <div className="egg">
            <h5>Whack-the-stack</h5>
            <h6>Time: 60s</h6>
            <h6>Point:0</h6>
            <img className="eeLogo logo1"src="" alt="" />
            <img className="eeLogo logo2"src="" alt="" />
            <img className="eeLogo logo3"src="" alt="" />
          </div>
          <div className="main col-12 col-sm-6">
            { this.props.lang ? <Menu /> : <h1>Loading...</h1> }
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { setLang: setLang },
 dispatch
 );
}

function mapStateToProps(state) {
 return {
 ip: state.ip,
 lang: state.lang
 };
}


export default connect(mapStateToProps, mapDispatchToProps) (Main);
