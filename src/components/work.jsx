import React, { Component } from 'react';
import Typed from 'typed.js';
import workList from '../../assets/work_list';


class Work extends Component {
  constructor(props) {
    super(props);
    this.state = { list: true, current: "" };

    this.toggleList = this.toggleList.bind(this);
  }


  componentDidMount(){
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function redirect(keycode){
      switch(keycode){
        case 48:
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/';
        break;
        case 49:
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/about';
        break;
        case 51:
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/connect';
        break;
        case document.querySelector('.button0'):
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/';
        break;
        case document.querySelector('.button1'):
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/about';
        break;
        case document.querySelector('.button3'):
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/connect';
        break;
        case document.querySelector('.button0-mob'):
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/';
        break;
        case document.querySelector('.button1-mob'):
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/about';
        break;
        case document.querySelector('.button3-mob'):
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/connect';
        break;
      default:
        return null;
      }
    }

    window.addEventListener("keydown", e => {redirect(e.keyCode), false});

    window.addEventListener('click', e => {redirect(e.target), false});

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

  list(){
    return(
      <div className="col-sm-6 order-sm-1" id="list">
        {workList.map(e => {return(
          <div key={e.name} className="frame3">
            <img src={e.img} alt="" onClick={() => this.toggleList(e.name)} />
            <h3 onClick={() => this.toggleList(e.name)}>{e.name}</h3>
            <p onClick={() => this.redirect(e.url)}>{e.url}</p>
          </div>
        )})}
      </div>
      )
  }

  redirect(url){
      document.location.href = `http://${url}`;
    }

  detail(name){
    const current = workList.find(e => e.name === name);
    return(
      <div className="col-sm-6 order-sm-1" id="detail">
        <div className="frame">
          <h1>{current.name}</h1>
          <h3 onClick={() => this.redirect(current.url)}>{current.url}</h3>
          <img src={current.img} alt=""/>
          {current.desc.map(e => {return(<h4 key={e}>{e}</h4>)})}
          <br/>
          <h5 onClick={() => this.toggleList("")}>GO BACK</h5>
        </div>
      </div>
      )
  }

  async toggleList(n){
    var elems = document.querySelectorAll('.frame3');
    var detail = document.querySelector('.frame');
    var elemCount = elems.length;

    for (var i = 0; i < elemCount; i++) {
      elems[i].classList.toggle("fade-out");
    }
    await new Promise(resolve => setTimeout(resolve, 600));
    this.setState({list: !this.state.list, current: n});
  }

  render(){
    return(
      <div>
        <input className="chBox" type="checkbox"  style={{display: 'none'}}/>
        <div className="app screen">
          <h1 className="title">Work</h1>
          <div className="work row">
            <div className="col-sm-6 order-sm-2">
              <h1>Have a look around!</h1>
            </div>
            {this.state.list ? this.list() : this.detail(this.state.current)}
          </div>
          <h2 className='button0'>0</h2>
          <h2 className='button1'>1</h2>
          <h2 className='button3'>3</h2>
          <h2 className='button0-mob'>0|HOME</h2>
          <h2 className='button1-mob'>1|ABOUT</h2>
          <h2 className='button3-mob'>3|CONNECT</h2>
        </div>
      </div>
    )
  }
}

export default Work;

{/*<div className="frame3">
          <img src="https://res.cloudinary.com/prwlr84/image/upload/v1616411827/Opera_Snapshot_2021-03-22_120044_www.redu.co_ytaiqj.png" alt="" />
          <h3>REDU.CO</h3>
          <p>redu.co</p>
        </div>
        <div className="frame3">
          <img src="https://res.cloudinary.com/prwlr84/image/upload/v1616411827/Opera_Snapshot_2021-03-22_120650_mundo-coche.com_mdp64d.png" alt="" />
          <h3>MUNDO COCHE</h3>
          <p>mundo-coche.com</p>
        </div>
        <div className="frame3">
          <img src="https://res.cloudinary.com/prwlr84/image/upload/v1616411827/Opera_Snapshot_2021-03-22_120145_rent-a-skill.herokuapp.com_heitum.png" alt="" />
          <h3>RENT-A-SKILL</h3>
          <p>rent-a-skill.herokuapp.com</p>
        </div>
        <div className="frame3">
          <img src="https://res.cloudinary.com/prwlr84/image/upload/v1616411827/Opera_Snapshot_2021-03-22_120520_chat-ab-rrr.herokuapp.com_bgk8qi.png" alt="" />
          <h3>CHAT APP</h3>
          <p>chat-ab-rrr.herokuapp.com</p>
        </div>
        <div className="frame3">
          <img src="https://res.cloudinary.com/prwlr84/image/upload/v1616411827/Opera_Snapshot_2021-03-22_121453_localhost_wc9kng.png" alt="" />
          <h3>GARAGE APP</h3>
          <p>rwe-garage.herokuapp.com</p>
        </div>*/}
