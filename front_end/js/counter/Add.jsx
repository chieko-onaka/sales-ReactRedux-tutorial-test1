
import React, { Component } from 'react'
import ReactDom from "react-dom";



class Add extends Component{

  constructor (props) {
    super(props)
    this.state ={count:0, history:[]}
  }

  handlePlusButton=()=>{
    const new_count = this.state.count+1
    this.state.history.push(["+", Date.now()])
    const new_history = this.state.history
    this.setState({count: new_count, history: new_history})
  }

  handleMinusButton=()=>{
    const new_count = this.state.count-1
    this.state.history.push(["-", Date.now()])
    const new_history = this.state.history
    this.setState({count: new_count, history: new_history})
  }

  render(){
    return(
      <div>
        {this.state.count}
        {this.state.history}
        <button onClick={this.handlePlusButton}>+</button>
        <button onClick={this.handleMinusButton}>-</button>
      </div>
    )
  }
}


export default Add;
