import React, { Component } from 'react';
import fakerank from './fakerank';

class Ranks extends Component {
  render(){
    return(
      <div className="ranks col-sm-6" style={{display: 'none'}}>
        <h3>The best scores:</h3>
        <ul>
        {fakerank.sort().map(data => {return(
          <li key='data.name'>
            <p>{data.name}</p>
            <p>{data.point}</p>
            <p>{data.address}</p>
          </li>
        )})}
        </ul>
      </div>
    )
  }
}

export default Ranks;
