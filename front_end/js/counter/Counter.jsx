import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Add from './Add'
import Reduce from './Reduce'
import Header from './Header'


class Counter extends Component{
  render(){
    return(
      <div>
        <Add /><Reduce /><Header />
      </div>
    );
  }
}


export default Counter;
