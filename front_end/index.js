import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Auth from './js/Auth.jsx'
import Signin from './js/Signin.jsx'
import Counter from './js/counter/Counter.jsx'
import Style from './style/App.css'



//ReactDom.render(<Signin />, document.getElementById('app'))
//ReactDom.render(<Counter />, document.getElementById('app'))

ReactDom.render(

  <Router>
    <Switch>
      <Route path="/" exact={true} component={Signin} />
      <Route path="/counter" exact={true} component={Counter} />
    </Switch>
  </Router>,
  document.getElementById('app')
)
