import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { setLang } from '../actions';
import Menu from './menu';

class Main extends Component {


  componentDidMount(){
    window.addEventListener("keydown", e => {
      switch(e.keyCode){
        case 49:
        document.location.href = '/about';
        break;
        case 50:
        document.location.href = '/work';
        break;
        case 51:
        document.location.href = '/connect';
        break;
      default:
        return null;
      }
    });

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
      <div className="app row">
        <div className="main col-12 col-sm-6">
          { this.props.lang ? <Menu /> : <h1>Loading...</h1> }
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
