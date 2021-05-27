import React from 'react'
import {Component} from 'react'
class  extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
          current: '',
          count: 0,
          index: 0,
          letter: '',
          arrow: false,
          text: [
            "Artist",
            "photographer",
            "Designer"
          ],
         
        }
     
      }
      componentDidMount = () => {
     
       this.type()
      }
      type = () => {
        if(this.state.count === this.state.text.length) {
            this.setState({count: 0})
          } else {
          this.setState({current: this.state.text[this.state.count],
            index: this.state.index + 1,
           letter: this.state.current.slice(0, this.state.index) 
        
          })
          }  
  
        document.querySelector('.typing').textContent = this.state.letter
         if(this.state.letter === this.state.current) {
                this.setState({count: this.count + 1})
                this.setState({index: 0})
          }
          setTimeout(this.type, 400) 
     
         
        

const Skills = () => {
    return (
        <div>
            
        </div>
    )
}
      }
export default Skills
