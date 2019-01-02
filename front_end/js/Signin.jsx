import React, { Component } from 'react'
//import ReactDom from 'react-dom'
import request from 'superagent'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'


class Signin extends Component{
  render(){

    return(
      <form>
        <div className="signin">
          <span>mail</span><input name="address" type="email" required />
          <span>pass</span><input name="password" type="password" required />
          {/*<input class="signin-button" type="submit" value="Submit" />*/}
          <Link to="/counter">login</Link>
        </div>
      </form>
    );
  }
}

export default Signin;
