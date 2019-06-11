import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    // debugger
    console.log(this.props)
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.posterFileName})`}}>

      </div>
    )
  }
}
