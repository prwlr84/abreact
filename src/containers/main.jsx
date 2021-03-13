import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

class Main extends Component {
  componentDidMount(){
    let typed = new Typed('#typed', {
      strings: [
      "<p>Hello! Welcome!</p>^1000\n<p>I'm Antal Bako</p>^1000\n<p>Full Stack Web Developer</p>^1000\n<p>Please, choose from the following options:</p>^1000\n<p>1 | About</p>^1000\n<p>2 | Work</p>^1000\n<p>3 | Connect</p>"],
      typeSpeed: 20,
      loop: false,
      showCursor: false
    });
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  render() {
    return (
      <div className="app row">
        <div className="main col-12 col-sm-6">
          <h1 id="typed"></h1>
          <form action="">
            <input type="text"/>
            <button type="submit">GO</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Main;
