import React from 'react'
import {Component} from 'react'
const textArray = ["Customer Service", "Web Design", "Mircosoft Office", "Google Drive", "Communcation Skills", "HTML", "CSS","JAVASCRIPT", "REACT","VUE", "BOOTSTRAP","NODE", "PHP", "TAILWIND","LARAVEL", "MYSQL"];

class Skills extends Component {
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
    let skills = textArray[this.state.textIdx % textArray.length];


    return (
        <div>
          <h1 style={{color:'white'}}>My skills:</h1>
            <h1 style={{color:'red'}}>{skills}</h1>
        </div>
    )
}
      }
export default Skills
