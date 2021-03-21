import React, { Component } from 'react';
import Typed from 'typed.js';

class Work extends Component {
  componentDidMount(){
    async function redirect(keycode){
      switch(keycode){
        case 48:
        document.querySelector('.chBox').click();
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/';
        break;
        case 49:
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/about';
        break;
        case 51:
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/connect';
        break;
        case document.querySelector('.button0'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/';
        break;
        case document.querySelector('.button1'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/about';
        break;
        case document.querySelector('.button3'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/connect';
        break;
        case document.querySelector('.button0-mob'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/';
        break;
        case document.querySelector('.button1-mob'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/about';
        break;
        case document.querySelector('.button3-mob'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/connect';
        break;
      default:
        return null;
      }
    }

    window.addEventListener("keydown", e => {redirect(e.keyCode), false});

    window.addEventListener('click', e => {redirect(e.target), false});

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function buttonTyper(string,element){
      let word = '';
      for (var i = 0; i < string.length; i++) {
        word = word + string[i];
        element.innerHTML = word;
        await sleep(50);
      }
    };


    document.querySelector('.button0').addEventListener('mouseover', ()=> {buttonTyper('0|HOME', document.querySelector('.button0') )});
    document.querySelector('.button0').addEventListener('mouseout', ()=> {document.querySelector('.button0').innerHTML = '0'});
    document.querySelector('.button1').addEventListener('mouseover', ()=> {buttonTyper('1|ABOUT', document.querySelector('.button1') )});
    document.querySelector('.button1').addEventListener('mouseout', ()=> {document.querySelector('.button1').innerHTML = '1'});
    document.querySelector('.button3').addEventListener('mouseover', ()=> {buttonTyper('3|CONNECT', document.querySelector('.button3') )});
    document.querySelector('.button3').addEventListener('mouseout', ()=> {document.querySelector('.button3').innerHTML = '3'});
  }

  render(){
    return(
      <div>
        <input className="chBox" type="checkbox"  style={{display: 'none'}}/>
        <div className="app screen">
          <h1 className="title">Work</h1>
          <h2 className='button0'>0</h2>
          <h2 className='button1'>1</h2>
          <h2 className='button3'>3</h2>
          <h2 className='button0-mob'>0|HOME</h2>
          <h2 className='button1-mob'>1|ABOUT</h2>
          <h2 className='button3-mob'>3|CONNECT</h2>
        </div>
      </div>)
  }
}

export default Work;
