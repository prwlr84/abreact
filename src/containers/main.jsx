import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { setLang } from '../actions';
import Menu from './menu';

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
      default:
        return null;
      }
    }

    window.addEventListener("keydown", e => {redirect(e.keyCode), false});

    window.addEventListener('click', e => {
      switch(e.target){
        case document.querySelector('.opt1'):
        document.location.href = '/about';
        break;
        case document.querySelector('.opt2'):
        document.location.href = '/work';
        break;
        case document.querySelector('.opt3'):
        document.location.href = '/connect';
        break;
      default:
        return null;
      }
    });


    this.props.setLang(this.props.ip);
  }

  render() {
    return (
      <div><input className="chBox" type="checkbox"  />
        <div className="app row screen">
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
