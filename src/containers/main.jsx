import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="app row">
        <div className="main col-12 col-sm-6">
          <h1 className="c">Konichiva! Welcome!</h1>
          <h1 className="c">I am Antal Bako</h1>
          <h1 className="c">Full-Stack Web-Developer</h1>
          <h2 className="c">Please, choose an option:</h2>
          <ol>
            <li>about</li>
            <li>work</li>
            <li>contact me</li>
          </ol>
          <form action="">
            <input type="text"/>
            <button type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Main;
