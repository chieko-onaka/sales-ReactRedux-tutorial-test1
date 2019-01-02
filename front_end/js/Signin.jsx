import React, { Component } from 'react'
//import ReactDom from 'react-dom'
//import request from 'superagent'
//import React, {Component} from 'react';
import {connect} from 'react-redux'
//import {Field, reduxForm} from 'redux-form'
//import {Link} from 'react-router-dom'


class Signin extends Component{
  render(){
    return(
      <form>
        <div className="signin">
          <label name="address" type="text" />
          <label name="password" type="text" />
          <input label="login" type="submit" value="ログイン" />
        </div>
      </form>
    );
  }
}

export default Signin;
