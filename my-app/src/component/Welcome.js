import React from 'react'
import {Component} from 'react'
const textArray = ["Welcome my name is Mark, and this is my portfolio", "Bienvenue mon nom est Mark Spence, et c'est mon portfolio" ];

class Welcome extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    return (
        <div>
           <h1 className="welcome">{textThatChanges}</h1>
    
        </div>
    )


  }
}

export default Welcome
