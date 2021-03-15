import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { setLang } from '../actions';
import Greet from '../../assets/greet';

class Menu extends Component {
  componentDidMount(){
    const greet = Greet.filter(e => e.symbol === this.props.lang)

    let typed = new Typed('#typed', {
      strings: [
      `<p>${greet[0].text}!</p>^1000\n<p>I'm Antal Bako</p>^1000\n<p>Full Stack Web Developer</p>^1000\n<p>Please, choose from the following:</p>^1000\n<p>1 | About</p>^1000\n<p>2 | Work</p>^1000\n<p>3 | Connect</p>`],
      typeSpeed: 20,
      loop: false,
      showCursor: false
    });
    setInterval(()=>{this.messageBox.focus()}, 11000);
  }

  render() {
    return (
      <div>
        <h1 id="typed"></h1><input type="text" ref={(input) => { this.messageBox = input; }} />
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


export default connect(mapStateToProps, mapDispatchToProps) (Menu);
